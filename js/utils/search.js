class SearchManager {
  constructor() {
    this.tools = [];
    this.filteredTools = [];
    this.filters = {
      search: '',
      category: 'all',
      price: 'all',
      rating: 'all'
    };
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadTools();
  }

  setupEventListeners() {
    // 搜索输入
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.filters.search = e.target.value.toLowerCase();
        this.applyFilters();
      });
    }

    // 分类过滤
    const categorySelect = document.querySelector('.category-select');
    if (categorySelect) {
      categorySelect.addEventListener('change', (e) => {
        this.filters.category = e.target.value;
        this.applyFilters();
      });
    }

    // 价格过滤
    const priceSelect = document.querySelector('.price-select');
    if (priceSelect) {
      priceSelect.addEventListener('change', (e) => {
        this.filters.price = e.target.value;
        this.applyFilters();
      });
    }

    // 评分过滤
    const ratingSelect = document.querySelector('.rating-select');
    if (ratingSelect) {
      ratingSelect.addEventListener('change', (e) => {
        this.filters.rating = e.target.value;
        this.applyFilters();
      });
    }
  }

  async loadTools() {
    try {
      // 这里添加实际的API调用
      this.tools = await this.mockToolsAPI();
      this.filteredTools = [...this.tools];
      this.applyFilters();
    } catch (error) {
      this.showError('加载工具列表失败');
    }
  }

  applyFilters() {
    this.filteredTools = this.tools.filter(tool => {
      // 搜索过滤
      const matchesSearch = this.filters.search === '' ||
        tool.title.toLowerCase().includes(this.filters.search) ||
        tool.description.toLowerCase().includes(this.filters.search);

      // 分类过滤
      const matchesCategory = this.filters.category === 'all' ||
        tool.category === this.filters.category;

      // 价格过滤
      const matchesPrice = this.filters.price === 'all' ||
        this.filterByPrice(tool.price, this.filters.price);

      // 评分过滤
      const matchesRating = this.filters.rating === 'all' ||
        tool.rating >= parseInt(this.filters.rating);

      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });

    this.updateUI();
  }

  filterByPrice(price, filter) {
    switch (filter) {
      case 'free':
        return price === '免费';
      case 'paid':
        return price !== '免费';
      case 'low':
        return price.includes('$') && parseFloat(price.replace('$', '')) < 10;
      case 'medium':
        return price.includes('$') && 
          parseFloat(price.replace('$', '')) >= 10 && 
          parseFloat(price.replace('$', '')) < 50;
      case 'high':
        return price.includes('$') && parseFloat(price.replace('$', '')) >= 50;
      default:
        return true;
    }
  }

  updateUI() {
    const toolsGrid = document.querySelector('.tools-grid');
    if (!toolsGrid) return;

    // 清空现有内容
    toolsGrid.innerHTML = '';

    // 显示过滤后的工具
    this.filteredTools.forEach(tool => {
      const card = this.createToolCard(tool);
      toolsGrid.appendChild(card);
    });

    // 显示无结果提示
    if (this.filteredTools.length === 0) {
      const noResults = document.createElement('div');
      noResults.className = 'no-results';
      noResults.textContent = '没有找到匹配的工具';
      toolsGrid.appendChild(noResults);
    }
  }

  createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.dataset.id = tool.id;
    card.dataset.category = tool.category;
    card.dataset.price = tool.price;
    card.dataset.rating = tool.rating;

    card.innerHTML = `
      <img src="${tool.image}" alt="${tool.title}" class="tool-image">
      <div class="tool-content">
        <h3>${tool.title}</h3>
        <p>${tool.description}</p>
        <div class="tool-meta">
          <span class="category">${tool.category}</span>
          <span class="price">${tool.price}</span>
          <div class="rating">
            ${this.createStarRating(tool.rating)}
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

  showError(message) {
    // 这里添加错误提示UI
    console.error('Error:', message);
  }

  // 模拟API调用
  mockToolsAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: '语音合成工具',
            description: '将文本转换为自然语音',
            image: 'assets/images/tools/speech-synthesis.jpg',
            category: '语音合成',
            price: '免费',
            rating: 4.5
          },
          {
            id: 2,
            title: '语音识别工具',
            description: '将语音转换为文本',
            image: 'assets/images/tools/speech-recognition.jpg',
            category: '语音识别',
            price: '$29.99',
            rating: 4.8
          },
          // 添加更多模拟数据...
        ]);
      }, 1000);
    });
  }
}
