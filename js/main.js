// 初始化页面
const initializePage = () => {
    console.log('Initializing page...');
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
    console.log('DOM elements:', {
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
            // Add login logic here
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Signup form submitted');
            // Add signup logic here
        });
    }

    // Load featured tools
    if (featuredToolsContainer) {
        console.log('Loading featured tools...');
        // 获取所有工具并按评分排序
        const allTools = Object.values(window.toolsData).flat();
        const featuredTools = allTools
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3);
        
        console.log('Featured tools:', featuredTools);
        featuredTools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            toolCard.innerHTML = `
                <div class="tool-header">
                    <h3>${tool.name}</h3>
                    <span class="rating">${tool.rating} ⭐</span>
                </div>
                <p class="description">${tool.description}</p>
                <div class="features">
                    <h4>Key Features:</h4>
                    <ul>
                        ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="tool-footer">
                    <div class="tool-meta">
                        <span class="category">${tool.category}</span>
                        <span class="price">${tool.price}</span>
                    </div>
                    <a href="${tool.url}" target="_blank" class="visit-button">
                        <i class="fas fa-external-link-alt"></i>
                        Visit Website
                    </a>
                </div>
            `;
            featuredToolsContainer.appendChild(toolCard);
        });
    }

    // Handle category tab clicks
    if (categoryTabs && allToolsContainer) {
        console.log('Setting up category tabs...');
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const category = tab.dataset.category;
                console.log('Category tab clicked:', category);
                
                // Remove active class from all tabs
                categoryTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Get tools for selected category
                const categoryKey = category.toLowerCase().replace(/\s+/g, '');
                const categoryTools = window.toolsData[categoryKey];
                
                if (categoryTools && Array.isArray(categoryTools)) {
                    // Clear container
                    allToolsContainer.innerHTML = '';
                    
                    // Render tools
                    categoryTools.forEach(tool => {
                        const toolCard = document.createElement('div');
                        toolCard.className = 'tool-card';
                        toolCard.innerHTML = `
                            <div class="tool-header">
                                <h3>${tool.name}</h3>
                                <span class="rating">${tool.rating} ⭐</span>
                            </div>
                            <p class="description">${tool.description}</p>
                            <div class="features">
                                <h4>Key Features:</h4>
                                <ul>
                                    ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="tool-footer">
                                <div class="tool-meta">
                                    <span class="category">${tool.category}</span>
                                    <span class="price">${tool.price}</span>
                                </div>
                                <a href="${tool.url}" target="_blank" class="visit-button">
                                    <i class="fas fa-external-link-alt"></i>
                                    Visit Website
                                </a>
                            </div>
                        `;
                        allToolsContainer.appendChild(toolCard);
                    });
                } else {
                    console.error('No tools found for category:', categoryKey);
                    allToolsContainer.innerHTML = '<p class="no-tools">No tools found for this category.</p>';
                }
            });
        });

        // Set first category as active by default
        if (categoryTabs.length > 0) {
            console.log('Setting first category as active...');
            categoryTabs[0].click();
        }
    }
};

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
} 
