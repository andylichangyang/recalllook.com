import toolsData from '../data/tools.js';
import { ToolCard } from '../components/ToolCard.js';

class ToolManager {
    constructor() {
        this.tools = this.initializeTools();
        this.currentCategory = 'all';
        this.currentPrice = 'all';
        this.currentRating = 'all';
        this.searchQuery = '';
    }

    initializeTools() {
        const allTools = [];
        for (const category in toolsData) {
            toolsData[category].forEach(tool => {
                allTools.push({
                    ...tool,
                    id: this.generateToolId(tool.name)
                });
            });
        }
        return allTools;
    }

    generateToolId(name) {
        return name.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }

    getAllTools() {
        return this.tools;
    }

    getToolsByCategory(category) {
        return this.tools.filter(tool => tool.category === category);
    }

    getToolById(id) {
        return this.tools.find(tool => tool.id === id);
    }

    searchTools(query) {
        const searchQuery = query.toLowerCase();
        return this.tools.filter(tool => 
            tool.name.toLowerCase().includes(searchQuery) ||
            tool.description.toLowerCase().includes(searchQuery) ||
            tool.features.toLowerCase().includes(searchQuery)
        );
    }

    filterTools(filters) {
        return this.tools.filter(tool => {
            if (filters.category && tool.category !== filters.category) return false;
            if (filters.price && tool.price !== filters.price) return false;
            if (filters.rating && tool.rating < filters.rating) return false;
            return true;
        });
    }

    getFeaturedTools(limit = 6) {
        return this.tools
            .sort((a, b) => b.rating - a.rating)
            .slice(0, limit);
    }

    getLatestTools(limit = 6) {
        return this.tools
            .sort((a, b) => b.id.localeCompare(a.id))
            .slice(0, limit);
    }

    renderTools(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const filteredTools = this.filterTools({
            category: this.currentCategory,
            price: this.currentPrice,
            rating: this.currentRating
        });
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

export default ToolManager; 
