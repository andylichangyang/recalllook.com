const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;

// 设置EJS模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 使用布局系统
app.use(expressLayouts);
app.set('layout', 'base');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);
app.set('layout extractMetas', true);

// 设置默认变量
app.use((req, res, next) => {
    res.locals.style = '';
    res.locals.script = '';
    next();
});

// 静态文件服务
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// 中间件：添加当前路径到所有视图
app.use((req, res, next) => {
    console.log('Request URL:', req.url);
    res.locals.path = req.path;
    next();
});

// 路由
app.get('/', (req, res) => {
    console.log('Rendering index page');
    res.render('index', { 
        title: 'Home - RecallLook'
    });
});

app.get('/tools', (req, res) => {
    console.log('渲染工具主页');
    res.render('tools', {
        title: '语音 AI 工具 | 探索最佳语音技术',
        description: '探索最新的语音人工智能工具，包括文本转语音、语音转文本、音频编辑等。',
        page: 'tools'
    });
});

app.get('/about', (req, res) => {
    console.log('Rendering about page');
    res.render('about', { 
        title: 'About - RecallLook'
    });
});

app.get('/contact', (req, res) => {
    console.log('Rendering contact page');
    res.render('contact', { 
        title: 'Contact - RecallLook'
    });
});

// 重定向 /tools.html 到 /tools
app.get('/tools.html', (req, res) => {
    console.log('Redirecting from /tools.html to /tools');
    res.redirect('/tools');
});

// 工具分类页面路由
app.get('/tools/category/:category', (req, res) => {
    const categoryKey = req.params.category;
    console.log('渲染分类页面:', categoryKey);
    
    // 添加分类映射
    const categoryMap = {
        'text-to-speech': 'Text to Speech',
        'speech-to-text': 'Speech to Text',
        'audio-editing': 'Audio Editing',
        'music-generation': 'Music Generation',
        'voice-cloning': 'Voice Cloning'
    };
    
    // 中文分类名称映射
    const categoryChineseNames = {
        'text-to-speech': '文本转语音',
        'speech-to-text': '语音转文本',
        'audio-editing': '音频编辑',
        'music-generation': '音乐生成',
        'voice-cloning': '语音克隆'
    };
    
    // 获取英文分类名和中文分类名
    const categoryName = categoryMap[categoryKey];
    const categoryChineseName = categoryChineseNames[categoryKey];
    
    console.log('分类键值:', categoryKey);
    console.log('英文分类名:', categoryName);
    console.log('中文分类名:', categoryChineseName);
    
    if (!categoryName) {
        console.log('未找到分类:', categoryKey);
        return res.status(404).render('404', { 
            title: '404 - 分类未找到'
        });
    }

    // 工具数据
    const toolsData = {
        'Text to Speech': [
            {
                name: "ElevenLabs",
                url: "https://elevenlabs.io/",
                description: "提供极其逼真的多语言 AI 语音合成，具有微妙的情感表达和音调控制。",
                features: ["29+ 种语言", "行业领先的自然度", "API 集成"],
                rating: 4.8,
                price: "免费版可用"
            },
            {
                name: "Murf.ai",
                url: "https://murf.ai/",
                description: "专业的 AI 语音合成平台，提供多种声音和情感选项。",
                features: ["120+ 种声音", "情感控制", "团队协作"],
                rating: 4.6,
                price: "免费版可用"
            }
        ],
        'Speech to Text': [
            {
                name: "Whisper",
                url: "https://openai.com/research/whisper",
                description: "OpenAI 开发的高精度语音识别系统，支持多种语言。",
                features: ["多语言支持", "高准确率", "开源"],
                rating: 4.7,
                price: "免费"
            },
            {
                name: "Azure Speech Services",
                url: "https://azure.microsoft.com/zh-cn/products/cognitive-services/speech-services/",
                description: "微软提供的企业级语音识别服务。",
                features: ["实时转写", "自定义模型", "多语言支持"],
                rating: 4.5,
                price: "按使用量计费"
            }
        ],
        'Audio Editing': [
            {
                name: "Descript",
                url: "https://www.descript.com/",
                description: "革命性的音频编辑工具，支持文本编辑音频。",
                features: ["文本编辑音频", "自动转录", "多轨道编辑"],
                rating: 4.6,
                price: "免费版可用"
            },
            {
                name: "Adobe Audition",
                url: "https://www.adobe.com/products/audition.html",
                description: "专业的音频编辑软件，提供全面的编辑工具。",
                features: ["专业级编辑", "降噪", "音频修复"],
                rating: 4.8,
                price: "订阅制"
            }
        ],
        'Music Generation': [
            {
                name: "Mubert",
                url: "https://mubert.com/",
                description: "AI 驱动的音乐生成平台，可创建各种风格的音乐。",
                features: ["多种音乐风格", "实时生成", "API 支持"],
                rating: 4.4,
                price: "免费版可用"
            },
            {
                name: "Soundraw",
                url: "https://soundraw.io/",
                description: "智能音乐生成工具，适合视频创作者。",
                features: ["自定义长度", "情绪选择", "无版权音乐"],
                rating: 4.5,
                price: "订阅制"
            }
        ],
        'Voice Cloning': [
            {
                name: "Coqui",
                url: "https://coqui.ai/",
                description: "开源的声音克隆技术，支持多种语言。",
                features: ["开源", "多语言支持", "高质量克隆"],
                rating: 4.3,
                price: "免费"
            },
            {
                name: "Resemble AI",
                url: "https://www.resemble.ai/",
                description: "专业的声音克隆平台，提供 API 集成。",
                features: ["快速克隆", "API 集成", "情感控制"],
                rating: 4.6,
                price: "按使用量计费"
            }
        ]
    };

    // 获取当前分类的工具
    const tools = toolsData[categoryName] || [];
    console.log(`找到 ${tools.length} 个工具`);
    console.log('工具数据:', tools);

    // 渲染分类页面
    res.render('category', {
        title: `${categoryChineseName}工具 | RecallLook`,
        description: `探索最佳${categoryChineseName}工具和服务`,
        categoryName: categoryChineseName,
        tools: tools
    });
});

// 404处理
app.use((req, res) => {
    console.log('404 error for URL:', req.url);
    res.status(404).render('404', { 
        title: '404 - Page Not Found'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Please visit: http://localhost:${port}`);
}); 
