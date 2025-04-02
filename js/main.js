import toolManager from './utils/ToolManager.js';
import ToolCard from './components/ToolCard.js';

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeButtons = document.querySelectorAll('.close');
    const showSignupLink = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const featuredToolsContainer = document.getElementById('featuredTools');
    const allToolsContainer = document.getElementById('allTools');
    const categoryTabs = document.querySelectorAll('.category-tab');

    // Debug log
    console.log('DOM loaded, elements:', {
        loginBtn,
        signupBtn,
        loginModal,
        signupModal,
        closeButtons,
        showSignupLink,
        showLoginLink,
        loginForm,
        signupForm,
        featuredToolsContainer,
        allToolsContainer,
        categoryTabs
    });

    // Show login modal
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', () => {
            console.log('Login button clicked');
            loginModal.style.display = 'block';
        });
    }

    // Show signup modal
    if (signupBtn && signupModal) {
        signupBtn.addEventListener('click', () => {
            console.log('Signup button clicked');
            signupModal.style.display = 'block';
        });
    }

    // Close modals
    if (closeButtons) {
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log('Close button clicked');
                if (loginModal) loginModal.style.display = 'none';
                if (signupModal) signupModal.style.display = 'none';
            });
        });
    }

    // Switch between modals
    if (showSignupLink && loginModal && signupModal) {
        showSignupLink.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Show signup link clicked');
            loginModal.style.display = 'none';
            signupModal.style.display = 'block';
        });
    }

    if (showLoginLink && loginModal && signupModal) {
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Show login link clicked');
            signupModal.style.display = 'none';
            loginModal.style.display = 'block';
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            console.log('Clicked outside login modal');
            loginModal.style.display = 'none';
        }
        if (e.target === signupModal) {
            console.log('Clicked outside signup modal');
            signupModal.style.display = 'none';
        }
    });

    // Handle form submissions
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Login form submitted');
            if (loginModal) loginModal.style.display = 'none';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Signup form submitted');
            if (signupModal) signupModal.style.display = 'none';
        });
    }

    // Load featured tools if on homepage
    if (featuredToolsContainer) {
        console.log('Loading featured tools');
        const featuredTools = toolManager.getFeaturedTools();
        featuredTools.forEach(tool => {
            const toolCard = new ToolCard(tool);
            featuredToolsContainer.appendChild(toolCard.render());
        });
    }

    // Load all tools by category
    if (allToolsContainer) {
        console.log('Loading all tools by category');
        const categories = toolManager.getAllCategories();
        
        // Create category sections
        categories.forEach(category => {
            const categorySection = document.createElement('div');
            categorySection.className = 'category-section';
            categorySection.id = `category-${toolManager.getCategoryKey(category)}`;
            
            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = category;
            categorySection.appendChild(categoryTitle);
            
            const toolsGrid = document.createElement('div');
            toolsGrid.className = 'tools-grid';
            
            const tools = toolManager.getToolsByCategory(category);
            tools.forEach(tool => {
                const toolCard = new ToolCard(tool);
                toolsGrid.appendChild(toolCard.render());
            });
            
            categorySection.appendChild(toolsGrid);
            allToolsContainer.appendChild(categorySection);
        });

        // Set first category as active by default
        const firstCategory = categories[0];
        const firstCategoryKey = toolManager.getCategoryKey(firstCategory);
        const firstCategorySection = document.getElementById(`category-${firstCategoryKey}`);
        if (firstCategorySection) {
            firstCategorySection.style.display = 'block';
        }
    }

    // Handle category tab clicks
    if (categoryTabs) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const category = tab.dataset.category;
                const categoryKey = toolManager.getCategoryKey(category);
                
                console.log('Category tab clicked:', category, categoryKey);
                
                // Update active tab
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Show selected category section
                const sections = document.querySelectorAll('.category-section');
                sections.forEach(section => {
                    if (section.id === `category-${categoryKey}`) {
                        section.style.display = 'block';
                        console.log('Showing section:', section.id);
                    } else {
                        section.style.display = 'none';
                        console.log('Hiding section:', section.id);
                    }
                });
            });
        });
    }
}); 
