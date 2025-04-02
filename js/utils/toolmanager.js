import { tools } from './tools.js';

export class ToolManager {
    constructor() {
        this.tools = this.getAllTools();
    }

    getAllTools() {
        return [
            ...tools.speechSynthesis,
            ...tools.speechRecognition,
            ...tools.audioEditing,
            ...tools.musicGeneration,
            ...tools.voiceCloning
        ];
    }

    getToolsByCategory(category) {
        return this.tools.filter(tool => tool.category === category);
    }

    searchTools(query) {
        const lowercaseQuery = query.toLowerCase();
        return this.tools.filter(tool => 
            tool.name.toLowerCase().includes(lowercaseQuery) ||
            tool.description.toLowerCase().includes(lowercaseQuery) ||
            tool.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
        );
    }

    filterTools(category, price, rating) {
        let filteredTools = this.tools;

        if (category) {
            filteredTools = filteredTools.filter(tool => tool.category === category);
        }

        if (price) {
            filteredTools = filteredTools.filter(tool => tool.price === price);
        }

        if (rating) {
            filteredTools = filteredTools.filter(tool => tool.rating >= rating);
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
            .filter(tool => tool.dateAdded)
            .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
            .slice(0, limit);
    }
} 
