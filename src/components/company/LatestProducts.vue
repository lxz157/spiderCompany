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
        <h1>八目蛛最新产品</h1>
        <p class="subtitle">前沿科技 · 创新体验 · 八大新品发布</p>
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
      <h2>我们的最新产品</h2>
      <p>八目蛛网络有限公司持续创新，推出八大最新产品，涵盖音乐娱乐、智能教育、健康科技等前沿领域，为用户带来前所未有的数字化体验。</p>
    </div>

    <div class="product-grid">
      <div class="product-card featured">
        <div class="product-header">
          <div class="product-icon" style="background-color: #ff4d4d;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
          <div class="product-badge">旗舰新品</div>
        </div>
        <h2>
          <router-link to="/spider/music">八目音乐</router-link>
        </h2>
        <p class="product-tech">Vue3 · Spring Boot3 · AI推荐算法</p>
        <p class="product-desc">智能音乐平台，基于深度学习算法的个性化音乐推荐系统，提供高品质音乐流媒体服务。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>AI驱动的智能推荐</li>
            <li><span class="feature-icon"></span>无损音质播放</li>
            <li><span class="feature-icon"></span>心情匹配音乐</li>
            <li><span class="feature-icon"></span>全球音乐库</li>
          </ul>
        </div>
        <div class="product-stats">
          <div class="stat">
            <div class="stat-value">500万+</div>
            <div class="stat-label">曲库数量</div>
          </div>
          <div class="stat">
            <div class="stat-value">95.2%</div>
            <div class="stat-label">推荐准确率</div>
          </div>
          <div class="stat">
            <div class="stat-value">2.1</div>
            <div class="stat-label">最新版本</div>
          </div>
        </div>
      </div>

      <div class="product-card">
        <div class="product-header">
          <div class="product-icon" style="background-color: #4CAF50;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
        </div>
        <h2>智学教育平台</h2>
        <p class="product-tech">Vue3 · Spring Boot3 · 自适应学习</p>
        <p class="product-desc">AI驱动的个性化学习平台，根据学生能力自动调整课程难度，提高学习效率。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>个性化学习路径</li>
            <li><span class="feature-icon"></span>实时学习分析</li>
            <li><span class="feature-icon"></span>AR/VR教学</li>
            <li><span class="feature-icon"></span>多学科覆盖</li>
          </ul>
        </div>
        <router-link to="/spider/music" class="product-cta-link">
          <div class="product-cta">
            <button>了解更多</button>
          </div>
        </router-link>
      </div>

      <div class="product-card">
        <div class="product-header">
          <div class="product-icon" style="background-color: #2196F3;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" />
            </svg>
          </div>
        </div>
        <h2>健康蛛监测</h2>
        <p class="product-tech">Vue3 · IoT · 健康数据分析</p>
        <p class="product-desc">智能健康监测系统，实时追踪用户健康数据，提供个性化健康建议。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>多指标监测</li>
            <li><span class="feature-icon"></span>AI健康预测</li>
            <li><span class="feature-icon"></span>医生连接</li>
            <li><span class="feature-icon"></span>紧急警报</li>
          </ul>
        </div>
        <router-link to="/spider/music" class="product-cta-link">
          <div class="product-cta">
            <button>了解更多</button>
          </div>
        </router-link>
      </div>

      <div class="product-card">
        <div class="product-header">
          <div class="product-icon" style="background-color: #9C27B0;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
            </svg>
          </div>
        </div>
        <h2>蛛智会议</h2>
        <p class="product-tech">WebRTC · AI降噪 · 实时协作</p>
        <p class="product-desc">新一代智能会议系统，支持实时翻译、智能会议纪要和多人在线协作。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>4K高清视频</li>
            <li><span class="feature-icon"></span>AI实时翻译</li>
            <li><span class="feature-icon"></span>智能会议记录</li>
            <li><span class="feature-icon"></span>虚拟背景</li>
          </ul>
        </div>
        <router-link to="/spider/music" class="product-cta-link">
          <div class="product-cta">
            <button>了解更多</button>
          </div>
        </router-link>
      </div>

      <div class="product-card">
        <div class="product-header">
          <div class="product-icon" style="background-color: #FF9800;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
            </svg>
          </div>
        </div>
        <h2>蛛视短视频</h2>
        <p class="product-tech">Vue3 · 推荐算法 · 视频处理</p>
        <p class="product-desc">智能短视频平台，基于用户兴趣的个性化推荐，支持4K超清视频上传和播放。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>智能内容推荐</li>
            <li><span class="feature-icon"></span>4K超清播放</li>
            <li><span class="feature-icon"></span>AI特效工具</li>
            <li><span class="feature-icon"></span>创作者生态</li>
          </ul>
        </div>
        <router-link to="/spider/music" class="product-cta-link">
          <div class="product-cta">
            <button>了解更多</button>
          </div>
        </router-link>
      </div>

      <div class="product-card">
        <div class="product-header">
          <div class="product-icon" style="background-color: #607D8B;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" />
            </svg>
          </div>
        </div>
        <h2>蛛链金融</h2>
        <p class="product-tech">区块链 · 智能合约 · 金融科技</p>
        <p class="product-desc">基于区块链技术的金融服务平台，提供安全、透明的数字资产管理和交易服务。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>去中心化交易</li>
            <li><span class="feature-icon"></span>智能合约</li>
            <li><span class="feature-icon"></span>数字资产管理</li>
            <li><span class="feature-icon"></span>跨链互操作</li>
          </ul>
        </div>
        <router-link to="/spider/music" class="product-cta-link">
          <div class="product-cta">
            <button>了解更多</button>
          </div>
        </router-link>
      </div>

      <div class="product-card">
        <div class="product-header">
          <div class="product-icon" style="background-color: #795548;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
            </svg>
          </div>
        </div>
        <h2>蛛智家居</h2>
        <p class="product-tech">IoT · AI · 智能家居</p>
        <p class="product-desc">全屋智能家居控制系统，实现家电、照明、安防等设备的智能联动和远程控制。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>多设备兼容</li>
            <li><span class="feature-icon"></span>语音控制</li>
            <li><span class="feature-icon"></span>场景模式</li>
            <li><span class="feature-icon"></span>能源管理</li>
          </ul>
        </div>
        <router-link to="/spider/music" class="product-cta-link">
          <div class="product-cta">
            <button>了解更多</button>
          </div>
        </router-link>
      </div>

      <div class="product-card">
        <div class="product-header">
          <div class="product-icon" style="background-color: #E91E63;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" />
            </svg>
          </div>
        </div>
        <h2>蛛读电子书</h2>
        <p class="product-tech">Vue3 · 推荐算法 · 阅读体验</p>
        <p class="product-desc">智能电子书平台，提供海量正版书籍和个性化阅读推荐，优化阅读体验。</p>
        <div class="product-features">
          <h3>产品特色</h3>
          <ul>
            <li><span class="feature-icon"></span>百万正版书籍</li>
            <li><span class="feature-icon"></span>AI阅读推荐</li>
            <li><span class="feature-icon"></span>护眼模式</li>
            <li><span class="feature-icon"></span>社交阅读</li>
          </ul>
        </div>
        <router-link to="/spider/music" class="product-cta-link">
          <div class="product-cta">
            <button>了解更多</button>
          </div>
        </router-link>
      </div>
    </div>

    <div class="tech-stack">
      <h2>核心技术栈</h2>
      <div class="tech-tags">
        <span class="tech-tag">Vue 3</span>
        <span class="tech-tag">Spring Boot 3</span>
        <span class="tech-tag">AI算法</span>
        <span class="tech-tag">机器学习</span>
        <span class="tech-tag">WebRTC</span>
        <span class="tech-tag">区块链</span>
        <span class="tech-tag">IoT</span>
        <span class="tech-tag">大数据</span>
        <span class="tech-tag">云计算</span>
        <span class="tech-tag">微服务</span>
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
  /* position: sticky; 5.5 防止滑动页面时，导航栏仍在上方 */
  top: 0;
  z-index: 100;
  width: 100%;
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