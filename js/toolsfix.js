// 当 DOM 加载完成时执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('ToolsFix 脚本已加载');
    
    // 确保全局数据存在
    if (!window.toolsDataByName) {
        console.error('工具数据未加载！');
        return;
    }
    
    console.log('可用分类:', Object.keys(window.toolsDataByName));
    
    // 获取 DOM 元素
    const categoryTabs = document.querySelectorAll('.category-tab');
    const allToolsContainer = document.getElementById('allTools');
    
    console.log('找到分类标签:', categoryTabs.length);
    console.log('找到工具容器:', allToolsContainer ? '是' : '否');
    
    if (!allToolsContainer) {
        console.error('工具容器未找到！');
        return;
    }
    
    // 工具卡片渲染函数
    function renderTool(tool) {
        return `
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
    }
    
    // 显示指定分类的工具
    function showCategoryTools(category) {
        console.log('显示分类工具:', category);
        
        // 获取工具数据
        const tools = window.toolsDataByName[category];
        
        // 清空容器
        allToolsContainer.innerHTML = '';
        
        if (tools && Array.isArray(tools) && tools.length > 0) {
            console.log('找到工具:', tools.length);
            
            // 生成HTML
            const toolsHTML = tools.map(renderTool).join('');
            
            // 插入HTML
            allToolsContainer.innerHTML = toolsHTML;
        } else {
            console.error('未找到分类工具:', category);
            allToolsContainer.innerHTML = `<p class="no-tools">未找到 "${category}" 分类的工具</p>`;
        }
    }
    
    // 为每个分类标签添加点击事件
    categoryTabs.forEach(tab => {
        const category = tab.dataset.category;
        console.log('设置分类标签:', category);
        
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 更新活动状态
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // 显示该分类的工具
            showCategoryTools(category);
        });
    });
    
    // 默认显示第一个分类
    if (categoryTabs.length > 0) {
        // 检查是否是分类页面
        if (window.currentCategory) {
            console.log('当前分类页面:', window.currentCategory);
            
            // 找到对应的分类标签
            const currentCategoryTab = Array.from(categoryTabs).find(tab => 
                tab.dataset.category === window.currentCategory
            );
            
            if (currentCategoryTab) {
                console.log('找到当前分类标签');
                currentCategoryTab.click();
            } else {
                console.warn('未找到当前分类标签，使用第一个标签');
                categoryTabs[0].click();
            }
        } else {
            console.log('非分类页面，使用第一个标签');
            categoryTabs[0].click();
        }
    }
}); 
