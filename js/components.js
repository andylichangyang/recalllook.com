// 组件加载器
class ComponentLoader {
  static async loadComponent(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to load component: ${url}`);
      }
      return await response.text();
    } catch (error) {
      console.error('Error loading component:', error);
      return '';
    }
  }
}

// 导航栏组件
class NavigationBar {
  constructor() {
    this.headerContainer = document.getElementById('header-container');
  }

  async init() {
    const headerHtml = await ComponentLoader.loadComponent('components/header.html');
    this.headerContainer.innerHTML = headerHtml;
    this.setupEventListeners();
  }

  setupEventListeners() {
    // 语言切换
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
      languageSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        localStorage.setItem('language', lang);
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
      });
    }

    // 登录/注册按钮
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');

    if (loginBtn) {
      loginBtn.addEventListener('click', () => {
        const modal = new Modal();
        modal.show('loginModal');
      });
    }

    if (signupBtn) {
      signupBtn.addEventListener('click', () => {
        const modal = new Modal();
        modal.show('signupModal');
      });
    }
  }
}

// 模态框组件
class Modal {
  constructor() {
    this.modalContainer = document.getElementById('modal-container');
    this.modals = {};
  }

  async init() {
    const modalHtml = await ComponentLoader.loadComponent('components/modal.html');
    this.modalContainer.innerHTML = modalHtml;
    this.setupEventListeners();
  }

  setupEventListeners() {
    // 关闭按钮
    document.querySelectorAll('.close').forEach(closeBtn => {
      closeBtn.addEventListener('click', () => {
        this.hideAll();
      });
    });

    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        this.hideAll();
      }
    });

    // 切换登录/注册模态框
    document.querySelectorAll('.switch-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentModal = e.target.closest('.modal');
        const targetModal = currentModal.id === 'loginModal' ? 'signupModal' : 'loginModal';
        this.hideAll();
        this.show(targetModal);
      });
    });
  }

  show(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
      this.modals[modalId] = modal;
    }
  }

  hide(modalId) {
    const modal = this.modals[modalId];
    if (modal) {
      modal.style.display = 'none';
      delete this.modals[modalId];
    }
  }

  hideAll() {
    Object.keys(this.modals).forEach(modalId => {
      this.hide(modalId);
    });
  }
}

// 页脚组件
class Footer {
  constructor() {
    this.footerContainer = document.getElementById('footer-container');
  }

  async init() {
    const footerHtml = await ComponentLoader.loadComponent('components/footer.html');
    this.footerContainer.innerHTML = footerHtml;
  }
}

// 工具卡片组件
class ToolCard {
  constructor(tool) {
    this.tool = tool;
  }

  create() {
    const card = document.createElement('div');
    card.className = 'tool-card fade-in';
    card.dataset.id = this.tool.id;
    card.dataset.category = this.tool.category;
    card.dataset.price = this.tool.price;
    card.dataset.rating = this.tool.rating;

    card.innerHTML = `
      <img src="${this.tool.image}" alt="${this.tool.title}">
      <div class="tool-content">
        <h3>${this.tool.title}</h3>
        <p>${this.tool.description}</p>
        <div class="tool-meta">
          <span class="price">${this.tool.price === 0 ? 'Free' : `$${this.tool.price}`}</span>
          <span class="rating">
            ${this.createStarRating(this.tool.rating)}
            <span>(${this.tool.rating})</span>
          </span>
        </div>
        <button class="favorite-btn">
          <i class="far fa-heart"></i>
        </button>
      </div>
    `;

    return card;
  }

  createStarRating(rating) {
    return Array(5).fill('').map((_, i) => `
      <i class="fas fa-star ${i < rating ? 'active' : ''}"></i>
    `).join('');
  }
}

// 导出组件
export {
  ComponentLoader,
  NavigationBar,
  Modal,
  Footer,
  ToolCard
};
