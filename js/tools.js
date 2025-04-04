// 工具数据
const toolsData = {
    'text-to-speech': [
        {
            name: 'ElevenLabs',
            url: 'https://elevenlabs.io/',
            description: '高质量的AI语音合成平台，支持多种语言和声音风格。',
            features: ['29+ 种语言', '行业领先的自然度', 'API 集成'],
            rating: 4.8,
            price: '免费版可用'
        },
        {
            name: 'Murf.ai',
            url: 'https://murf.ai/',
            description: '专业的 AI 语音合成平台，提供多种声音和情感选项。',
            features: ['120+ 种声音', '情感控制', '团队协作'],
            rating: 4.6,
            price: '免费版可用'
        }
    ],
    'speech-to-text': [
        {
            name: 'Whisper',
            url: 'https://openai.com/research/whisper',
            description: 'OpenAI 开发的高精度语音识别模型。',
            features: ['多语言支持', '高准确率', '开源可用'],
            rating: 4.9,
            price: '免费'
        }
    ],
    'audio-editing': [
        {
            name: 'Descript',
            url: 'https://www.descript.com/',
            description: '革命性的音频编辑工具，支持文本编辑音频。',
            features: ['文本编辑音频', '自动转录', '多人协作'],
            rating: 4.7,
            price: '免费版可用'
        }
    ],
    'voice-cloning': [
        {
            name: 'Coqui',
            url: 'https://coqui.ai/',
            description: '开源的声音克隆和合成平台。',
            features: ['开源', '高质量克隆', '多语言支持'],
            rating: 4.5,
            price: '免费'
        }
    ]
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    const toolsGrid = document.getElementById('toolsGrid');
    const categoryBtns = document.querySelectorAll('.category-btn');

    // 渲染工具卡片
    function renderTools(category = 'all') {
        toolsGrid.innerHTML = '';
        let toolsToShow = [];

        if (category === 'all') {
            // 显示所有工具
            Object.values(toolsData).forEach(categoryTools => {
                toolsToShow = toolsToShow.concat(categoryTools);
            });
        } else {
            // 显示特定分类的工具
            toolsToShow = toolsData[category] || [];
        }

        toolsToShow.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            toolCard.innerHTML = `
                <h3>${tool.name}</h3>
                <p class="description">${tool.description}</p>
                <div class="features">
                    ${tool.features.map(feature => `<span class="feature">${feature}</span>`).join('')}
                </div>
                <div class="tool-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${tool.rating}</span>
                    </div>
                    <div class="price">${tool.price}</div>
                </div>
                <a href="${tool.url}" target="_blank" class="visit-btn">访问网站</a>
            `;
            toolsGrid.appendChild(toolCard);
        });
    }

    // 分类按钮点击事件
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新活动按钮状态
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 渲染对应分类的工具
            const category = this.dataset.category;
            renderTools(category);
        });
    });

    // 初始渲染所有工具
    renderTools();
}); 
