class PerformanceManager {
  constructor() {
    this.metrics = {
      pageLoadTime: 0,
      resourceLoadTime: 0,
      firstContentfulPaint: 0,
      domInteractive: 0,
      domComplete: 0
    };
    this.init();
  }

  init() {
    // 监听页面加载性能指标
    window.addEventListener('load', () => {
      this.calculatePageLoadMetrics();
      this.optimizeImages();
      this.setupLazyLoading();
    });

    // 监听资源加载
    this.setupResourceTiming();
  }

  calculatePageLoadMetrics() {
    const timing = window.performance.timing;
    
    this.metrics = {
      pageLoadTime: timing.loadEventEnd - timing.navigationStart,
      resourceLoadTime: timing.loadEventEnd - timing.domContentLoadedEventEnd,
      firstContentfulPaint: this.getFirstContentfulPaint(),
      domInteractive: timing.domInteractive - timing.navigationStart,
      domComplete: timing.domComplete - timing.navigationStart
    };

    // 发送性能指标到服务器
    this.sendMetricsToServer();
  }

  getFirstContentfulPaint() {
    const paint = performance.getEntriesByType('paint');
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
    return fcp ? fcp.startTime : 0;
  }

  setupResourceTiming() {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(entry => {
        if (entry.initiatorType === 'img') {
          this.optimizeImageLoading(entry);
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
  }

  optimizeImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      if (this.isInViewport(img)) {
        this.loadImage(img);
      }
    });
  }

  setupLazyLoading() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          this.loadImage(img);
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      observer.observe(img);
    });
  }

  loadImage(img) {
    const src = img.getAttribute('data-src');
    if (src) {
      img.src = src;
      img.removeAttribute('data-src');
    }
  }

  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  optimizeImageLoading(entry) {
    // 如果图片加载时间过长,可以添加加载提示
    if (entry.duration > 1000) {
      const img = document.querySelector(`img[src="${entry.name}"]`);
      if (img) {
        img.classList.add('loading');
      }
    }
  }

  sendMetricsToServer() {
    // 这里添加发送性能指标到服务器的代码
    console.log('Performance metrics:', this.metrics);
  }

  // 预加载关键资源
  preloadResources() {
    const resources = [
      '/css/style.css',
      '/js/main.js',
      '/assets/images/logo.png'
    ];

    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = this.getResourceType(resource);
      document.head.appendChild(link);
    });
  }

  getResourceType(url) {
    if (url.endsWith('.css')) return 'style';
    if (url.endsWith('.js')) return 'script';
    if (url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.gif')) return 'image';
    return 'fetch';
  }
}
