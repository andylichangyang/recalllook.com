// 初始化页面
const initializePage = () => {
    console.log('Main.js: Initializing page...');
    
    // 如果有阻止干扰的标志，则不初始化分类标签功能
    if (window.preventMainJSInterference) {
        console.log('Main.js: 检测到阻止干扰标志，跳过分类标签初始化');
        return;
    }

    // 硬编码工具数据，确保可用
    const toolsData = {
        textToSpeech: [
            {
                name: "ElevenLabs",
                url: "https://elevenlabs.io/",
                description: "提供极其逼真的多语言 AI 语音合成，具有微妙的情感表达和音调控制。",
                features: ["29+ 种语言", "行业领先的自然度", "API 集成"],
                category: "文本转语音",
                rating: 4.9,
                price: "提供免费套餐"
            },
            {
                name: "Play.ht",
                url: "https://play.ht/",
                description: "提供自然流畅的 AI 语音合成，支持多种语言和语音风格。",
                features: ["900+ 种声音", "70+ 种语言", "WordPress 插件"],
                category: "文本转语音",
                rating: 4.7,
                price: "付费"
            }
        ],
        speechToText: [
            {
                name: "Deepgram",
                url: "https://deepgram.com/",
                description: "专注于实时高精度语音转文本技术，具有行业领先的准确性。",
                features: ["实时转录", "自定义词汇", "说话人识别"],
                category: "语音转文本",
                rating: 4.8,
                price: "付费"
            },
            {
                name: "Whisper",
                url: "https://openai.com/research/whisper",
                description: "开源语音识别系统，具有多语言能力。",
                features: ["多语言支持", "开源", "强大的性能"],
                category: "语音转文本",
                rating: 4.7,
                price: "免费"
            }
        ],
        audioEditing: [
            {
                name: "Adobe Audition",
                url: "https://www.adobe.com/products/audition.html",
                description: "专业音频工作站，用于混音、编辑和创建音频内容。",
                features: ["专业工具", "降噪", "多轨编辑"],
                category: "音频编辑",
                rating: 4.8,
                price: "付费"
            },
            {
                name: "Audacity",
                url: "https://www.audacityteam.org/",
                description: "免费、开源的多轨录制和编辑音频软件。",
                features: ["免费和开源", "跨平台", "插件支持"],
                category: "音频编辑",
                rating: 4.6,
                price: "免费"
            }
        ],
        musicGeneration: [
            {
                name: "AIVA",
                url: "https://www.aiva.ai/",
                description: "人工智能作曲家，可创作情感音乐作品。",
                features: ["多种音乐风格", "可定制", "专业品质"],
                category: "音乐生成",
                rating: 4.7,
                price: "提供免费套餐"
            },
            {
                name: "Amper Music",
                url: "https://www.ampermusic.com/",
                description: "AI 驱动的音乐创作平台，用于创建自定义音轨。",
                features: ["专业品质", "简单界面", "快速创作"],
                category: "音乐生成",
                rating: 4.5,
                price: "付费"
            }
        ],
        voiceCloning: [
            {
                name: "Resemble AI",
                url: "https://www.resemble.ai/",
                description: "AI 语音生成器，支持自定义语音创建和实时合成。",
                features: ["自定义语音", "实时合成", "API 访问"],
                category: "语音克隆",
                rating: 4.7,
                price: "付费"
            },
            {
                name: "Descript",
                url: "https://www.descript.com/",
                description: "AI 驱动的音频和视频编辑平台，允许像编辑文档一样编辑媒体。",
                features: ["基于文本的编辑", "高质量转录", "自动删除填充词"],
                category: "语音克隆",
                rating: 4.8,
                price: "付费"
            }
        ]
    };
    
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
        const allTools = Object.values(toolsData).flat();
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
                const categoryTools = toolsData[category]; // 使用本地变量
                
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
                    console.error('No tools found for category:', category);
                    allToolsContainer.innerHTML = '<p class="no-tools">No tools found for this category.</p>';
                }
            });
        });

        // Set first category as active by default
        if (categoryTabs.length > 0) {
            console.log('Setting first category as active...');
            categoryTabs[0].click();
        } else if (window.currentCategory) {
            // 如果是从分类页面进入，显示对应分类的工具
            console.log('Loading tools for category:', window.currentCategory);
            
            // 确定要加载的分类键名
            let categoryKey;
            switch(window.currentCategory) {
                case 'Text to Speech':
                    categoryKey = 'textToSpeech';
                    break;
                case 'Speech to Text':
                    categoryKey = 'speechToText';
                    break;
                case 'Audio Editing':
                    categoryKey = 'audioEditing';
                    break;
                case 'Music Generation':
                    categoryKey = 'musicGeneration';
                    break;
                case 'Voice Cloning':
                    categoryKey = 'voiceCloning';
                    break;
                default:
                    categoryKey = 'textToSpeech';
            }
            
            // 获取当前分类的工具
            const categoryTools = toolsData[categoryKey];
            console.log('Tools for category:', categoryTools);
            
            if (categoryTools && Array.isArray(categoryTools) && allToolsContainer) {
                // 渲染工具卡片
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
            }
        }
    }
};

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}

// 主要的JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成');

    // 获取所有分类按钮
    const categoryButtons = document.querySelectorAll('.category-button');
    
    // 为每个按钮添加点击事件监听器
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log('分类按钮被点击:', button.href);
        });
    });
});

// 模态框功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取模态框元素
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const closeBtns = document.querySelectorAll('.close');
    const showSignupLink = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');

    // 打开登录模态框
    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    // 打开注册模态框
    signupBtn.onclick = function() {
        signupModal.style.display = "block";
    }

    // 关闭模态框
    closeBtns.forEach(btn => {
        btn.onclick = function() {
            loginModal.style.display = "none";
            signupModal.style.display = "none";
        }
    });

    // 在模态框外点击关闭
    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == signupModal) {
            signupModal.style.display = "none";
        }
    }

    // 切换登录和注册模态框
    showSignupLink.onclick = function(e) {
        e.preventDefault();
        loginModal.style.display = "none";
        signupModal.style.display = "block";
    }

    showLoginLink.onclick = function(e) {
        e.preventDefault();
        signupModal.style.display = "none";
        loginModal.style.display = "block";
    }

    // 处理表单提交
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.onsubmit = function(e) {
        e.preventDefault();
        // TODO: 实现登录逻辑
        console.log('登录表单提交');
    }

    signupForm.onsubmit = function(e) {
        e.preventDefault();
        // TODO: 实现注册逻辑
        console.log('注册表单提交');
    }
});

// 展开/收起功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有更多按钮
    const moreButtons = document.querySelectorAll('.btn-more');
    
    // 为每个按钮添加点击事件
    moreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 获取当前分类部分
            const categorySection = this.closest('.category-section');
            
            // 切换展开状态
            categorySection.classList.toggle('expanded');
            
            // 更新按钮文本和图标
            if (categorySection.classList.contains('expanded')) {
                this.innerHTML = '收起 <i class="fas fa-chevron-up"></i>';
            } else {
                this.innerHTML = '更多 <i class="fas fa-chevron-down"></i>';
            }
        });
    });
}); 
