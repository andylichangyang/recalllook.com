// 硬编码工具数据
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

// 当 DOM 加载完成时执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('Category tabs script loaded');
    console.log('可用分类:', Object.keys(toolsData));
    
    // 直接显示第一个分类的工具
    function renderAllTools() {
        const allToolsContainer = document.getElementById('allTools');
        if (!allToolsContainer) {
            console.error('工具容器未找到');
            return;
        }
        
        // 清空容器
        allToolsContainer.innerHTML = '';
        
        // 创建工具卡片HTML
        let toolsHtml = '';
        
        // 遍历所有分类
        Object.keys(toolsData).forEach(category => {
            const tools = toolsData[category];
            if (tools && Array.isArray(tools)) {
                tools.forEach(tool => {
                    toolsHtml += `
                        <div class="tool-card">
                            <div class="tool-header">
                                <h3>${tool.name}</h3>
                                <span class="rating">${tool.rating} ⭐</span>
                            </div>
                            <p class="description">${tool.description}</p>
                            <div class="features">
                                <h4>关键特点:</h4>
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
                                    访问网站
                                </a>
                            </div>
                        </div>
                    `;
                });
            }
        });
        
        // 将HTML添加到容器
        allToolsContainer.innerHTML = toolsHtml;
        console.log('已渲染所有工具');
    }
    
    // 处理分类切换
    function setupCategoryTabs() {
        const categoryTabs = document.querySelectorAll('.category-tab');
        const allToolsContainer = document.getElementById('allTools');
        
        console.log('找到分类标签:', categoryTabs.length);
        
        if (!allToolsContainer) {
            console.error('工具容器未找到');
            return;
        }
        
        categoryTabs.forEach(tab => {
            const categoryKey = tab.dataset.category;
            console.log('分类标签:', categoryKey);
            
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                
                // 移除所有标签的active类
                categoryTabs.forEach(t => t.classList.remove('active'));
                
                // 添加active类到当前标签
                tab.classList.add('active');
                
                // 获取分类数据
                const tools = toolsData[categoryKey];
                console.log(`已点击分类: ${categoryKey}, 找到工具: ${tools ? tools.length : 0}`);
                
                // 清空容器
                allToolsContainer.innerHTML = '';
                
                if (tools && Array.isArray(tools) && tools.length > 0) {
                    // 渲染该分类的工具
                    tools.forEach(tool => {
                        const toolCard = document.createElement('div');
                        toolCard.className = 'tool-card';
                        toolCard.innerHTML = `
                            <div class="tool-header">
                                <h3>${tool.name}</h3>
                                <span class="rating">${tool.rating} ⭐</span>
                            </div>
                            <p class="description">${tool.description}</p>
                            <div class="features">
                                <h4>关键特点:</h4>
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
                                    访问网站
                                </a>
                            </div>
                        `;
                        allToolsContainer.appendChild(toolCard);
                    });
                } else {
                    console.error(`未找到分类 ${categoryKey} 的工具`);
                    // 显示所有工具
                    renderAllTools();
                }
            });
        });
        
        // 检查是否有active类的标签
        const activeTab = document.querySelector('.category-tab.active');
        if (activeTab) {
            console.log('找到活动标签:', activeTab.dataset.category);
            activeTab.click();
        } else if (categoryTabs.length > 0) {
            console.log('没有活动标签，点击第一个标签');
            categoryTabs[0].click();
        } else {
            console.warn('未找到分类标签，显示所有工具');
            renderAllTools();
        }
    }
    
    // 初始化
    setupCategoryTabs();
}); 
