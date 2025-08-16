<template>
  <div class="technology-container">
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
        <h1>八目蛛前沿技术</h1>
        <p class="subtitle">创新科技 · 技术引领 · 智启未来</p>
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

    <div class="technology-content">
      <section class="technology-section" id="overview">
        <div class="section-header">
          <h2>技术概览</h2>
          <div class="section-divider"></div>
        </div>
        <div class="overview-grid">
          <div class="overview-content">
            <p>八目蛛网络有限公司作为数字化转型浪潮中的技术引领者，始终以构建下一代智能基础设施为使命。我们的全栈技术架构深度融合Vue3的响应式编程与Spring
              Boot3的云原生特性，基于"端-边-云-网-智"新IT架构，打造了中台化、AI内嵌的智能引擎，支持千万级并发处理与毫秒级响应。通过微服务网格化治理和Service
              Mesh技术，实现99.999%的系统可用性，为金融、医疗、制造等行业提供企业级解决方案。</p>
            <p>
              在人工智能领域，我们构建了多模态大模型调度平台，集成DeepSeek-V3/R1等前沿模型，结合RAG增强检索与Agent智能体编排技术，实现智能客服、代码生成等场景的精准响应。自研的Falcon推理加速技术使模型推理延迟低于50ms，同时通过LoRA微调技术将训练成本降低60%，赋能客户快速构建专属AI能力。
            </p>
            <p>
              我们每年将营收的30%投入研发创新，重点布局量子加密、神经符号系统等前沿方向。技术团队由前BAT架构专家领衔，平均8年以上核心系统开发经验，主导参与过CNCF开源项目，并在NeurIPS等顶会发表12篇AI相关论文。通过"1+1+1+N"创新体系（1个转型框架+1个成熟度模型+1个规划套装+N个解决方案），已累计获得47项技术专利，其中15项为发明专利。
            </p>
            <p>在云原生领域，我们基于Kubernetes构建了混合云管理平台xCloud，通过Istio实现跨云服务治理，结合Serverless架构实现资源利用率提升300%。大数据层面采用Apache
              Doris实时分析引擎，支持PB级数据毫秒级查询，结合自研的SATA SSD主控芯片，使工业级存储性能提升200%。目前已在智慧城市、智能制造等领域落地20+灯塔项目，帮助客户实现运营效率提升40%以上。</p>
            <p>作为信创生态核心成员，我们的技术栈全面适配麒麟OS、鲲鹏芯片等国产化体系，通过CMMI 5级和ISO
              27001认证。未来将持续深化与DeepSeek、Ollama等AI厂商的战略合作，在边缘智能、空间计算等方向突破技术边界，为客户提供从咨询规划到持续运维的全周期数字化陪伴服务。</p>
          </div>
          <div class="overview-stats">
            <div class="stat-item">
              <div class="stat-number">100+</div>
              <div class="stat-label">技术专利</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">30%</div>
              <div class="stat-label">研发投入占比</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">8年</div>
              <div class="stat-label">团队平均经验</div>
            </div>
          </div>
        </div>
      </section>

      <section class="technology-section" id="stack">
        <div class="section-header">
          <h2>核心技术栈</h2>
          <div class="section-divider"></div>
        </div>
        <div class="stack-grid">
          <div class="stack-card">
            <div class="stack-icon vue-icon"></div>
            <h3>Vue 3</h3>
            <p>采用Vue3 Composition API，实现更灵活、更高效的组件开发，利用响应式系统提升性能30%以上。</p>
            <div class="stack-features">
              <span>Composition API</span>
              <span>响应式优化</span>
              <span>TypeScript支持</span>
            </div>
          </div>
          <div class="stack-card">
            <div class="stack-icon spring-icon"></div>
            <h3>Spring Boot 3</h3>
            <p>基于Spring Boot3构建微服务架构，支持Java17新特性，提供卓越的性能和可扩展性。</p>
            <div class="stack-features">
              <span>微服务架构</span>
              <span>云原生支持</span>
              <span>高性能</span>
            </div>
          </div>
          <div class="stack-card">
            <div class="stack-icon ai-icon"></div>
            <h3>人工智能</h3>
            <p>集成机器学习算法，为产品提供智能推荐、自然语言处理和图像识别等AI能力。</p>
            <div class="stack-features">
              <span>智能推荐</span>
              <span>NLP</span>
              <span>计算机视觉</span>
            </div>
          </div>
          <div class="stack-card">
            <div class="stack-icon blockchain-icon"></div>
            <h3>区块链技术</h3>
            <p>自主研发的蛛链区块链平台，支持智能合约开发，TPS达5000+，满足企业级应用需求。</p>
            <div class="stack-features">
              <span>智能合约</span>
              <span>高TPS</span>
              <span>隐私保护</span>
            </div>
          </div>
          <div class="stack-card">
            <div class="stack-icon cloud-icon"></div>
            <h3>云计算技术</h3>
            <p>弹性云计算平台，提供分布式计算、存储和网络服务，支持快速扩展和高可用架构。</p>
            <div class="stack-features">
              <span>弹性伸缩</span>
              <span>分布式存储</span>
              <span>全球CDN</span>
            </div>
          </div>
          <div class="stack-card">
            <div class="stack-icon iot-icon"></div>
            <h3>IoT技术</h3>
            <p>物联网平台技术，支持多协议设备接入和边缘计算，实现万物互联的智能生态系统。</p>
            <div class="stack-features">
              <span>边缘计算</span>
              <span>多协议支持</span>
              <span>实时监控</span>
            </div>
          </div>
        </div>
      </section>

      <section class="technology-section" id="products">
        <div class="section-header">
          <h2>产品技术亮点</h2>
          <div class="section-divider"></div>
        </div>
        <div class="product-tech-grid">
          <div class="product-tech-card">
            <h3>
              <router-link to="/spider/navigation" class="website">八目导航</router-link>
            </h3>
            <div class="tech-tags">
              <span>Vue3</span>
              <span>智能推荐</span>
              <span>个性化算法</span>
            </div>
            <p>采用基于深度学习的推荐算法，实时分析用户行为，提供精准的网站导航服务，用户满意度达98.7%。</p>
          </div>
          <div class="product-tech-card">
            <h3>
              <router-link to="/spider/robot" class="website">小昭语音助手</router-link>
            </h3>
            <div class="tech-tags">
              <span>自然语言处理</span>
              <span>多语言支持</span>
              <span>上下文感知</span>
            </div>
            <p>集成先进的NLP技术，支持多语言多方言识别，上下文感知准确率行业领先。</p>
          </div>
          <div class="product-tech-card">
            <h3>
              <router-link to="/spider/navigation" class="website">蛛网安全卫士</router-link>
            </h3>
            <div class="tech-tags">
              <span>威胁检测</span>
              <span>行为分析</span>
              <span>零信任架构</span>
            </div>
            <p>基于AI的行为分析引擎，实时检测网络威胁，采用零信任安全架构，防护效果提升60%。</p>
          </div>
          <div class="product-tech-card">
            <h3>
              <router-link to="/spider/navigation" class="website">云蛛企业平台</router-link>
            </h3>
            <div class="tech-tags">
              <span>微服务</span>
              <span>容器化</span>
              <span>DevOps</span>
            </div>
            <p>采用微服务架构，支持容器化部署，集成CI/CD流水线，交付效率提升300%。</p>
          </div>
          <div class="product-tech-card">
            <h3>
              <router-link to="/spider/navigation" class="website">蛛算云服务</router-link>
            </h3>
            <div class="tech-tags">
              <span>云计算</span>
              <span>分布式存储</span>
              <span>弹性伸缩</span>
            </div>
            <p>高性能云计算平台，提供弹性计算资源和分布式存储，支持企业快速上云和业务扩展。</p>
          </div>
          <div class="product-tech-card">
            <h3>
              <router-link to="/spider/navigation" class="website">蛛眼物联网</router-link>
            </h3>
            <div class="tech-tags">
              <span>IoT技术</span>
              <span>边缘计算</span>
              <span>实时监控</span>
            </div>
            <p>智能物联网平台，连接万物实现设备智能化管理，打造智慧城市与智能家居解决方案。</p>
          </div>
        </div>
      </section>

      <section class="technology-section" id="future">
        <div class="section-header">
          <h2>技术前瞻</h2>
          <div class="section-divider"></div>
        </div>
        <div class="future-content">
          <div class="future-item">
            <div class="future-icon quantum-icon"></div>
            <div class="future-text">
              <h3>量子计算研究</h3>
              <p>我们已组建量子计算研究团队，探索量子算法在密码学、优化问题等领域的应用，预计2025年推出首个量子安全解决方案。</p>
            </div>
          </div>
          <div class="future-item">
            <div class="future-icon metaverse-icon"></div>
            <div class="future-text">
              <h3>元宇宙技术</h3>
              <p>投入XR技术研发，构建企业级元宇宙平台，支持虚拟办公、数字孪生等创新应用场景。</p>
            </div>
          </div>
          <div class="future-item">
            <div class="future-icon edge-icon"></div>
            <div class="future-text">
              <h3>边缘智能</h3>
              <p>开发轻量级AI模型，实现边缘设备上的实时智能决策，降低延迟90%，提升隐私安全性。</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <footer class="technology-footer">
      <div class="footer-content">
        <p>© 2030 八目蛛网络有限公司 版权所有(本页面纯属虚构)</p>
        <p>创新科技 · 引领未来 · 智启新元</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.technology-container {
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


/* 流星系统 */
.meteor {
  rotate: 50deg;
  position: absolute;
  height: 5px;
  animation: meteorFall 6s linear infinite;
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

.website {
  color: #0f0c29;
  text-decoration-line: none;
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

.technology-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 40px 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 2.2rem;
  color: #1a1a2e;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.section-divider {
  height: 3px;
  width: 80px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  margin: 0 auto;
}

.technology-section {
  margin-bottom: 80px;
  background: white;
  border-radius: 15px;
  padding: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

/* 技术概览部分 */
.overview-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

.overview-content p {
  margin-bottom: 20px;
  line-height: 1.8;
  color: #555;
}

.overview-stats {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.stat-item {
  padding: 25px;
  background: #f8f9fa;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 100%);
  color: white;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 8px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stat-item:hover .stat-number {
  color: white;
  -webkit-text-fill-color: white;
  background: none;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

/* 技术栈部分 */
.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.stack-card {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s;
  border-top: 4px solid transparent;
}

.stack-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-top-color: #00dbde;
}

.stack-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.vue-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236DB33F"><path d="M12 22L5 6h4l3 8 3-8h4L12 22z"/></svg>');
}

.spring-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236DB33F"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 5c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>');
}

.ai-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300dbde"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>');
}

.blockchain-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23f7931a"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6l-6 6 6 6 6-6-6-6z"/></svg>');
}

.cloud-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2311998e"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/></svg>');
}

