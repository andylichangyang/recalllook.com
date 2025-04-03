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
    console.log('Rendering tools page');
    res.render('tools', { 
        title: 'All Tools - RecallLook'
    });
});

// 分类路由
app.get('/tools/category/:category', (req, res) => {
    console.log('Rendering category page:', req.params.category);
    const category = req.params.category;
    const categoryMap = {
        'text-to-speech': 'Text to Speech',
        'speech-to-text': 'Speech to Text',
        'audio-editing': 'Audio Editing',
        'music-generation': 'Music Generation',
        'voice-cloning': 'Voice Cloning'
    };
    
    const categoryName = categoryMap[category];
    
    if (!categoryName) {
        console.log('Category not found:', category);
        return res.status(404).render('404', { 
            title: '404 - Category Not Found'
        });
    }

    res.render('category', { 
        title: `${categoryName} Tools - RecallLook`,
        categoryName: categoryName
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
