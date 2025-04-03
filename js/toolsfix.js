console.log('工具页面脚本已加载');

// 初始化工具显示
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 已加载，准备初始化工具');
    initTools();
});

function initTools() {
    // 检查数据是否存在
    if (!window.toolsDataByName) {
        console.error('工具数据未找到');
        return;
    }
    
    console.log('工具数据已加载，可用分类:', Object.keys(window.toolsDataByName));
    
    // 设置分类点击事件
    const categoryButtons = document.querySelectorAll('.category-button');
    console.log('找到分类按钮:', categoryButtons.length);
    
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                console.log('点击了分类:', category);
                
                // 移除所有活跃状态
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // 添加活跃状态到当前按钮
                this.classList.add('active');
                
                // 显示相应分类的工具
                displayToolsByCategory(category);
            });
        });
        
        // 默认选中第一个分类按钮并显示其工具
        console.log('默认选中第一个分类按钮');
        categoryButtons[0].classList.add('active');
        const firstCategory = categoryButtons[0].getAttribute('data-category');
        displayToolsByCategory(firstCategory);
    }
}

function displayToolsByCategory(category) {
    console.log('显示分类的工具:', category);
    const toolsGrid = document.querySelector('.tools-grid');
    
    if (!toolsGrid) {
        console.error('未找到工具网格容器');
        return;
    }
    
    // 清空当前工具
    toolsGrid.innerHTML = '';
    
    // 获取该分类的工具
    const tools = window.toolsDataByName[category];
    
    if (!tools || tools.length === 0) {
        console.log('该分类没有工具:', category);
        toolsGrid.innerHTML = '<p>该分类暂无工具</p>';
        return;
    }
    
    console.log(`找到 ${tools.length} 个工具属于分类 "${category}"`);
    
    // 渲染工具卡片
    tools.forEach(tool => {
        const toolCard = createToolCard(tool);
        toolsGrid.appendChild(toolCard);
    });
}

function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    
    // 创建特性标签 HTML
    let featuresHtml = '';
    if (tool.features && tool.features.length > 0) {
        featuresHtml = tool.features.map(feature => 
            `<span class="feature-tag">${feature}</span>`
        ).join('');
    }
    
    card.innerHTML = `
        <h3>${tool.name}</h3>
        <div class="tool-rating">★ ${tool.rating}</div>
        <p>${tool.description}</p>
        <div class="tool-features">${featuresHtml}</div>
        <div class="tool-meta">
            <span class="tool-category">${tool.category || ''}</span>
            <span class="tool-price">${tool.price || '免费'}</span>
        </div>
        <a href="${tool.url}" target="_blank" class="tool-link">访问网站</a>
    `;
    
    return card;
} 
