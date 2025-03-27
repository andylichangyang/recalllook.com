class AuthManager {
  constructor() {
    this.currentUser = null;
    this.token = localStorage.getItem('token');
    this.loadingManager = new LoadingManager();
  }

  init() {
    this.checkAuthStatus();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // 监听登录按钮点击
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
      loginBtn.addEventListener('click', () => this.showLoginModal());
    }

    // 监听注册按钮点击
    const signupBtn = document.querySelector('.signup-btn');
    if (signupBtn) {
      signupBtn.addEventListener('click', () => this.showSignupModal());
    }
  }

  async login(email, password) {
    try {
      this.loadingManager.showLoading();
      // 这里添加实际的登录API调用
      const response = await this.mockLoginAPI(email, password);
      
      if (response.success) {
        this.setSession(response.token, response.user);
        this.loadingManager.showSuccess('登录成功');
        this.hideLoginModal();
        this.updateUIForLoggedInUser();
      } else {
        this.loadingManager.showError(response.message);
      }
    } catch (error) {
      this.loadingManager.showError('登录失败,请稍后重试');
    } finally {
      this.loadingManager.hideLoading();
    }
  }

  async signup(name, email, password) {
    try {
      this.loadingManager.showLoading();
      // 这里添加实际的注册API调用
      const response = await this.mockSignupAPI(name, email, password);
      
      if (response.success) {
        this.setSession(response.token, response.user);
        this.loadingManager.showSuccess('注册成功');
        this.hideSignupModal();
        this.updateUIForLoggedInUser();
      } else {
        this.loadingManager.showError(response.message);
      }
    } catch (error) {
      this.loadingManager.showError('注册失败,请稍后重试');
    } finally {
      this.loadingManager.hideLoading();
    }
  }

  logout() {
    this.clearSession();
    this.updateUIForLoggedOutUser();
    this.loadingManager.showSuccess('已退出登录');
  }

  setSession(token, user) {
    this.token = token;
    this.currentUser = user;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearSession() {
    this.token = null;
    this.currentUser = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  checkAuthStatus() {
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUser = JSON.parse(user);
      this.updateUIForLoggedInUser();
    }
  }

  updateUIForLoggedInUser() {
    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons) {
      authButtons.innerHTML = `
        <div class="user-menu">
          <img src="${this.currentUser.avatar}" alt="用户头像" class="user-avatar">
          <div class="dropdown-menu">
            <a href="#" class="dropdown-item">个人中心</a>
            <a href="#" class="dropdown-item">我的收藏</a>
            <a href="#" class="dropdown-item" id="logoutBtn">退出登录</a>
          </div>
        </div>
      `;

      // 添加退出登录事件
      const logoutBtn = document.getElementById('logoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.logout();
        });
      }
    }
  }

  updateUIForLoggedOutUser() {
    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons) {
      authButtons.innerHTML = `
        <button class="login-btn" data-i18n="login">登录</button>
        <button class="signup-btn" data-i18n="signup">注册</button>
      `;
    }
  }

  showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  hideLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  showSignupModal() {
    const modal = document.getElementById('signupModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  hideSignupModal() {
    const modal = document.getElementById('signupModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  // 模拟API调用
  mockLoginAPI(email, password) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          resolve({
            success: true,
            token: 'mock-token',
            user: {
              id: 1,
              name: 'Test User',
              email: email,
              avatar: 'assets/images/default-avatar.png'
            }
          });
        } else {
          resolve({
            success: false,
            message: '邮箱或密码错误'
          });
        }
      }, 1000);
    });
  }

  mockSignupAPI(name, email, password) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          token: 'mock-token',
          user: {
            id: 1,
            name: name,
            email: email,
            avatar: 'assets/images/default-avatar.png'
          }
        });
      }, 1000);
    });
  }
} 
