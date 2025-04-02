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
                <span class="category">${this.tool.category}</span>
                <span class="price">${this.tool.price}</span>
                <a href="${this.tool.url}" target="_blank" class="visit-button">Visit Website</a>
            </div>
        `;

        return card;
    }
}

export default ToolCard; 
