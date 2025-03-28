export class ToolCard {
    constructor(tool) {
        this.tool = tool;
    }

    render() {
        const { name, description, category, price, rating, image, url } = this.tool;
        
        return `
            <div class="tool-card">
                <div class="tool-thumbnail">
                    <img src="${image}" alt="${name}">
                    <div class="tool-overlay">
                        <a href="${url}" target="_blank" class="visit-icon">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
                <div class="tool-info">
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <div class="tool-meta">
                        <span class="tool-category">${category}</span>
                        <div class="tool-rating">
                            ${this.generateStars(rating)}
                        </div>
                    </div>
                    <div class="tool-price">
                        <span class="price-badge ${price}">${price === 'free' ? 'Free' : 'Paid'}</span>
                    </div>
                </div>
            </div>
        `;
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star star"></i>';
        }

        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt star"></i>';
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star star"></i>';
        }

        return stars;
    }
}
