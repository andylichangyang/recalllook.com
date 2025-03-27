class AuthManager {
  constructor() {
    this.currentUser = null;
    this.isAuthenticated = false;
  }

  init() {
    this.checkAuthStatus();
    this.setupEventListeners();
  }

  checkAuthStatus() {
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUser = JSON.parse(user);
      this.isAuthenticated = true;
      this.updateUI();
    }
  }

  setupEventListeners() {
    // 登录表单提交
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleLogin(loginForm);
      });
    }

    // 注册表单提交
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSignup(signupForm);
      });
    }

    // 社交登录
    document.querySelectorAll('.social-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const provider = e.currentTarget.classList.contains('google') ? 'google' : 'github';
        this.handleSocialLogin(provider);
      });
    });
  }

  async handleLogin(form) {
    const email = form.email.value;
    const password = form.password.value;
    const remember = form.remember.checked;

    try {
      // 这里添加实际的API调用
      const user = await this.mockLoginAPI(email, password);
      
      if (user) {
        this.currentUser = user;
        this.isAuthenticated = true;
        
        if (remember) {
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          sessionStorage.setItem('user', JSON.stringify(user));
        }

        this.updateUI();
        this.showSuccess('登录成功!');
      } else {
        this.showError('邮箱或密码错误');
      }
    } catch (error) {
      this.showError('登录失败,请稍后重试');
    }
  }

  async handleSignup(form) {
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      this.showError('密码不匹配');
      return;
    }

    try {
      // 这里添加实际的API调用
      const user = await this.mockSignupAPI(name, email, password);
      
      if (user) {
        this.currentUser = user;
        this.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(user));
        
        this.updateUI();
        this.showSuccess('注册成功!');
      } else {
        this.showError('注册失败,请稍后重试');
      }
    } catch (error) {
      this.showError('注册失败,请稍后重试');
    }
  }

  async handleSocialLogin(provider) {
    try {
      // 这里添加实际的社交登录API调用
      const user = await this.mockSocialLoginAPI(provider);
      
      if (user) {
        this.currentUser = user;
        this.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(user));
        
        this.updateUI();
        this.showSuccess('登录成功!');
      } else {
        this.showError('社交登录失败,请稍后重试');
      }
    } catch (error) {
      this.showError('社交登录失败,请稍后重试');
    }
  }

  logout() {
    this.currentUser = null;
    this.isAuthenticated = false;
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    this.updateUI();
    this.showSuccess('已退出登录');
  }

  updateUI() {
    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons) {
      if (this.isAuthenticated) {
        authButtons.innerHTML = `
          <div class="user-menu">
            <img src="${this.currentUser.avatar || 'assets/images/default-avatar.png'}" alt="Avatar" class="avatar">
            <div class="dropdown">
              <a href="#" class="username">${this.currentUser.name}</a>
              <div class="dropdown-content">
                <a href="#" class="profile">个人资料</a>
                <a href="#" class="favorites">我的收藏</a>
                <a href="#" class="logout">退出登录</a>
              </div>
            </div>
          </div>
        `;

        // 添加退出登录事件监听
        const logoutBtn = authButtons.querySelector('.logout');
        if (logoutBtn) {
          logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.logout();
          });
        }
      } else {
        authButtons.innerHTML = `
          <button class="login-btn" data-i18n="login">登录</button>
          <button class="signup-btn" data-i18n="signup">注册</button>
        `;
      }
    }
  }

  showSuccess(message) {
    // 这里添加成功提示UI
    console.log('Success:', message);
  }

  showError(message) {
    // 这里添加错误提示UI
    console.error('Error:', message);
  }

  // 模拟API调用
  mockLoginAPI(email, password) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          resolve({
            id: 1,
            name: 'Test User',
            email: email,
            avatar: 'assets/images/default-avatar.png'
          });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  mockSignupAPI(name, email, password) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: name,
          email: email,
          avatar: 'assets/images/default-avatar.png'
        });
      }, 1000);
    });
  }

  mockSocialLoginAPI(provider) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: `${provider} User`,
          email: `${provider}@example.com`,
          avatar: 'assets/images/default-avatar.png'
        });
      }, 1000);
    });
  }
}
