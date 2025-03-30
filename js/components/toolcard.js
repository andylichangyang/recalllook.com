export class ToolCard {
    constructor(tool) {
        this.tool = tool;
    }

    // 获取工具缩略图
    getThumbnail() {
        const defaultImage = `assets/images/tools/${this.tool.category}.svg`;
        return this.tool.image || defaultImage;
    }

    // 生成星级评分
    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }

    // 格式化价格
    formatPrice(price) {
        if (price === 'free') {
            return 'Free';
        } else if (price === 'subscription') {
            return 'Subscription';
        } else if (price === 'pay-per-use') {
            return 'Pay per use';
        } else if (price === 'paid') {
            return 'Paid';
        }
        return price;
    }

    // 渲染工具卡片
    render() {
        return `
            <div class="tool-card">
                <div class="tool-thumbnail">
                    <img src="${this.getThumbnail()}" alt="${this.tool.name}" class="tool-image">
                    <div class="tool-overlay">
                        <a href="${this.tool.url}" target="_blank" class="visit-btn">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
                <div class="tool-content">
                    <h3 class="tool-title">${this.tool.name}</h3>
                    <p class="tool-description">${this.tool.description}</p>
                    <div class="tool-meta">
                        <span class="tool-price">${this.formatPrice(this.tool.price)}</span>
                        <div class="tool-rating">
                            <div class="stars">
                                ${this.generateStars(this.tool.rating)}
                            </div>
                            <span class="rating-value">${this.tool.rating.toFixed(1)}</span>
                        </div>
                    </div>
                    <div class="tool-features">
                        ${this.tool.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }
} 
