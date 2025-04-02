const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 设置正确的MIME类型
app.use((req, res, next) => {
    if (req.url.endsWith('.js')) {
        res.type('application/javascript');
    }
    next();
});

// 提供静态文件
app.use(express.static(__dirname));

// 启动服务器
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 
