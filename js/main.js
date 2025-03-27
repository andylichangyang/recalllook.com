// 初始化所有组件和工具
document.addEventListener('DOMContentLoaded', () => {
  // 初始化组件
  const navigationBar = new NavigationBar();
  const modal = new Modal();
  const footer = new Footer();

  // 初始化工具
  const authManager = new AuthManager();
  const loadingManager = new LoadingManager();
  const performanceManager = new PerformanceManager();
  const favoritesManager = new FavoritesManager();
  const searchManager = new SearchManager();
  const formValidation = new FormValidation();

  // 初始化国际化
  const currentLang = localStorage.getItem('language') || 'zh';
  const i18n = new I18n(currentLang);

  // 设置表单验证
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    formValidation.setupRealTimeValidation(form);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const { isValid, errors } = formValidation.validateForm(form);
      if (isValid) {
        // 处理表单提交
        handleFormSubmit(form);
      }
    });
  });

  // 预加载关键资源
  performanceManager.preloadResources();
});

// 处理表单提交
async function handleFormSubmit(form) {
  const loadingManager = new LoadingManager();
  loadingManager.showLoading('提交中...');

  try {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // 根据表单类型处理不同的提交逻辑
    switch (form.id) {
      case 'loginForm':
        await handleLogin(data);
        break;
      case 'signupForm':
        await handleSignup(data);
        break;
      case 'contactForm':
        await handleContact(data);
        break;
      default:
        console.warn('Unknown form type:', form.id);
    }
  } catch (error) {
    console.error('Form submission error:', error);
    loadingManager.showError('提交失败,请重试');
  } finally {
    loadingManager.hideLoading();
  }
}

// 处理登录
async function handleLogin(data) {
  const authManager = new AuthManager();
  const loadingManager = new LoadingManager();

  try {
    await authManager.handleLogin(data);
    loadingManager.showSuccess('登录成功');
    window.location.reload();
  } catch (error) {
    loadingManager.showError('登录失败,请检查邮箱和密码');
  }
}

// 处理注册
async function handleSignup(data) {
  const authManager = new AuthManager();
  const loadingManager = new LoadingManager();

  try {
    await authManager.handleSignup(data);
    loadingManager.showSuccess('注册成功');
    window.location.reload();
  } catch (error) {
    loadingManager.showError('注册失败,请稍后重试');
  }
}

// 处理联系表单
async function handleContact(data) {
  const loadingManager = new LoadingManager();

  try {
    // 这里添加实际的API调用
    await mockContactAPI(data);
    loadingManager.showSuccess('消息已发送');
    document.getElementById('contactForm').reset();
  } catch (error) {
    loadingManager.showError('发送失败,请稍后重试');
  }
}

// 模拟API调用
function mockContactAPI(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Contact form data:', data);
      resolve({ success: true });
    }, 1000);
  });
}

// 国际化类
class I18n {
  constructor(lang) {
    this.lang = lang;
    this.translations = languages[lang];
    this.init();
  }

  init() {
    // 更新所有带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (this.translations[key]) {
        element.textContent = this.translations[key];
      }
    });

    // 更新语言选择器
    const languageSelect = document.querySelector('.language-select');
    if (languageSelect) {
      languageSelect.value = this.lang;
    }
  }

  translate(key) {
    return this.translations[key] || key;
  }
} 
