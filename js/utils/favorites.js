class FavoritesManager {
  constructor() {
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    this.loadingManager = new LoadingManager();
  }

  init() {
    this.setupEventListeners();
    this.updateFavoritesUI();
  }

  setupEventListeners() {
    // 监听收藏按钮点击
    document.addEventListener('click', (e) => {
      if (e.target.closest('.favorite-btn')) {
        const toolId = e.target.closest('.tool-card').dataset.id;
        this.toggleFavorite(toolId);
      }
    });
  }

  toggleFavorite(toolId) {
    const index = this.favorites.indexOf(toolId);
    if (index === -1) {
      this.addFavorite(toolId);
    } else {
      this.removeFavorite(toolId);
    }
  }

  addFavorite(toolId) {
    if (!this.favorites.includes(toolId)) {
      this.favorites.push(toolId);
      this.saveFavorites();
      this.updateFavoritesUI();
      this.loadingManager.showSuccess('已添加到收藏夹');
    }
  }

  removeFavorite(toolId) {
    const index = this.favorites.indexOf(toolId);
    if (index !== -1) {
      this.favorites.splice(index, 1);
      this.saveFavorites();
      this.updateFavoritesUI();
      this.loadingManager.showSuccess('已从收藏夹移除');
    }
  }

  isFavorite(toolId) {
    return this.favorites.includes(toolId);
  }

  saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  updateFavoritesUI() {
    // 更新所有工具卡片的收藏状态
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

  getFavorites() {
    return this.favorites;
  }

  getFavoriteTools() {
    return this.favorites.map(id => {
      const card = document.querySelector(`.tool-card[data-id="${id}"]`);
      if (card) {
        return {
          id: id,
          title: card.querySelector('h3').textContent,
          description: card.querySelector('p').textContent,
          image: card.querySelector('img').src,
          category: card.dataset.category,
          price: card.dataset.price,
          rating: card.dataset.rating
        };
      }
      return null;
    }).filter(tool => tool !== null);
  }

  clearFavorites() {
    this.favorites = [];
    this.saveFavorites();
    this.updateFavoritesUI();
    this.loadingManager.showSuccess('收藏夹已清空');
  }
} 
