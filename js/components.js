// 组件加载器
class ComponentLoader {
  static async loadComponent(url) {
    try {
      const response = await fetch(url);
      const html = await response.text();
      return html;
    } catch (error) {
      console.error('Error loading component:', error);
      return '';
    }
  }
}

// 导航栏组件
class NavigationBar {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'en';
    this.init();
  }

  async init() {
    const headerHtml = await ComponentLoader.loadComponent('components/header.html');
    document.body.insertAdjacentHTML('afterbegin', headerHtml);
    this.createNav();
    this.setupEventListeners();
    this.updateLanguage();
  }

  createNav() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
      <div class="logo">RecallLook</div>
      <ul class="nav-links">
        <li><a href="index.html" data-i18n="home">Home</a></li>
        <li><a href="tools.html" data-i18n="allTools">All Tools</a></li>
        <li><a href="about.html" data-i18n="about">About</a></li>
      </ul>
      <div class="nav-right">
        <div class="language-selector">
          <button class="lang-btn">
            <span class="current-lang">${this.currentLang.toUpperCase()}</span>
            <i class="fas fa-chevron-down"></i>
          </button>
          <div class="lang-dropdown">
            <a href="#" data-lang="en">English</a>
            <a href="#" data-lang="zh">中文</a>
            <a href="#" data-lang="es">Español</a>
            <a href="#" data-lang="fr">Français</a>
          </div>
        </div>
        <div class="auth-buttons">
          <button class="login-btn" data-i18n="login">Login</button>
          <button class="signup-btn" data-i18n="signup">Sign Up</button>
        </div>
      </div>
    `;

    const header = document.createElement('header');
    header.appendChild(nav);
    document.body.insertBefore(header, document.body.firstChild);
  }

  setupEventListeners() {
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');

    if (loginBtn) {
      loginBtn.addEventListener('click', () => {
        document.getElementById('loginModal').style.display = 'block';
      });
    }

    if (signupBtn) {
      signupBtn.addEventListener('click', () => {
        document.getElementById('signupModal').style.display = 'block';
      });
    }

    // 语言切换
    document.querySelectorAll('.lang-dropdown a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = e.target.dataset.lang;
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.updateLanguage();
      });
    });
  }

  updateLanguage() {
    const lang = languages[this.currentLang];
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      if (lang[key]) {
        element.textContent = lang[key];
      }
    });
  }
}

// 模态框组件
class Modal {
  constructor() {
    this.init();
  }

  async init() {
    const modalHtml = await ComponentLoader.loadComponent('components/modal.html');
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    this.setupEventListeners();
  }

  setupEventListeners() {
    // 关闭按钮事件
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        if (modal) {
          modal.style.display = 'none';
        }
      });
    });

    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
      }
    });

    // 表单提交
    document.querySelectorAll('.auth-form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        // 添加表单提交逻辑
        console.log('Form submitted');
      });
    });
  }
}

// 页脚组件
class Footer {
  constructor() {
    this.init();
  }

  async init() {
    const footerHtml = await ComponentLoader.loadComponent('components/footer.html');
    document.body.insertAdjacentHTML('beforeend', footerHtml);
  }
} 