.iot-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23f46b45"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm-1.5-9h3v6h-3z"/></svg>');
}

.stack-card h3 {
  color: #1a1a2e;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.stack-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.stack-features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.stack-features span {
  background: rgba(0, 219, 222, 0.1);
  color: #00dbde;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
}

/* 产品技术亮点部分 */
.product-tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.product-tech-card {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  transition: all 0.3s;
  border-bottom: 3px solid transparent;
}

.product-tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-bottom-color: #00dbde;
}

.product-tech-card h3 {
  color: #1a1a2e;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.tech-tags span {
  background: rgba(26, 26, 46, 0.1);
  color: #1a1a2e;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
}

.product-tech-card p {
  color: #666;
  line-height: 1.6;
}

/* 技术前瞻部分 */
.future-content {
  max-width: 800px;
  margin: 0 auto;
}

.future-item {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
}

.future-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.future-icon {
  width: 80px;
  height: 80px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}

/* 基础图标样式 */
.future-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
}

/* 量子计算图标 */
.quantum-icon {
  background: linear-gradient(135deg, #8A2BE2 0%, #4B0082 100%);
}

.quantum-icon::before {
  content: "Q";
  color: white;
  font-size: 2rem;
  font-weight: bold;
}

/* 元宇宙图标 */
.metaverse-icon {
  background: linear-gradient(135deg, #00BFFF 0%, #1E90FF 100%);
}

.metaverse-icon::before {
  content: "∞";
  color: white;
  font-size: 2.2rem;
  transform: rotate(45deg);
}

/* 边缘智能图标 */
.edge-icon {
  background: linear-gradient(135deg, #32CD32 0%, #228B22 100%);
}

.edge-icon::before {
  content: "α";
  color: white;
  font-size: 2rem;
  font-weight: bold;
}

/* 绿色计算图标 */
.sustainable-icon {
  background: linear-gradient(135deg, #3CB371 0%, #2E8B57 100%);
}

.sustainable-icon::before {
  content: "♻";
  color: white;
  font-size: 2.2rem;
}

.future-text h3 {
  color: #1a1a2e;
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.future-text p {
  color: #666;
  line-height: 1.6;
}

.technology-footer {
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

  .overview-grid {
    grid-template-columns: 1fr;
  }

  .future-item {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }
}
</style>