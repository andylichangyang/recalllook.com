document.addEventListener('DOMContentLoaded', function() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const allToolsContainer = document.getElementById('allTools');

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault(); // 阻止默认的链接行为
            
            const category = tab.dataset.category;
            const categoryKey = category.toLowerCase().replace(/\s+/g, '');
            console.log('Category clicked:', category, 'Category key:', categoryKey);
            console.log('Available tools data:', window.toolsData);
            
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Clear container
            allToolsContainer.innerHTML = '';
            
            // Render tools for selected category
            const categoryTools = window.toolsData[categoryKey];
            console.log('Tools for category:', categoryTools);
            
            if (categoryTools && Array.isArray(categoryTools)) {
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
                console.error('No tools found for category:', categoryKey);
                allToolsContainer.innerHTML = '<p class="no-tools">No tools found for this category.</p>';
            }
        });
    });
}); 
