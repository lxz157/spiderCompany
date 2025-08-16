<template>
  <div class="project-container">
    <header class="start-header">
      <div class="starfield"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="header-content">
        <h1>八目蛛产品矩阵</h1>
        <p class="subtitle">创新科技 · 卓越体验 · 八大核心产品</p>
      </div>
    </header>

    <nav class="navigation">
      <router-link to="/spider/company" class="nav-button">公司介绍</router-link>
      <router-link to="/spider/owner" class="nav-button">核心团队</router-link>
      <router-link to="/spider/technology" class="nav-button">前沿技术</router-link>
      <router-link to="/spider/innovation" class="nav-button">创新理念</router-link>
      <router-link to="/spider/project" class="nav-button">产品矩阵</router-link>
      <router-link to="/spider/latest" class="nav-button">最新产品</router-link>
      <router-link to="/spider/careers" class="nav-button">在聘岗位</router-link>
      <router-link to="/" class="nav-button secondary">返回首页</router-link>
    </nav>
    <div class="projects-intro">
      <h2>我们的产品体系</h2>
      <p>八目蛛网络有限公司致力于打造全方位的互联网产品矩阵，涵盖智能导航、语音交互、安全防护、企业平台、数据分析和区块链技术六大核心领域，为企业和个人用户提供全方位的数字化解决方案。</p>
    </div>

    <div class="product-grid">
      <div class="product-card featured">
        <div class="product-header">
          <div class="product-icon" style="background-color: #00dbde;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L20 9v6l-8 4-8-4V9l8-4.2z" />
            </svg>
          </div>
          <div class="product-badge">旗舰产品</div>
        </div>
        <h2>
          <router-link to="/spider/navigation">八目导航</router-link>
        </h2>
        <p class="product-tech">Vue3 · Spring Boot3 · 智能推荐系统</p>
        <p class="product-desc">智能导航平台，基于用户行为分析的个性化推荐系统，提供精准的网站导航服务。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>AI驱动的智能推荐算法</li>
            <li><span class="feature-icon"></span>多维度网站评价体系</li>
            <li><span class="feature-icon"></span>个性化定制界面</li>
            <li><span class="feature-icon"></span>实时热门网站追踪</li>
          </ul>
        </div>
        <div class="product-stats">
          <div class="stat">
            <div class="stat-value">800万+</div>
            <div class="stat-label">活跃用户</div>
          </div>
          <div class="stat">
            <div class="stat-value">98.7%</div>
            <div class="stat-label">用户满意度</div>
          </div>
          <div class="stat">
            <div class="stat-value">3.0</div>
            <div class="stat-label">最新版本</div>
          </div>
        </div>
      </div>

      <div class="product-card">
        <div class="product-header">
          <div class="product-icon" style="background-color: #fc00ff;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z" />
            </svg>
          </div>
        </div>
        <h2>小昭语音助手</h2>
        <p class="product-tech">Vue3 · Spring Boot3 · 自然语言处理</p>
        <p class="product-desc">通用语音交互平台，支持多场景智能对话，提供自然流畅的人机交互体验。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>多语言多方言支持</li>
            <li><span class="feature-icon"></span>上下文感知对话</li>
            <li><span class="feature-icon"></span>智能家居控制</li>
            <li><span class="feature-icon"></span>个性化声音定制</li>
          </ul>
        </div>
        <router-link to="/spider/robot" class="product-cta-link">
          <div class="product-cta">
            <button>了解更多</button>
          </div>
        </router-link>
      </div>

      <div class="product-card">
        <div class="product-header">
          <div class="product-icon" style="background-color: #4e54c8;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
          </div>
        </div>
        <h2>蛛网安全卫士</h2>
        <p class="product-tech">Vue2 · Spring Boot3 · 安全防护</p>
        <p class="product-desc">企业级网络安全解决方案，提供全方位的网络威胁防护和数据安全保障。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>实时威胁检测</li>
            <li><span class="feature-icon"></span>智能行为分析</li>
            <li><span class="feature-icon"></span>数据加密传输</li>
            <li><span class="feature-icon"></span>分布式防御系统</li>
          </ul>
        </div>
        <router-link to="/spider/robot" class="product-cta-link">
          <div class="product-cta">
            <button>了解更多</button>
          </div>
        </router-link>
      </div>

      <div class="product-card">
        <div class="product-header">
          <div class="product-icon" style="background-color: #8f00ff;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
              <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
            </svg>
          </div>
        </div>
        <h2>云蛛企业平台</h2>
        <p class="product-tech">Vue3 · Spring Boot3 · 微服务架构</p>
        <p class="product-desc">一站式企业数字化管理平台，整合OA、CRM、ERP等系统，打造企业数字化中枢。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>模块化设计</li>
            <li><span class="feature-icon"></span>多终端同步</li>
            <li><span class="feature-icon"></span>智能数据分析</li>
            <li><span class="feature-icon"></span>定制化工作流</li>
          </ul>
        </div>
        <router-link to="/spider/robot" class="product-cta-link">
          <div class="product-cta">
            <button>了解更多</button>
          </div>
        </router-link>
      </div>

      <div class="product-card">
        <div class="product-header">
          <div class="product-icon" style="background-color: #00b4db;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
            </svg>
          </div>
        </div>
        <h2>数据蛛分析</h2>
        <p class="product-tech">Vue3 · Spring Boot3 · 大数据分析</p>
        <p class="product-desc">商业智能分析工具，帮助企业从海量数据中提取有价值的信息和洞察，驱动数据决策。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>可视化数据分析</li>
            <li><span class="feature-icon"></span>预测性建模</li>
            <li><span class="feature-icon"></span>实时数据流处理</li>
            <li><span class="feature-icon"></span>多数据源整合</li>
          </ul>
        </div>
        <router-link to="/spider/robot" class="product-cta-link">
          <div class="product-cta">
            <button>了解更多</button>
          </div>
        </router-link>
      </div>

      <div class="product-card">
        <div class="product-header">
          <div class="product-icon" style="background-color: #ff0084;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-2.5 14h-2v-4l-1 .75L12 13V9.5h4.5v7.5zm-9.5-4.5V16H5v-4.5h2V14zm0-5.5V5H5v3h2zm4.5 0V5h-3v3h3zm4.5 0V5h-3v3h3z" />
            </svg>
          </div>
        </div>
        <h2>蛛链区块链</h2>
        <p class="product-tech">Vue2 · Spring Boot3 · 区块链技术</p>
        <p class="product-desc">企业级区块链解决方案，提供安全、高效的分布式账本技术平台。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>高性能共识机制</li>
            <li><span class="feature-icon"></span>智能合约开发框架</li>
            <li><span class="feature-icon"></span>跨链互操作性</li>
            <li><span class="feature-icon"></span>隐私保护技术</li>
          </ul>
        </div>
        <router-link to="/spider/robot" class="product-cta-link">
          <div class="product-cta">
            <button>了解更多</button>
          </div>
        </router-link>
      </div>

      <div class="product-card">
        <div class="product-header">
          <div class="product-icon" style="background-color: #11998e;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
            </svg>
          </div>
        </div>
        <h2>蛛算云服务</h2>
        <p class="product-tech">Vue3 · Spring Boot3 · 云计算</p>
        <p class="product-desc">高性能云计算平台，提供弹性计算、存储和网络服务，助力企业快速上云。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>弹性伸缩计算资源</li>
            <li><span class="feature-icon"></span>分布式存储系统</li>
            <li><span class="feature-icon"></span>全球CDN加速</li>
            <li><span class="feature-icon"></span>99.99% SLA保障</li>
          </ul>
        </div>
        <router-link to="/spider/robot" class="product-cta-link">
          <div class="product-cta">
            <button>了解更多</button>
          </div>
        </router-link>
      </div>

      <!-- New Project 2 -->
      <div class="product-card">
        <div class="product-header">
          <div class="product-icon" style="background-color: #f46b45;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
            </svg>
          </div>
        </div>
        <h2>蛛眼物联网</h2>
        <p class="product-tech">Vue3 · Spring Boot3 · IoT技术</p>
        <p class="product-desc">智能物联网平台，连接万物实现设备智能化管理，打造智慧城市与智能家居解决方案。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>多协议设备接入</li>
            <li><span class="feature-icon"></span>边缘计算能力</li>
            <li><span class="feature-icon"></span>实时数据可视化</li>
            <li><span class="feature-icon"></span>AIoT智能联动</li>
          </ul>
        </div>
        <router-link to="/spider/robot" class="product-cta-link">
          <div class="product-cta">
            <button>了解更多</button>
          </div>
        </router-link>
      </div>

    </div>

    <div class="tech-stack">
      <h2>核心技术栈</h2>
      <div class="tech-tags">
        <span class="tech-tag">Vue 2</span>
        <span class="tech-tag">Vue 3</span>
        <span class="tech-tag">Spring Boot 3</span>
        <span class="tech-tag">HTML</span>
        <span class="tech-tag">CSS</span>
        <span class="tech-tag">JavaScript</span>
        <span class="tech-tag">TypeScript</span>
        <span class="tech-tag">微服务</span>
        <span class="tech-tag">大数据</span>
        <span class="tech-tag">区块链</span>
        <span class="tech-tag">人工智能</span>
      </div>
    </div>

    <footer class="project-footer">
      <div class="footer-content">
        <p>© 2030 八目蛛网络有限公司 版权所有(本页面纯属虚构)</p>
        <p>创新科技 · 引领未来 · 智启新元</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
