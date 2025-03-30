import { tools } from '../data/tools.js';

export class ToolManager {
    constructor() {
        this.tools = tools;
        this.currentCategory = 'all';
        this.currentPrice = 'all';
        this.currentRating = 'all';
        this.searchQuery = '';
    }

    getAllTools() {
        return this.tools;
    }

    getToolsByCategory(category) {
        if (category === 'all') {
            return this.tools;
        }
        return this.tools.filter(tool => tool.category === category);
    }

    getToolById(id) {
        return this.tools.find(tool => tool.id === id);
    }

    searchTools(query) {
        if (!query) return this.tools;
        
        const searchQuery = query.toLowerCase();
        return this.tools.filter(tool => 
            tool.name.toLowerCase().includes(searchQuery) ||
            tool.description.toLowerCase().includes(searchQuery) ||
            tool.features.some(feature => feature.toLowerCase().includes(searchQuery))
        );
    }

    filterTools(filters = {}) {
        let filteredTools = this.tools;

        if (filters.category && filters.category !== 'all') {
            filteredTools = filteredTools.filter(tool => tool.category === filters.category);
        }

        if (filters.price && filters.price !== 'all') {
            filteredTools = filteredTools.filter(tool => tool.price === filters.price);
        }

        if (filters.rating && filters.rating !== 'all') {
            const minRating = parseFloat(filters.rating);
            filteredTools = filteredTools.filter(tool => tool.rating >= minRating);
        }

        if (this.searchQuery) {
            filteredTools = this.searchTools(this.searchQuery);
        }

        return filteredTools;
    }

    getFeaturedTools(limit = 6) {
        return this.tools
            .sort((a, b) => b.rating - a.rating)
            .slice(0, limit);
    }

    getLatestTools(limit = 6) {
        return this.tools
            .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
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
