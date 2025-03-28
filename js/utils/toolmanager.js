import toolsData from '../data/tools.js';
import { ToolCard } from '../components/ToolCard.js';

export class ToolManager {
    constructor() {
        this.tools = toolsData;
        this.currentCategory = 'all';
        this.currentPrice = 'all';
        this.currentRating = 'all';
        this.searchQuery = '';
    }

    filterTools() {
        let filteredTools = [];

        // 合并所有类别的工具
        Object.values(this.tools).forEach(categoryTools => {
            filteredTools = filteredTools.concat(categoryTools);
        });

        // 按类别筛选
        if (this.currentCategory !== 'all') {
            filteredTools = filteredTools.filter(tool => 
                tool.category === this.currentCategory
            );
        }

        // 按价格筛选
        if (this.currentPrice !== 'all') {
            filteredTools = filteredTools.filter(tool => 
                tool.price === this.currentPrice
            );
        }

        // 按评分筛选
        if (this.currentRating !== 'all') {
            const minRating = parseFloat(this.currentRating);
            filteredTools = filteredTools.filter(tool => 
                tool.rating >= minRating
            );
        }

        // 按搜索词筛选
        if (this.searchQuery) {
            const query = this.searchQuery.toLowerCase();
            filteredTools = filteredTools.filter(tool => 
                tool.name.toLowerCase().includes(query) ||
                tool.description.toLowerCase().includes(query)
            );
        }

        return filteredTools;
    }

    renderTools(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const filteredTools = this.filterTools();
        const toolCard = new ToolCard();

        container.innerHTML = filteredTools.map(tool => 
            toolCard.render(tool)
        ).join('');
    }

    setCategory(category) {
        this.currentCategory = category;
    }

    setPrice(price) {
        this.currentPrice = price;
    }

    setRating(rating) {
        this.currentRating = rating;
    }

    setSearchQuery(query) {
        this.searchQuery = query;
    }

    getToolsByCategory(category) {
        return this.tools[category] || [];
    }

    getFeaturedTools() {
        // 获取评分最高的工具
        const allTools = Object.values(this.tools).flat();
        return allTools
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 8);
    }

    getLatestTools() {
        // 获取最新添加的工具
        const allTools = Object.values(this.tools).flat();
        return allTools
            .sort((a, b) => b.id.localeCompare(a.id))
            .slice(0, 8);
    }
}
