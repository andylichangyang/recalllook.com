import ToolManager from './utils/ToolManager.js';
import ToolCard from './components/ToolCard.js';

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load featured tools
    const featuredToolsContainer = document.getElementById('featuredTools');
    if (featuredToolsContainer) {
        const featuredTools = ToolManager.getFeaturedTools();
        featuredTools.forEach(tool => {
            const toolCard = new ToolCard(tool);
            featuredToolsContainer.appendChild(toolCard.render());
        });
    }

    // Modal functionality
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeButtons = document.querySelectorAll('.close');
    const showSignupLink = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');

    // Show login modal
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    // Show signup modal
    signupBtn.addEventListener('click', () => {
        signupModal.style.display = 'block';
    });

    // Close modals
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        });
    });

    // Switch between modals
    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'block';
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.style.display = 'none';
        loginModal.style.display = 'block';
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === signupModal) {
            signupModal.style.display = 'none';
        }
    });

    // Handle form submissions
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Login submitted');
        loginModal.style.display = 'none';
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add signup logic here
        console.log('Signup submitted');
        signupModal.style.display = 'none';
    });
}); 
