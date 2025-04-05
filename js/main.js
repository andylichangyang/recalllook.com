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
            },
            {
                name: "Murf AI",
                url: "https://murf.ai/",
                description: "专业的AI语音生成器，适用于视频配音和演示。",
                features: ["120+ 种声音", "多语言支持", "实时编辑"],
                category: "文本转语音",
                rating: 4.8,
                price: "提供免费试用"
            },
            {
                name: "Speechify",
                url: "https://speechify.com/",
                description: "将任何文本转换为自然的语音，支持多平台使用。",
                features: ["多设备同步", "OCR功能", "自然语音"],
                category: "文本转语音",
                rating: 4.6,
                price: "提供免费版本"
            },
            {
                name: "Amazon Polly",
                url: "https://aws.amazon.com/polly/",
                description: "亚马逊的云端文本转语音服务，提供企业级解决方案。",
                features: ["多种语言", "SSML支持", "神经语音"],
                category: "文本转语音",
                rating: 4.8,
                price: "按使用付费"
            },
            {
                name: "Cepstral",
                url: "https://www.cepstral.com/",
                description: "专业的文本转语音引擎，提供高质量的合成声音。",
                features: ["离线使用", "自定义发音", "多语言支持"],
                category: "文本转语音",
                rating: 4.5,
                price: "一次性购买"
            },
            {
                name: "NaturalReader",
                url: "https://www.naturalreaders.com/",
                description: "易用的在线文本转语音工具，支持多种文档格式。",
                features: ["文档转换", "Chrome扩展", "移动应用"],
                category: "文本转语音",
                rating: 4.4,
                price: "提供免费版本"
            },
            {
                name: "Acapela Group",
                url: "https://www.acapela-group.com/",
                description: "专业的语音合成解决方案，提供个性化声音服务。",
                features: ["情感语音", "定制声音", "多行业解决方案"],
                category: "文本转语音",
                rating: 4.6,
                price: "企业定制"
            },
            {
                name: "ReadSpeaker",
                url: "https://www.readspeaker.com/",
                description: "企业级文本转语音解决方案，支持网站集成。",
                features: ["网站集成", "企业解决方案", "多语言支持"],
                category: "文本转语音",
                rating: 4.7,
                price: "企业定价"
            },
            {
                name: "Balabolka",
                url: "http://www.cross-plus-a.com/balabolka.htm",
                description: "免费的桌面文本转语音软件，支持多种语音引擎。",
                features: ["批量转换", "多格式支持", "调音设置"],
                category: "文本转语音",
                rating: 4.3,
                price: "免费"
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
            },
            {
                name: "Rev.ai",
                url: "https://www.rev.ai/",
                description: "专业的语音识别API，提供高精度转录服务。",
                features: ["实时转录", "API接入", "定制模型"],
                category: "语音转文本",
                rating: 4.8,
                price: "按分钟计费"
            },
            {
                name: "Otter.ai",
                url: "https://otter.ai/",
                description: "智能会议记录和实时转录工具。",
                features: ["实时会议记录", "智能摘要", "团队协作"],
                category: "语音转文本",
                rating: 4.7,
                price: "提供免费版本"
            },
            {
                name: "Google Speech-to-Text",
                url: "https://cloud.google.com/speech-to-text",
                description: "谷歌的企业级语音识别服务。",
                features: ["自动标点", "说话人分离", "行业适配"],
                category: "语音转文本",
                rating: 4.9,
                price: "按使用付费"
            },
            {
                name: "Sonix",
                url: "https://sonix.ai/",
                description: "自动转录和翻译平台，支持多种语言。",
                features: ["自动翻译", "字幕生成", "团队共享"],
                category: "语音转文本",
                rating: 4.6,
                price: "按分钟收费"
            },
            {
                name: "Speechmatics",
                url: "https://www.speechmatics.com/",
                description: "企业级语音识别解决方案。",
                features: ["多方言支持", "定制词汇", "批量处理"],
                category: "语音转文本",
                rating: 4.7,
                price: "企业定价"
            },
            {
                name: "Voicera",
                url: "https://www.voicera.ai/",
                description: "智能会议助手和语音转文本服务。",
                features: ["会议总结", "行动项提取", "智能分析"],
                category: "语音转文本",
                rating: 4.5,
                price: "订阅制"
            },
            {
                name: "Verbit",
                url: "https://verbit.ai/",
                description: "AI驱动的转录和字幕解决方案。",
                features: ["实时字幕", "专业转录", "教育解决方案"],
                category: "语音转文本",
                rating: 4.8,
                price: "定制方案"
            },
            {
                name: "Temi",
                url: "https://www.temi.com/",
                description: "快速准确的语音转文本服务。",
                features: ["快速处理", "简单定价", "编辑器集成"],
                category: "语音转文本",
                rating: 4.6,
                price: "按分钟付费"
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
            },
            {
                name: "FL Studio",
                url: "https://www.image-line.com/",
                description: "专业的数字音频工作站，适合音乐制作。",
                features: ["音乐制作", "虚拟乐器", "MIDI支持"],
                category: "音频编辑",
                rating: 4.8,
                price: "一次性购买"
            },
            {
                name: "Logic Pro",
                url: "https://www.apple.com/logic-pro/",
                description: "苹果专业音频制作软件。",
                features: ["专业混音", "虚拟乐器", "音频特效"],
                category: "音频编辑",
                rating: 4.9,
                price: "一次性购买"
            },
            {
                name: "Reaper",
                url: "https://www.reaper.fm/",
                description: "轻量级但功能强大的数字音频工作站。",
                features: ["性能优化", "定制界面", "插件支持"],
                category: "音频编辑",
                rating: 4.7,
                price: "低价付费"
            },
            {
                name: "Studio One",
                url: "https://www.presonus.com/products/Studio-One",
                description: "现代化的音频制作软件。",
                features: ["直观界面", "拖放工作流", "集成工具"],
                category: "音频编辑",
                rating: 4.7,
                price: "多个版本"
            },
            {
                name: "Soundforge",
                url: "https://www.magix.com/us/music/sound-forge/",
                description: "专业的音频编辑和母带处理软件。",
                features: ["专业音频处理", "母带制作", "音频恢复"],
                category: "音频编辑",
                rating: 4.6,
                price: "付费"
            },
            {
                name: "WavePad",
                url: "https://www.nch.com.au/wavepad/",
                description: "简单易用的音频编辑软件。",
                features: ["基础编辑", "音频效果", "格式转换"],
                category: "音频编辑",
                rating: 4.4,
                price: "免费版本可用"
            },
            {
                name: "Ardour",
                url: "https://ardour.org/",
                description: "开源的专业数字音频工作站。",
                features: ["开源", "专业功能", "跨平台"],
                category: "音频编辑",
                rating: 4.5,
                price: "自愿付费"
            },
            {
                name: "Ocenaudio",
                url: "https://www.ocenaudio.com/",
                description: "跨平台的音频编辑器，简单但功能强大。",
                features: ["实时预览", "多文件编辑", "VST插件支持"],
                category: "音频编辑",
                rating: 4.5,
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
            },
            {
                name: "OpenAI MuseNet",
                url: "https://openai.com/research/musenet",
                description: "深度神经网络音乐生成系统。",
                features: ["多种风格", "乐器组合", "开源"],
                category: "音乐生成",
                rating: 4.6,
                price: "免费"
            },
            {
                name: "Soundraw",
                url: "https://soundraw.io/",
                description: "AI音乐生成平台，适用于视频创作者。",
                features: ["定制音乐", "无版权", "多种风格"],
                category: "音乐生成",
                rating: 4.7,
                price: "订阅制"
            },
            {
                name: "Mubert",
                url: "https://mubert.com/",
                description: "实时AI音乐生成平台。",
                features: ["流媒体", "API接入", "场景音乐"],
                category: "音乐生成",
                rating: 4.5,
                price: "多种套餐"
            },
            {
                name: "Boomy",
                url: "https://boomy.com/",
                description: "AI辅助音乐创作平台。",
                features: ["快速创作", "版权收益", "社区分享"],
                category: "音乐生成",
                rating: 4.4,
                price: "免费开始"
            },
            {
                name: "Ecrett Music",
                url: "https://ecrettmusic.com/",
                description: "为视频制作AI背景音乐。",
                features: ["场景匹配", "情感识别", "快速导出"],
                category: "音乐生成",
                rating: 4.6,
                price: "订阅制"
            },
            {
                name: "Amadeus Code",
                url: "https://amadeuscode.com/",
                description: "AI作曲助手应用。",
                features: ["旋律生成", "和声编排", "风格转换"],
                category: "音乐生成",
                rating: 4.5,
                price: "应用内购买"
            },
            {
                name: "Infinite Album",
                url: "https://infinitealbum.io/",
                description: "生成无限独特的音乐作品。",
                features: ["无限变化", "风格混合", "实时生成"],
                category: "音乐生成",
                rating: 4.4,
                price: "订阅服务"
            },
            {
                name: "Beatoven.ai",
                url: "https://www.beatoven.ai/",
                description: "定制化AI音乐创作平台。",
                features: ["情感驱动", "视频配乐", "专业品质"],
                category: "音乐生成",
                rating: 4.6,
                price: "信用点数制"
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
            },
            {
                name: "Lyrebird AI",
                url: "https://www.descript.com/lyrebird",
                description: "专业的声音克隆技术。",
                features: ["声音复制", "情感控制", "实时合成"],
                category: "语音克隆",
                rating: 4.7,
                price: "集成定价"
            },
            {
                name: "VocaliD",
                url: "https://www.vocalid.ai/",
                description: "个性化语音合成解决方案。",
                features: ["声音银行", "定制声音", "医疗应用"],
                category: "语音克隆",
                rating: 4.6,
                price: "定制方案"
            },
            {
                name: "Respeecher",
                url: "https://www.respeecher.com/",
                description: "专业的声音转换和克隆服务。",
                features: ["语音转换", "年龄变化", "性别转换"],
                category: "语音克隆",
                rating: 4.8,
                price: "企业定价"
            },
            {
                name: "CereProc",
                url: "https://www.cereproc.com/",
                description: "定制化文本转语音解决方案。",
                features: ["声音定制", "多语言支持", "情感合成"],
                category: "语音克隆",
                rating: 4.5,
                price: "联系定价"
            },
            {
                name: "Replica Studios",
                url: "https://replicastudios.com/",
                description: "AI语音生成器，专注于游戏和娱乐。",
                features: ["游戏配音", "实时合成", "角色声音"],
                category: "语音克隆",
                rating: 4.7,
                price: "订阅制"
            },
            {
                name: "Synthesia",
                url: "https://www.synthesia.io/",
                description: "AI视频生成平台，包含语音克隆功能。",
                features: ["视频合成", "多语言配音", "企业定制"],
                category: "语音克隆",
                rating: 4.8,
                price: "企业方案"
            },
            {
                name: "Coqui",
                url: "https://coqui.ai/",
                description: "开源语音合成工具包。",
                features: ["开源框架", "多语言支持", "社区支持"],
                category: "语音克隆",
                rating: 4.4,
                price: "免费/开源"
            },
            {
                name: "Voice.ai",
                url: "https://voice.ai/",
                description: "实时语音转换和克隆工具。",
                features: ["实时转换", "多声音模型", "流媒体集成"],
                category: "语音克隆",
                rating: 4.6,
                price: "免费增值"
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

    // 渲染工具卡片的函数
    const renderToolCard = (tool) => {
        return `
            <div class="tool-card">
                <div class="tool-header">
                    <h3><a href="${tool.url}" target="_blank">${tool.name}</a></h3>
                    <div class="tool-meta">
                        <span class="rating"><i class="fas fa-star"></i> ${tool.rating}/5</span>
                        <span class="price">${tool.price}</span>
                    </div>
                </div>
                <p>${tool.description}</p>
                <div class="tool-features">
                    ${tool.features.map(feature => `<span>${feature}</span>`).join('')}
                </div>
                <div class="tool-actions">
                    <a href="${tool.url}" target="_blank" class="btn-view">Visit Website</a>
                </div>
            </div>
        `;
    };

    // 初始化工具卡片
    const initializeToolCards = () => {
        const categories = {
            'text-to-speech': toolsData.textToSpeech,
            'speech-to-text': toolsData.speechToText,
            'audio-editing': toolsData.audioEditing,
            'music-generation': toolsData.musicGeneration,
            'voice-cloning': toolsData.voiceCloning
        };

        Object.entries(categories).forEach(([categoryId, tools]) => {
            const toolsGrid = document.querySelector(`#${categoryId} .tools-grid`);
            if (toolsGrid && tools) {
                toolsGrid.innerHTML = tools.map(tool => renderToolCard(tool)).join('');
            }
        });
    };

    // 初始化展开/收起功能
    const initializeExpandButtons = () => {
        const moreButtons = document.querySelectorAll('.btn-more');
        moreButtons.forEach(button => {
            button.addEventListener('click', function() {
                const categorySection = this.closest('.category-section');
                categorySection.classList.toggle('expanded');
                
                if (categorySection.classList.contains('expanded')) {
                    this.innerHTML = 'Less <i class="fas fa-chevron-up"></i>';
                } else {
                    this.innerHTML = 'More <i class="fas fa-chevron-down"></i>';
                }
            });
        });
    };

    // 初始化所有功能
    initializeToolCards();
    initializeExpandButtons();
};

