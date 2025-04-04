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
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.set("layout extractMetas", true);

// 静态文件服务
app.use(express.static(path.join(__dirname)));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));

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
    
    if (!categoryName) {
        console.log('未找到分类:', categoryKey);
        return res.status(404).render('404', { 
            title: '404 - 分类未找到'
        });
    }
    
    // 加载工具数据
    try {
        const toolsData = require('./js/utils/tools');
        const tools = toolsData.filter(tool => tool.category === categoryName);
        
        if (!tools || tools.length === 0) {
            // 如果没有通过工具数据找到工具，使用硬编码数据
            const hardcodedData = {
                "Text to Speech": [
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
                "Speech to Text": [
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
                "Audio Editing": [
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
                "Music Generation": [
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
                "Voice Cloning": [
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
            
            // 使用硬编码数据
            console.log('使用硬编码数据显示分类:', categoryName);
            const categoryTools = hardcodedData[categoryName] || [];
            
            // 渲染页面
            res.render('category', {
                title: `${categoryChineseName} 工具 | RecallLook`,
                description: `探索最佳${categoryChineseName}工具和服务`,
                tools: categoryTools,
                categoryName: categoryChineseName,
                categoryKey: categoryKey,
                page: 'tools'
            });
            
        } else {
            // 使用从tools.js导入的数据
            console.log(`找到 ${tools.length} 个 "${categoryName}" 类工具`);
            res.render('category', {
                title: `${categoryChineseName} 工具 | RecallLook`,
                description: `探索最佳${categoryChineseName}工具和服务`,
                tools: tools,
                categoryName: categoryChineseName,
                categoryKey: categoryKey,
                page: 'tools'
            });
        }
    } catch (error) {
        console.error('加载工具数据失败:', error);
        
        // 使用硬编码的工具数据作为备份
        console.log('使用备用数据');
        const defaultTools = [
            {
                name: "示例工具",
                url: "#",
                description: "这是一个示例工具描述。",
                features: ["示例特性1", "示例特性2"],
                category: "文本转语音",
                rating: 4.0,
                price: "免费"
            }
        ];
        
        res.render('category', {
            title: `${categoryChineseName} 工具 | RecallLook`,
            description: `探索最佳${categoryChineseName}工具和服务`,
            tools: defaultTools,
            categoryName: categoryChineseName,
            categoryKey: categoryKey,
            page: 'tools'
        });
    }
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
