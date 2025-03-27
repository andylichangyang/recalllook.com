class NavigationBar {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'en';
    this.init();
  }

  init() {
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

    // 登录/注册按钮
    document.querySelector('.login-btn').addEventListener('click', () => {
      document.getElementById('loginModal').style.display = 'block';
    });

    document.querySelector('.signup-btn').addEventListener('click', () => {
      document.getElementById('signupModal').style.display = 'block';
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

// 创建模态框组件
class Modal {
  constructor() {
    this.createModals();
    this.setupEventListeners();
  }

  createModals() {
    const modals = `
      <!-- Login Modal -->
      <div class="modal" id="loginModal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2 data-i18n="login">Login</h2>
          <form class="auth-form">
            <div class="form-group">
              <label for="loginEmail">Email</label>
              <input type="email" id="loginEmail" required>
            </div>
            <div class="form-group">
              <label for="loginPassword">Password</label>
              <input type="password" id="loginPassword" required>
            </div>
            <div class="form-options">
              <label>
                <input type="checkbox"> Remember me
              </label>
              <a href="#" class="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" class="submit-btn" data-i18n="login">Login</button>
          </form>
          <div class="social-login">
            <p>Or login with</p>
            <div class="social-buttons">
              <button class="social-btn google">
                <i class="fab fa-google"></i> Google
              </button>
              <button class="social-btn facebook">
                <i class="fab fa-facebook-f"></i> Facebook
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Signup Modal -->
      <div class="modal" id="signupModal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2 data-i18n="signup">Create Account</h2>
          <form class="auth-form">
            <div class="form-group">
              <label for="signupName">Full Name</label>
              <input type="text" id="signupName" required>
            </div>
            <div class="form-group">
              <label for="signupEmail">Email</label>
              <input type="email" id="signupEmail" required>
            </div>
            <div class="form-group">
              <label for="signupPassword">Password</label>
              <input type="password" id="signupPassword" required>
            </div>
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" required>
            </div>
            <div class="form-options">
              <label>
                <input type="checkbox" required> I agree to the Terms of Service
              </label>
            </div>
            <button type="submit" class="submit-btn" data-i18n="signup">Create Account</button>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modals);
  }

  setupEventListeners() {
    // 关闭按钮
    document.querySelectorAll('.close').forEach(btn => {
      btn.addEventListener('click', () => {
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('signupModal').style.display = 'none';
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
