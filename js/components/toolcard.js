class ToolCard {
    constructor(tool) {
        this.tool = tool;
    }

    render() {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.innerHTML = `
            <div class="tool-header">
                <h3>${this.tool.name}</h3>
                <span class="rating">${this.tool.rating} ⭐</span>
            </div>
            <p class="description">${this.tool.description}</p>
            <div class="features">
                <h4>Key Features:</h4>
                <ul>
                    ${this.tool.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="tool-footer">
                <div class="tool-meta">
                    <span class="category">${this.tool.category}</span>
                    <span class="price">${this.tool.price}</span>
                </div>
                <a href="${this.tool.url}" target="_blank" class="visit-button">
                    <i class="fas fa-external-link-alt"></i>
                    Visit Website
                </a>
            </div>
        `;

        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
        });

        return card;
    }
}

export default ToolCard; 
