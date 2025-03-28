import { ToolManager } from './utils/ToolManager.js';
import { ToolCard } from './components/ToolCard.js';

// 初始化工具管理器
const toolManager = new ToolManager();

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 加载导航栏和页脚
    loadComponents();
    
    // 初始化工具展示
    initializeTools();
    
    // 设置事件监听器
    setupEventListeners();
});

// 加载组件
async function loadComponents() {
    try {
        // 加载导航栏
        const headerResponse = await fetch('components/header.html');
        const headerHtml = await headerResponse.text();
        document.getElementById('header-placeholder').innerHTML = headerHtml;

        // 加载页脚
        const footerResponse = await fetch('components/footer.html');
        const footerHtml = await footerResponse.text();
        document.getElementById('footer-placeholder').innerHTML = footerHtml;
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// 初始化工具展示
function initializeTools() {
    // 渲染所有分类的工具
    const categories = ['speech-synthesis', 'speech-recognition', 'audio-editing', 'music-generation', 'voice-cloning'];
    categories.forEach(category => {
        const tools = toolManager.getToolsByCategory(category);
        const container = document.querySelector(`#${category} .tools-grid`);
        if (container) {
            container.innerHTML = tools
                .map(tool => new ToolCard(tool).render())
                .join('');
        }
    });
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            toolManager.setSearchQuery(e.target.value);
            updateToolsDisplay();
        });
    }

    // 分类筛选
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            toolManager.setCategory(e.target.value);
            updateToolsDisplay();
        });
    }

    // 价格筛选
    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter) {
        priceFilter.addEventListener('change', (e) => {
            toolManager.setPrice(e.target.value);
            updateToolsDisplay();
        });
    }

    // 评分筛选
    const ratingFilter = document.getElementById('ratingFilter');
    if (ratingFilter) {
        ratingFilter.addEventListener('change', (e) => {
            toolManager.setRating(e.target.value);
            updateToolsDisplay();
        });
    }

    // 模态框切换
    const switchToSignup = document.querySelector('.switch-to-signup');
    const switchToLogin = document.querySelector('.switch-to-login');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');

    if (switchToSignup) {
        switchToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'none';
            signupModal.style.display = 'block';
        });
    }

    if (switchToLogin) {
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            signupModal.style.display = 'none';
            loginModal.style.display = 'block';
        });
    }

    // 关闭模态框
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // 平滑滚动到分类
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 更新工具显示
function updateToolsDisplay() {
    const filteredTools = toolManager.filterTools();
    const container = document.querySelector('.tools-grid');
    if (container) {
        container.innerHTML = filteredTools
            .map(tool => new ToolCard(tool).render())
            .join('');
    }
} 
