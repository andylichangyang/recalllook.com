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

// 静态文件服务
app.use(express.static(path.join(__dirname)));

// 中间件：添加当前路径到所有视图
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// 路由
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home - RecallLook',
        layout: 'base'
    });
});

app.get('/tools', (req, res) => {
    res.render('tools', { 
        title: 'All Tools - RecallLook',
        layout: 'base'
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About - RecallLook',
        layout: 'base'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', { 
        title: 'Contact - RecallLook',
        layout: 'base'
    });
});

// 404处理
app.use((req, res) => {
    res.status(404).render('404', { 
        title: '404 - Page Not Found',
        layout: 'base'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
