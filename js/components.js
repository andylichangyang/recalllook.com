class ComponentLoader {
  static async load(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to load component: ${url}`);
      }
      return await response.text();
    } catch (error) {
      console.error('Error loading component:', error);
      throw error;
    }
  }
}

class NavigationBar {
  constructor() {
    this.init();
  }

  async init() {
    try {
      const headerHtml = await ComponentLoader.load('/components/header.html');
      document.getElementById('header-placeholder').innerHTML = headerHtml;
      this.setupEventListeners();
    } catch (error) {
      console.error('Error initializing navigation bar:', error);
    }
  }

  setupEventListeners() {
    // 语言选择
    const languageSelect = document.querySelector('.language-select');
    if (languageSelect) {
      languageSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        this.changeLanguage(lang);
      });
    }

    // 登录/注册按钮
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    if (loginBtn) {
      loginBtn.addEventListener('click', () => this.showLoginModal());
    }
    if (signupBtn) {
      signupBtn.addEventListener('click', () => this.showSignupModal());
    }
  }

  changeLanguage(lang) {
    // 更新语言设置
    localStorage.setItem('language', lang);
    // 重新加载页面以应用新语言
    window.location.reload();
  }

  showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  showSignupModal() {
    const modal = document.getElementById('signupModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }
}

class Modal {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    // 关闭按钮
    document.querySelectorAll('.modal .close').forEach(closeBtn => {
      closeBtn.addEventListener('click', () => this.hideAllModals());
    });

    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        this.hideAllModals();
      }
    });

    // 切换登录/注册表单
    const switchToSignup = document.querySelector('.switch-to-signup');
    const switchToLogin = document.querySelector('.switch-to-login');
    if (switchToSignup) {
      switchToSignup.addEventListener('click', () => this.switchModal('signup'));
    }
    if (switchToLogin) {
      switchToLogin.addEventListener('click', () => this.switchModal('login'));
    }
  }

  show(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      this.hideAllModals();
      modal.style.display = 'block';
    }
  }

  hide(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
  }

  hideAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.style.display = 'none';
    });
  }

  switchModal(target) {
    this.hideAllModals();
    this.show(target + 'Modal');
  }
}

class Footer {
  constructor() {
    this.init();
  }

  async init() {
    try {
      const footerHtml = await ComponentLoader.load('/components/footer.html');
      document.getElementById('footer-placeholder').innerHTML = footerHtml;
    } catch (error) {
      console.error('Error initializing footer:', error);
    }
  }
}

class ToolCard {
  constructor(tool) {
    this.tool = tool;
  }

  create() {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.dataset.id = this.tool.id;
    card.dataset.category = this.tool.category;
    card.dataset.price = this.tool.price;
    card.dataset.rating = this.tool.rating;

    card.innerHTML = `
      <img src="${this.tool.image}" alt="${this.tool.title}" class="tool-image">
      <div class="tool-content">
        <h3>${this.tool.title}</h3>
        <p>${this.tool.description}</p>
        <div class="tool-meta">
          <span class="category">${this.tool.category}</span>
          <span class="price">${this.tool.price}</span>
          <div class="rating">
            ${this.createStarRating(this.tool.rating)}
          </div>
        </div>
        <button class="favorite-btn">
          <i class="far fa-heart"></i>
        </button>
      </div>
    `;

    return card;
  }

  createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars += '<i class="fas fa-star"></i>';
      } else if (i === fullStars && hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
      } else {
        stars += '<i class="far fa-star"></i>';
      }
    }

    return stars;
  }
}
