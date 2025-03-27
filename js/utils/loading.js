class LoadingManager {
  constructor() {
    this.loadingElement = null;
    this.createLoadingElement();
  }

  createLoadingElement() {
    this.loadingElement = document.createElement('div');
    this.loadingElement.className = 'loading-overlay';
    this.loadingElement.innerHTML = `
      <div class="loading-spinner">
        <div class="spinner"></div>
        <div class="loading-text">加载中...</div>
      </div>
    `;
    document.body.appendChild(this.loadingElement);
  }

  showLoading(message = '加载中...') {
    if (this.loadingElement) {
      const loadingText = this.loadingElement.querySelector('.loading-text');
      if (loadingText) {
        loadingText.textContent = message;
      }
      this.loadingElement.style.display = 'flex';
    }
  }

  hideLoading() {
    if (this.loadingElement) {
      this.loadingElement.style.display = 'none';
    }
  }

  showSuccess(message = '操作成功!') {
    this.showToast(message, 'success');
  }

  showError(message = '操作失败,请重试') {
    this.showToast(message, 'error');
  }

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    // 添加动画效果
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);

    // 3秒后移除
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }
}
