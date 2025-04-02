import tools from './tools.js';

class ToolManager {
    constructor() {
        this.tools = tools;
    }

    // Get all tools from a specific category
    getToolsByCategory(category) {
        const categoryKey = this.getCategoryKey(category);
        return this.tools[categoryKey] || [];
    }

    // Get featured tools (highest rated from each category)
    getFeaturedTools() {
        const featured = [];
        for (const category in this.tools) {
            const categoryTools = this.tools[category];
            if (categoryTools.length > 0) {
                const highestRated = categoryTools.reduce((prev, current) => 
                    (prev.rating > current.rating) ? prev : current
                );
                featured.push(highestRated);
            }
        }
        return featured;
    }

    // Get all categories
    getAllCategories() {
        return Object.keys(this.tools).map(key => this.getCategoryName(key));
    }

    // Search tools across all categories
    searchTools(query) {
        const results = [];
        const lowercaseQuery = query.toLowerCase();

        for (const category in this.tools) {
            const categoryTools = this.tools[category];
            categoryTools.forEach(tool => {
                if (
                    tool.name.toLowerCase().includes(lowercaseQuery) ||
                    tool.description.toLowerCase().includes(lowercaseQuery) ||
                    tool.category.toLowerCase().includes(lowercaseQuery)
                ) {
                    results.push(tool);
                }
            });
        }

        return results;
    }

    // Helper method to convert category name to key
    getCategoryKey(category) {
        const keyMap = {
            'Text to Speech': 'textToSpeech',
            'Speech to Text': 'speechToText',
            'Audio Editing': 'audioEditing',
            'Music Generation': 'musicGeneration',
            'Voice Cloning': 'voiceCloning'
        };
        return keyMap[category] || category;
    }

    // Helper method to convert category key to name
    getCategoryName(key) {
        const nameMap = {
            'textToSpeech': 'Text to Speech',
            'speechToText': 'Speech to Text',
            'audioEditing': 'Audio Editing',
            'musicGeneration': 'Music Generation',
            'voiceCloning': 'Voice Cloning'
        };
        return nameMap[key] || key;
    }
}

export default new ToolManager(); 
