class ToolManager {
    constructor(tools) {
        this.tools = tools;
        console.log('ToolManager initialized with tools:', tools);
    }

    // Get all tools from a specific category
    getToolsByCategory(category) {
        const categoryKey = this.getCategoryKey(category);
        console.log('Getting tools for category:', category, 'Key:', categoryKey);
        const tools = this.tools[categoryKey] || [];
        console.log('Found tools:', tools);
        return tools;
    }

    // Get featured tools (highest rated from each category)
    getFeaturedTools() {
        console.log('Getting featured tools...');
        const featured = [];
        for (const category in this.tools) {
            const categoryTools = this.tools[category];
            if (categoryTools && categoryTools.length > 0) {
                const highestRated = categoryTools.reduce((prev, current) => 
                    (prev.rating > current.rating) ? prev : current
                );
                featured.push(highestRated);
            }
        }
        console.log('Featured tools:', featured);
        return featured;
    }

    // Get all categories
    getAllCategories() {
        const categories = Object.keys(this.tools).map(key => this.getCategoryName(key));
        console.log('All categories:', categories);
        return categories;
    }

    // Search tools across all categories
    searchTools(query) {
        console.log('Searching for:', query);
        const results = [];
        const lowercaseQuery = query.toLowerCase();

        for (const category in this.tools) {
            const categoryTools = this.tools[category];
            if (categoryTools) {
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
        }

        console.log('Search results:', results);
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
        const key = keyMap[category] || category;
        console.log('Category key mapping:', category, '->', key);
        return key;
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
        const name = nameMap[key] || key;
        console.log('Category name mapping:', key, '->', name);
        return name;
    }
} 