a {
  color: #0f0c29;
  text-decoration: none;
}

.project-container {
  max-width: 100vw;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "楷体", 'Arial', sans-serif;
  color: #333;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

/* 4.23 */
.start-header {
  position: relative;
  min-height: 300px;
  /* 增加高度容纳斜向轨迹 */
  padding: 100px 20px;
  background:
    linear-gradient(135deg, #0f0c29 0%, #24243e 100%);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* 星空背景优化 */
.starfield {
  position: absolute;
  inset: 0;
  background:
    /* 高密度星空 */
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Cg fill='white'%3E%3Ccircle cx='183' cy='76' r='0.8' opacity='0.8'/%3E%3Ccircle cx='421' cy='125' r='0.6' opacity='0.6'/%3E%3Ccircle cx='59' cy='283' r='1' opacity='0.9'/%3E%3Ccircle cx='378' cy='342' r='0.5' opacity='0.7'/%3E%3C/g%3E%3C/svg%3E"),
    /* 优化后的星云效果 */
    radial-gradient(ellipse at 20% 30%,
      rgba(0, 218, 222, 0.549) 0%,
      rgba(0, 218, 222, 0.15) 20%,
      transparent 50%),
    radial-gradient(ellipse at 70% 50%,
      rgba(251, 0, 255, 0.759) 0%,
      rgba(251, 0, 255, 0.1) 30%,
      transparent 60%),
    radial-gradient(ellipse at 40% 80%,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 30%);
  background-size:
    600px 600px,
    /* 星星图案大小 */
    200% 200%,
    /* 第一层星云 */
    250% 250%,
    /* 第二层星云 */
    300% 300%;
  /* 第三层星云 */
  animation:
    starMove 5s linear infinite,
    nebulaPulse 10s ease-in-out infinite alternate;
  opacity: 0.8;
  mix-blend-mode: screen;
  /* 使星云更好地融合 */
}


/* 流星系统 */
.meteor {
  rotate: 50deg;
  position: absolute;
  height: 5px;
  animation: meteorFall 6s linear infinite;
}

@keyframes nebulaPulse {

  0%,
  100% {
    background-position:
      0 0,
      10% 10%,
      15% 15%,
      20% 20%;
  }

  50% {
    background-position:
      0 0,
      20% 30%,
      25% 25%,
      30% 40%;
  }
}

/* 关键帧动画 */
@keyframes starMove {
  from {
    background-position:
      0 0,
      10% 10%,
      15% 15%,
      20% 20%;
  }

  to {
    background-position:
      300px 300px,
      /* 与background-size一致 */
      20% 30%,
      25% 25%,
      30% 40%;
  }
}

/* 差异化流星 */
.meteor:nth-child(1) {
  left: 10%;
  animation-delay: 1s;
  background: linear-gradient(to right,
      transparent,
      rgba(0, 219, 222, 0.8),
      white);
  filter:
    drop-shadow(0 0 2px rgba(0, 219, 222, 0.8)) drop-shadow(0 0 5px white);
}

.meteor:nth-child(2) {
  left: 20%;
  animation-delay: 2s;
  background: linear-gradient(to right,
      transparent,
      rgba(252, 0, 255, 0.8),
      white);
  filter:
    drop-shadow(0 0 2px rgba(252, 0, 255, 0.8)) drop-shadow(0 0 5px white);
}

.meteor:nth-child(3) {
  left: 30%;
  animation-delay: 3s;
  background: linear-gradient(to right,
      transparent,
      rgba(0, 219, 222, 0.8),
      white);
  filter:
    drop-shadow(0 0 2px rgba(0, 219, 222, 0.8)) drop-shadow(0 0 5px white);
}

.meteor:nth-child(4) {
  left: 40%;
  animation-delay: 4s;
  background: linear-gradient(to right,
      transparent,
      rgba(252, 0, 255, 0.8),
      white);
  filter:
    drop-shadow(0 0 2px rgba(252, 0, 255, 0.8)) drop-shadow(0 0 5px white);
}

.meteor:nth-child(5) {
  left: 60%;
  animation-delay: 5s;
  background: linear-gradient(to right,
      transparent,
      rgba(0, 219, 222, 0.8),
      white);
  filter:
    drop-shadow(0 0 2px rgba(0, 219, 222, 0.8)) drop-shadow(0 0 5px white);
}

.meteor:nth-child(6) {
  left: 70%;
  animation-delay: 6s;
  background: linear-gradient(to right,
      transparent,
      rgba(252, 0, 255, 0.8),
      white);
  filter:
    drop-shadow(0 0 2px rgba(252, 0, 255, 0.8)) drop-shadow(0 0 5px white);
}

.meteor:nth-child(7) {
  left: 80%;
  animation-delay: 7s;
  background: linear-gradient(to right,
      transparent,
      rgba(0, 219, 222, 0.8),
      white);
  filter:
    drop-shadow(0 0 2px rgba(0, 219, 222, 0.8)) drop-shadow(0 0 5px white);
}

.meteor:nth-child(8) {
  left: 90%;
  animation-delay: 8s;
  background: linear-gradient(to right,
      transparent,
      rgba(252, 0, 255, 0.8),
      white);
  filter:
    drop-shadow(0 0 2px rgba(252, 0, 255, 0.8)) drop-shadow(0 0 5px white);
}

/* 关键帧动画 */
@keyframes starMove {
  to {
    background-position: 600px 600px;
  }
}

@keyframes meteorFall {
  0% {
    transform: translateX(-200px) translateY(0px) rotate(-30deg);
    opacity: 0;
    width: 50px;
  }

  10% {
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    transform: translateX(600px) translateY(10px) rotate(0deg);
    opacity: 0;
    width: 250px;
  }
}

/* 内容层 */
.header-content {
  position: relative;
  z-index: 3;
  color: white;
  max-width: 800px;
  padding: 40px;
}

.header-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.start-header h1 {
  font-size: 3.5rem;
  margin-bottom: 15px;
  font-weight: 700;
  letter-spacing: 10px;
}

.subtitle {
  font-size: 1.2rem;
  font-weight: bold;
  opacity: 0.9;
  letter-spacing: 0.5px;
}

.navigation {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-button {
  padding: 12px 25px;
  background: #1a1a2e;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
  border: none;
}

.nav-button:hover {
  background: #302b63;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.nav-button.secondary {
  background: transparent;
  color: #1a1a2e;
  border: 2px solid #1a1a2e;
}

.nav-button.secondary:hover {
  background: rgba(26, 26, 46, 0.1);
}

.projects-intro {
  max-width: 800px;
  margin: 50px auto 30px;
  text-align: center;
  padding: 0 20px;
}

.projects-intro h2 {
  font-size: 2.2rem;
  color: #1a1a2e;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.projects-intro h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
}

.projects-intro p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 60px;
  padding: 0 20px;
}

.product-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 700px;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.product-card.featured {
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "header header"
    "title title"
    "tech tech"
    "desc desc"
    "features stats";
  column-gap: 30px;
  background: linear-gradient(to right, #fff, #f9f9ff);
  border-left: 5px solid #00dbde;
}

.product-card.featured:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.product-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  grid-area: header;
}

.product-badge {
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.product-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.product-icon svg {
  width: 30px;
  height: 30px;
}

.product-card h2 {
  font-size: 1.8rem;
  color: #1a1a2e;
  margin-bottom: 10px;
  grid-area: title;
}

.product-tech {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
  font-style: italic;
  grid-area: tech;
}

.product-desc {
  margin-bottom: 20px;
  line-height: 1.6;
  color: #555;
  grid-area: desc;
}

.product-features {
  margin-top: 10px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  grid-area: features;
}

.product-features h3 {
  font-size: 1.2rem;
  color: #1a1a2e;
  margin-bottom: 15px;
}

.product-features ul {
  padding-left: 0;
  list-style-type: none;
}

.product-features li {
  margin-bottom: 10px;
  color: #555;
  display: flex;
  align-items: center;
}

.feature-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300dbde"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  background-size: contain;
  margin-right: 10px;
  flex-shrink: 0;
}

.product-stats {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  grid-area: stats;
  margin-top: 20px;
}

.stat {
  text-align: center;
  background: rgba(0, 219, 222, 0.05);
  padding: 15px 10px;
  border-radius: 10px;
  transition: all 0.3s;
}

.stat:hover {
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 100%);
  transform: translateY(-5px);
  color: white;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stat:hover .stat-value {
  color: white;
  -webkit-text-fill-color: white;
  background: none;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

.product-cta {
  margin-top: auto;
  padding-top: 20px;
  z-index: 1;
}

.product-cta button {
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 10px 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
}

.product-cta button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 219, 222, 0.3);
}

.tech-stack {
  background: white;
  padding: 60px 20px;
  text-align: center;
  margin-top: 20px;
  width: 100%;
}

.tech-stack h2 {
  font-size: 2rem;
  color: #1a1a2e;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
}

.tech-stack h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  max-width: 1000px;
  margin: 0 auto;
}

.tech-tag {
  background: #f0f0f0;
  color: #1a1a2e;
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 1rem;
  transition: all 0.3s;
}

.tech-tag:hover {
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.project-footer {
  background: #1a1a2e;
  color: white;
  padding: 30px 20px;
  text-align: center;
  margin-top: auto;
  width: 100%;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content p {
  margin: 5px 0;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .start-header h1 {
    font-size: 2rem;
  }

  .navigation {
    display: list-item;
    position: absolute;
    flex-direction: row;
    text-align: center;
    font-size: larger;
    padding: 25px 20px;
    transform: translateY(-90%);
    height: 30vh;
    width: 100%;
    border-radius: 0 0 25% 25%;
    /* 添加过渡效果到默认状态 */
    transition: transform 1.5s ease-in-out;
    /* 减慢消失时间到1.5秒 */
    overflow: auto
  }

  .navigation:hover {
    transform: translateY(0%);
    /* hover时的过渡时间可以保持或单独设置 */
    transition-duration: 1.0s;
    /* 如果需要，可以保持hover出现时间为1秒 */
  }

  .nav-button {
    width: 150px;
    display: inline-block;
    margin: 2px;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .product-card.featured {
    grid-column: span 1;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "title"
      "tech"
      "desc"
      "features"
      "stats";
  }

  .product-stats {
    grid-template-columns: 1fr;
  }
}
</style>