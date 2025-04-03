document.addEventListener('DOMContentLoaded', function() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const allToolsContainer = document.getElementById('allTools');

    // 初始化分类标签点击事件
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const category = tab.dataset.category;
            console.log('Category tab clicked:', category);
            
            // 移除所有标签的 active 类
            categoryTabs.forEach(t => t.classList.remove('active'));
            // 添加 active 类到当前标签
            tab.classList.add('active');
            
            // 获取当前分类的工具
            const categoryTools = window.toolsData[category];
            console.log('Tools for category:', categoryTools);
            
            if (categoryTools && Array.isArray(categoryTools)) {
                // 清空容器
                allToolsContainer.innerHTML = '';
                
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
            } else {
                console.error('No tools found for category:', category);
                allToolsContainer.innerHTML = '<p class="no-tools">No tools found for this category.</p>';
            }
        });
    });

    // 默认显示第一个分类
    if (categoryTabs.length > 0) {
        categoryTabs[0].click();
    }
}); 