// 页面加载完成后初始化
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

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有分类部分
    const categories = {
        'text-to-speech': toolsData.textToSpeech,
        'speech-to-text': toolsData.speechToText,
        'audio-editing': toolsData.audioEditing,
        'music-generation': toolsData.musicGeneration,
        'voice-cloning': toolsData.voiceCloning
    };

    // 为每个分类渲染工具卡片
    Object.entries(categories).forEach(([categoryId, tools]) => {
        const toolsGrid = document.querySelector(`#${categoryId} .tools-grid`);
        if (toolsGrid && tools) {
            tools.forEach(tool => {
                const toolCard = document.createElement('div');
                toolCard.className = 'tool-card';
                toolCard.innerHTML = `
                    <div class="tool-header">
                        <h3><a href="${tool.url}" target="_blank">${tool.name}</a></h3>
                        <div class="tool-meta">
                            <span class="rating"><i class="fas fa-star"></i> ${tool.rating}/5</span>
                            <span class="price">${tool.price}</span>
                        </div>
                    </div>
                    <p>${tool.description}</p>
                    <div class="tool-features">
                        ${tool.features.map(feature => `<span>${feature}</span>`).join('')}
                    </div>
                    <div class="tool-actions">
                        <a href="${tool.url}" target="_blank" class="btn-view">Visit Website</a>
                    </div>
                `;
                toolsGrid.appendChild(toolCard);
            });
        }
    });

    // 展开/收起功能
    const moreButtons = document.querySelectorAll('.btn-more');
    moreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const categorySection = this.closest('.category-section');
            categorySection.classList.toggle('expanded');
            
            if (categorySection.classList.contains('expanded')) {
                this.innerHTML = 'Less <i class="fas fa-chevron-up"></i>';
            } else {
                this.innerHTML = 'More <i class="fas fa-chevron-down"></i>';
            }
        });
    });
}); 
