class FavoritesManager {
  constructor() {
    this.favorites = this.loadFavorites();
    this.init();
  }

  init() {
    // 监听收藏按钮点击事件
    document.addEventListener('click', (e) => {
      if (e.target.matches('.favorite-btn')) {
        const toolId = e.target.closest('.tool-card').dataset.id;
        this.toggleFavorite(toolId);
      }
    });
  }

  loadFavorites() {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  toggleFavorite(toolId) {
    const index = this.favorites.indexOf(toolId);
    if (index === -1) {
      this.favorites.push(toolId);
      this.showSuccess('已添加到收藏夹');
    } else {
      this.favorites.splice(index, 1);
      this.showSuccess('已从收藏夹移除');
    }
    this.saveFavorites();
    this.updateUI();
  }

  isFavorite(toolId) {
    return this.favorites.includes(toolId);
  }

  updateUI() {
    document.querySelectorAll('.tool-card').forEach(card => {
      const toolId = card.dataset.id;
      const favoriteBtn = card.querySelector('.favorite-btn');
      if (favoriteBtn) {
        if (this.isFavorite(toolId)) {
          favoriteBtn.classList.add('active');
          favoriteBtn.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
          favoriteBtn.classList.remove('active');
          favoriteBtn.innerHTML = '<i class="far fa-heart"></i>';
        }
      }
    });
  }

  getFavoriteTools() {
    return this.favorites;
  }

  showSuccess(message) {
    // 这里添加成功提示UI
    console.log('Success:', message);
  }
}
