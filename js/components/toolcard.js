export class ToolCard {
    constructor(tool) {
        this.tool = tool;
    }

    // Generate star rating HTML
    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return `
            ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
            ${hasHalfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
            ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
            <span class="rating-value">${rating.toFixed(1)}</span>
        `;
    }

    // Format price display
    formatPrice(price) {
        switch (price) {
            case 'free':
                return 'Free';
            case 'subscription':
                return 'Subscription';
            case 'pay-per-use':
                return 'Pay per use';
            default:
                return price;
        }
    }

    // Render tool card
    render() {
        const {
            name,
            url,
            description,
            features,
            rating,
            price,
            thumbnail,
            category
        } = this.tool;

        return `
            <div class="tool-card">
                <div class="tool-thumbnail">
                    <img src="${thumbnail || `images/placeholders/${category}.jpg`}" alt="${name}">
                    <div class="tool-overlay">
                        <a href="${url}" target="_blank" class="visit-icon">Visit</a>
                    </div>
                </div>
                <div class="tool-info">
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <div class="tool-features">
                        ${features.map(feature => `
                            <span class="feature-tag">${feature}</span>
                        `).join('')}
                    </div>
                    <div class="tool-meta">
                        <span class="tool-price">${this.formatPrice(price)}</span>
                        <div class="tool-rating">
                            ${this.generateStars(rating)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
} 
} 
