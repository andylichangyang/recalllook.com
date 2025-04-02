# RecallLook - AI语音工具导航

RecallLook是一个专注于AI语音工具导航的网站，帮助用户发现和选择最适合他们需求的AI语音工具。

## 功能特点

- 精选AI语音工具展示
- 按类别浏览工具
- 工具搜索和筛选
- 用户评价和评分
- 详细的使用指南
- 多语言支持

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome 图标
- 模块化JavaScript

## 项目结构

```
recalllook/
├── css/
│   ├── style.css
│   └── components/
│       ├── header.css
│       └── footer.css
├── js/
│   ├── utils/
│   │   ├── ToolManager.js
│   │   └── tools.js
│   └── components/
│       └── ToolCard.js
├── images/
├── index.html
├── tools.html
├── about.html
├── contact.html
└── README.md
```

## 安装和运行

1. 克隆项目到本地:
```bash
git clone https://github.com/yourusername/recalllook.git
```

2. 进入项目目录:
```bash
cd recalllook
```

3. 使用本地服务器运行项目:
```bash
python -m http.server 8000
```

4. 在浏览器中访问:
```
http://localhost:8000
```

## 开发指南

### 添加新工具

在 `js/utils/tools.js` 文件中添加新的工具数据:

```javascript
{
    name: "工具名称",
    url: "工具网址",
    description: "工具描述",
    features: ["功能1", "功能2", "功能3"],
    category: "工具类别",
    rating: 4.5,
    price: "价格类型",
    dateAdded: "2024-01-01"
}
```

### 修改样式

- 全局样式在 `css/style.css` 中修改
- 组件样式在 `css/components/` 目录下相应的文件中修改

### 添加新功能

1. 在 `js/utils/` 目录下创建新的工具类
2. 在 `js/components/` 目录下创建新的组件
3. 在相应的HTML文件中引入新的JavaScript文件

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系方式

- 邮箱: contact@recalllook.com
- 微信: RecallLook 
