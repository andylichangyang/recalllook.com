import { ToolManager } from './utils/ToolManager.js';
import { ToolCard } from './components/ToolCard.js';

// Initialize tools when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing tools...');
    const toolManager = new ToolManager();

    // Initialize featured tools
    const featuredToolsContainer = document.getElementById('featuredTools');
    if (featuredToolsContainer) {
        console.log('Loading featured tools...');
        const featuredTools = toolManager.getFeaturedTools(6);
        console.log('Featured tools:', featuredTools);
        const featuredHtml = featuredTools
            .map(tool => new ToolCard(tool).render())
            .join('');
        console.log('Featured HTML:', featuredHtml);
        featuredToolsContainer.innerHTML = featuredHtml;
    } else {
        console.log('Featured tools container not found');
    }

    // Initialize latest tools
    const latestToolsContainer = document.getElementById('latestTools');
    if (latestToolsContainer) {
        console.log('Loading latest tools...');
        const latestTools = toolManager.getLatestTools(6);
        console.log('Latest tools:', latestTools);
        const latestHtml = latestTools
            .map(tool => new ToolCard(tool).render())
            .join('');
        console.log('Latest HTML:', latestHtml);
        latestToolsContainer.innerHTML = latestHtml;
    } else {
        console.log('Latest tools container not found');
    }

    // Initialize category tools
    const categories = ['speech-synthesis', 'speech-recognition', 'audio-editing', 'music-generation', 'voice-cloning'];
    categories.forEach(category => {
        const container = document.querySelector(`#${category} .tools-grid`);
        if (container) {
            console.log(`Loading tools for category: ${category}`);
            const tools = toolManager.getToolsByCategory(category);
            console.log(`${category} tools:`, tools);
            container.innerHTML = tools
                .map(tool => new ToolCard(tool).render())
                .join('');
        }
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            console.log('Search query:', query);
            const filteredTools = toolManager.searchTools(query);
            console.log('Filtered tools:', filteredTools);
            updateToolsDisplay(filteredTools);
        });
    }

    // Filter functionality
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const ratingFilter = document.getElementById('ratingFilter');

    [categoryFilter, priceFilter, ratingFilter].forEach(filter => {
        if (filter) {
            filter.addEventListener('change', () => {
                const filters = {
                    category: categoryFilter?.value || 'all',
                    price: priceFilter?.value || 'all',
                    rating: ratingFilter?.value || 'all'
                };
                console.log('Applied filters:', filters);
                const filteredTools = toolManager.filterTools(filters);
                console.log('Filtered tools:', filteredTools);
                updateToolsDisplay(filteredTools);
            });
        }
    });

    // Update tools display
    function updateToolsDisplay(tools) {
        const toolsContainer = document.querySelector('.tools-grid');
        if (toolsContainer) {
            toolsContainer.innerHTML = tools
                .map(tool => new ToolCard(tool).render())
                .join('');
        }
    }

    // Language switching
    const languageSelect = document.querySelector('.language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            const language = e.target.value;
            localStorage.setItem('language', language);
            window.location.reload();
        });
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };

            try {
                // Here you can add logic to send form data to backend
                console.log('Form data:', data);
                
                // Show success message
                alert('Message sent! We will get back to you soon.');
                contactForm.reset();
            } catch (error) {
                console.error('Failed to send message:', error);
                alert('Failed to send message. Please try again later.');
            }
        });
    }
}); 
