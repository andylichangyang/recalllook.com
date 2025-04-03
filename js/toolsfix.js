// 当 DOM 加载完成时执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('工具页面脚本已加载');
    
    // 确保全局数据存在
    if (!window.toolsDataByName) {
        console.error('工具数据未加载，尝试重新加载');
        
        // 尝试重新加载数据
        try {
            const dataScript = document.createElement('script');
            dataScript.src = '/js/dataFix.js';
            dataScript.onload = function() {
                console.log('数据已重新加载，初始化工具');
                initTools();
            };
            document.body.appendChild(dataScript);
        } catch (e) {
            console.error('无法加载工具数据:', e);
        }
        return;
    }
    
    initTools();
    
    // 初始化工具函数
    function initTools() {
        if (!window.toolsDataByName) {
            console.error('工具数据仍未加载，无法继续');
            return;
        }
        
        console.log('可用分类:', Object.keys(window.toolsDataByName));
        
        // 获取 DOM 元素
        const categoryTabs = document.querySelectorAll('.category-tab');
        const allToolsContainer = document.getElementById('allTools');
        
        console.log('找到分类标签:', categoryTabs.length);
        
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
                console.log(`找到 ${tools.length} 个工具`);
                
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
            
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('点击分类:', category);
                
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
                    currentCategoryTab.click();
                } else {
                    categoryTabs[0].click();
                }
            } else {
                categoryTabs[0].click();
            }
        }
    }
}); 
