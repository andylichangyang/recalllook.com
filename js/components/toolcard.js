export class ToolCard {
    constructor(tool) {
        this.tool = tool;
    }

    getThumbnail() {
        const categoryImages = {
            speechSynthesis: 'images/speech-synthesis.jpg',
            speechRecognition: 'images/speech-recognition.jpg',
            audioEditing: 'images/audio-editing.jpg',
            musicGeneration: 'images/music-generation.jpg',
            voiceCloning: 'images/voice-cloning.jpg'
        };
        return categoryImages[this.tool.category] || 'images/default.jpg';
    }

    getStarRating() {
        const fullStars = Math.floor(this.tool.rating);
        const hasHalfStar = this.tool.rating % 1 !== 0;
        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }

        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }

        const emptyStars = 5 - Math.ceil(this.tool.rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }

        return stars;
    }

    formatPrice() {
        const priceMap = {
            free: '免费',
            subscription: '订阅制',
            'pay-per-use': '按量计费',
            paid: '付费'
        };
        return priceMap[this.tool.price] || this.tool.price;
    }

    render() {
        return `
            <div class="card tool-card">
                <div class="tool-thumbnail">
                    <img src="${this.getThumbnail()}" alt="${this.tool.name}">
                </div>
                <div class="tool-content">
                    <h3>${this.tool.name}</h3>
                    <div class="tool-rating">
                        ${this.getStarRating()}
                        <span class="rating-value">${this.tool.rating}</span>
                    </div>
                    <p class="tool-description">${this.tool.description}</p>
                    <div class="tool-features">
                        ${this.tool.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                    </div>
                    <div class="tool-footer">
                        <span class="tool-price">${this.formatPrice()}</span>
                        <a href="${this.tool.url}" target="_blank" class="btn btn-primary">访问网站</a>
                    </div>
                </div>
            </div>
        `;
    }
} 
