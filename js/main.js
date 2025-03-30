import { ToolManager } from './utils/ToolManager.js';
import { ToolCard } from './components/ToolCard.js';

// Initialize tools when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const toolManager = new ToolManager();

    // Initialize featured tools
    const featuredToolsContainer = document.getElementById('featuredTools');
    if (featuredToolsContainer) {
        const featuredTools = toolManager.getFeaturedTools(6);
        featuredToolsContainer.innerHTML = featuredTools
            .map(tool => new ToolCard(tool).render())
            .join('');
    }

    // Initialize latest tools
    const latestToolsContainer = document.getElementById('latestTools');
    if (latestToolsContainer) {
        const latestTools = toolManager.getLatestTools(6);
        latestToolsContainer.innerHTML = latestTools
            .map(tool => new ToolCard(tool).render())
            .join('');
    }

    // Initialize category tools
    const categories = ['speech-synthesis', 'speech-recognition', 'audio-editing', 'music-generation', 'voice-cloning'];
    categories.forEach(category => {
        const container = document.querySelector(`#${category} .tools-grid`);
        if (container) {
            const tools = toolManager.getToolsByCategory(category);
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
            const filteredTools = toolManager.searchTools(query);
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
                    category: categoryFilter.value,
                    price: priceFilter.value,
                    rating: ratingFilter.value
                };
                const filteredTools = toolManager.filterTools(filters);
                updateToolsDisplay(filteredTools);
            });
        }
    });

    // Update tools display
    function updateToolsDisplay(tools) {
        const containers = document.querySelectorAll('.tools-grid');
        containers.forEach(container => {
            if (container.id !== 'featuredTools' && container.id !== 'latestTools') {
                const category = container.closest('.category-section')?.id;
                if (category) {
                    container.innerHTML = tools
                        .filter(tool => tool.category === category)
                        .map(tool => new ToolCard(tool).render())
                        .join('');
                }
            }
        });
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
