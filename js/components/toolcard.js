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

// Add tool card styles
const style = document.createElement('style');
style.textContent = `
    .tool-card {
        background: var(--white);
        border-radius: 1rem;
        padding: 1.5rem;
        box-shadow: var(--shadow);
        transition: transform 0.2s;
    }

    .tool-card:hover {
        transform: translateY(-5px);
    }

    .tool-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .tool-header h3 {
        color: var(--primary-color);
        font-size: 1.2rem;
    }

    .rating {
        color: #f59e0b;
        font-weight: bold;
    }

    .description {
        color: var(--text-color);
        margin-bottom: 1rem;
        opacity: 0.8;
    }

    .features {
        margin-bottom: 1rem;
    }

    .features h4 {
        margin-bottom: 0.5rem;
        color: var(--text-color);
    }

    .features ul {
        list-style: none;
        padding-left: 1rem;
    }

    .features li {
        margin-bottom: 0.3rem;
        position: relative;
    }

    .features li::before {
        content: "•";
        color: var(--primary-color);
        position: absolute;
        left: -1rem;
    }

    .tool-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid var(--light-gray);
    }

    .category, .price {
        font-size: 0.9rem;
        color: var(--text-color);
        opacity: 0.8;
    }

    .visit-button {
        background-color: var(--primary-color);
        color: var(--white);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        text-decoration: none;
        font-size: 0.9rem;
        transition: background-color 0.2s;
    }

    .visit-button:hover {
        background-color: var(--secondary-color);
    }
`;
document.head.appendChild(style);

export default ToolCard; 
