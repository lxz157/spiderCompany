<template>
  <div class="innovation-container">
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
        <h1>八目蛛创新理念</h1>
        <p class="subtitle">创新驱动 · 引领未来 · 智启新元</p>
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

    <div class="innovation-content">
      <section class="innovation-section" id="philosophy">
        <div class="section-header">
          <h2>创新理念</h2>
          <div class="section-divider"></div>
        </div>
        <div class="philosophy-grid">
          <div class="philosophy-card">
            <div class="philosophy-icon breakthrough-icon"></div>
            <h3>突破性创新</h3>
            <p>我们不满足于渐进式改进，而是致力于开发突破性技术和产品，重新定义行业标准。</p>
          </div>
          <div class="philosophy-card">
            <div class="philosophy-icon usercentric-icon"></div>
            <h3>用户为中心</h3>
            <p>所有创新都始于用户需求，我们通过深度洞察用户行为，打造真正有价值的产品。</p>
          </div>
          <div class="philosophy-card">
            <div class="philosophy-icon futureproof-icon"></div>
            <h3>前瞻性思维</h3>
            <p>我们不仅解决当下问题，更着眼于未来3-5年的技术趋势，确保产品长期竞争力。</p>
          </div>
          <div class="philosophy-card">
            <div class="philosophy-icon collaboration-icon"></div>
            <h3>开放式创新</h3>
            <p>与高校、研究机构建立战略合作，整合全球创新资源，加速技术突破。</p>
          </div>
        </div>
      </section>

      <section class="innovation-section" id="investment">
        <div class="section-header">
          <h2>创新投入</h2>
          <div class="section-divider"></div>
        </div>
        <div class="investment-content">
          <div class="investment-chart">
            <div class="chart-bar" style="height: 80%;">
              <div class="chart-value">30%</div>
              <div class="chart-label">研发投入占比</div>
            </div>
            <div class="chart-bar" style="height: 60%;">
              <div class="chart-value">200+</div>
              <div class="chart-label">研发人员</div>
            </div>
            <div class="chart-bar" style="height: 70%;">
              <div class="chart-value">15</div>
              <div class="chart-label">创新实验室</div>
            </div>
            <div class="chart-bar" style="height: 50%;">
              <div class="chart-value">6</div>
              <div class="chart-label">产学研合作</div>
            </div>
          </div>
          <div class="investment-text">
            <p>八目蛛网络有限公司将创新视为企业发展的核心动力，每年投入超过30%的营收用于研发创新，这一比例远超行业平均水平。</p>
            <p>我们在北京、上海、深圳设立了3个研发中心和12个创新实验室，拥有200多名研发人员，其中35%拥有硕士及以上学历。</p>
            <p>公司与清华大学、北京大学等6所顶尖高校建立了产学研合作关系，共同开展前沿技术研究，加速创新成果转化。</p>
          </div>
        </div>
      </section>

      <section class="innovation-section" id="achievements">
        <div class="section-header">
          <h2>创新成果</h2>
          <div class="section-divider"></div>
        </div>
        <div class="achievements-timeline">
          <div class="timeline-item">
            <div class="timeline-date">2019</div>
            <div class="timeline-content">
              <h3>首款产品发布</h3>
              <p>推出"八目导航"智能导航平台，6个月内用户突破500万，奠定公司技术基础。</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2020</div>
            <div class="timeline-content">
              <h3>语音交互技术突破</h3>
              <p>小昭语音助手实现多语言多方言支持，识别准确率达行业领先水平。</p>
            </div>
          </div>
          <div class="timeline-item highlight">
            <div class="timeline-date">2021</div>
            <div class="timeline-content">
              <h3>微服务架构重构</h3>
              <p>全面重构技术架构，采用微服务设计，系统性能提升300%，获评"年度最佳技术架构"。</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2022</div>
            <div class="timeline-content">
              <h3>AI推荐算法升级</h3>
              <p>八目导航3.0采用新一代AI推荐算法，用户满意度提升至98.7%，活跃用户增长30%。</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2023</div>
            <div class="timeline-content">
              <h3>量子安全技术突破</h3>
              <p>研发团队在量子加密领域取得重大突破，申请5项核心专利，预计2025年推出商用产品。</p>
            </div>
          </div>
        </div>
      </section>

      <section class="innovation-section" id="future">
        <div class="section-header">
          <h2>未来方向</h2>
          <div class="section-divider"></div>
        </div>
        <div class="future-grid">
          <div class="future-card">
            <div class="future-icon quantum-icon"></div>
            <h3>量子计算</h3>
            <p>组建量子计算研究团队，探索量子算法在密码学、优化问题等领域的应用。</p>
            <div class="future-progress">
              <div class="progress-bar" style="width: 40%;"></div>
              <span>研发中</span>
            </div>
          </div>
          <div class="future-card">
            <div class="future-icon metaverse-icon"></div>
            <h3>元宇宙技术</h3>
            <p>开发企业级元宇宙平台，支持虚拟办公、数字孪生等创新应用场景。</p>
            <div class="future-progress">
              <div class="progress-bar" style="width: 60%;"></div>
              <span>概念验证</span>
            </div>
          </div>
          <div class="future-card">
            <div class="future-icon edge-icon"></div>
            <h3>边缘智能</h3>
            <p>开发轻量级AI模型，实现边缘设备上的实时智能决策，降低延迟90%。</p>
            <div class="future-progress">
              <div class="progress-bar" style="width: 75%;"></div>
              <span>测试阶段</span>
            </div>
          </div>
          <div class="future-card">
            <div class="future-icon sustainable-icon"></div>
            <h3>绿色计算</h3>
            <p>研发低能耗算法和架构，将数据中心能耗降低40%，践行可持续发展。</p>
            <div class="future-progress">
              <div class="progress-bar" style="width: 30%;"></div>
              <span>早期研究</span>
            </div>
          </div>
        </div>
      </section>

      <section class="innovation-section" id="awards">
        <div class="section-header">
          <h2>创新荣誉</h2>
          <div class="section-divider"></div>
        </div>
        <div class="awards-grid">
          <div class="award-card">
            <div class="award-badge">2023</div>
            <h3>年度创新企业</h3>
            <p>中国互联网协会</p>
          </div>
          <div class="award-card">
            <div class="award-badge">2022</div>
            <h3>最佳技术架构奖</h3>
            <p>全球技术峰会</p>
          </div>
          <div class="award-card">
            <div class="award-badge">2021</div>
            <h3>AI创新应用奖</h3>
            <p>人工智能大会</p>
          </div>
          <div class="award-card">
            <div class="award-badge">2020</div>
            <h3>最具潜力创业公司</h3>
            <p>创业邦</p>
          </div>
        </div>
      </section>
    </div>

    <footer class="innovation-footer">
      <div class="footer-content">
        <p>© 2030 八目蛛网络有限公司 版权所有(本页面纯属虚构)</p>
        <p>创新科技 · 引领未来 · 智启新元</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.innovation-container {
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

.innovation-content {
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

.innovation-section {
  margin-bottom: 80px;
  padding: 0 20px;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.philosophy-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
}

.philosophy-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.philosophy-icon {
  /* 统一设置图标容器样式 */
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
}

.breakthrough-icon {
  background: linear-gradient(135deg, #00dbde 0%, #fc00ff 100%);
  /* 使用伪元素创建闪电图标 */
  position: relative;
}

.breakthrough-icon::after {
  content: "⚡";
  font-size: 2.5rem;
}

.usercentric-icon {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.usercentric-icon::after {
  content: "👤";
}

.futureproof-icon {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.futureproof-icon::after {
  content: "🔮";
}

.collaboration-icon {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.collaboration-icon::after {
  content: "🤝";
}

.philosophy-card h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #1a1a2e;
}

.philosophy-card p {
  color: #666;
  line-height: 1.6;
}

.investment-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  justify-content: center;
}

.investment-chart {
  display: flex;
  gap: 30px;
  align-items: flex-end;
  height: 300px;
  flex: 1;
  min-width: 300px;
}

.chart-bar {
  flex: 1;
  max-width: 80px;
  background: linear-gradient(to top, #00dbde, #fc00ff);
  border-radius: 8px 8px 0 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
}

.chart-value {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.chart-label {
  color: white;
  font-size: 0.9rem;
  text-align: center;
  writing-mode: vertical-rl;
  transform: rotate(0deg);
}

.investment-text {
  flex: 1;
  min-width: 300px;
}

.investment-text p {
  margin-bottom: 20px;
  line-height: 1.8;
  color: #555;
}

.achievements-timeline {
  position: relative;
  max-width: 800px;
  margin: 40px auto 0;
  padding-left: 30px;
}

.achievements-timeline::before {
  content: '';
  position: absolute;
  left: 16px;
  top: 10px;
  height: 840px;
  width: 10px;
  background: linear-gradient(to bottom, #00dbde, #fc00ff);
  /* 使用 clip-path 剪裁底部为箭头形状 */
  clip-path: polygon(0% 0%,
      /* 左上角 */
      100% 0%,
      /* 右上角 */
      100% 95%,
      /* 右下角（接近底部） */
      50% 100%,
      /* 底部中心（形成箭头尖） */
      0% 95%
      /* 左下角（接近底部） */
    );
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 30px;
}

.timeline-item.highlight .timeline-content {
  border-color: #fc00ff;
  box-shadow: 0 5px 25px rgba(252, 0, 255, 0.2);
}

.timeline-date {
  position: absolute;
  left: -50px;
  top: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #1a1a2e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  z-index: 1;
}

.timeline-content {
  background: white;
  padding: 25px;
  border-radius: 8px;
  border-left: 4px solid #00dbde;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.timeline-content h3 {
  margin-top: 0;
  color: #1a1a2e;
}

.timeline-content p {
  color: #666;
  line-height: 1.6;
}

.future-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.future-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.future-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* 未来方向图标 - 统一基础样式 */
.future-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  position: relative;
  overflow: hidden;
}

/* 量子计算图标 */
.quantum-icon {
  background: linear-gradient(135deg, #8A2BE2 0%, #4B0082 100%);
}

.quantum-icon::before {
  content: "Q";
  font-weight: bold;
  font-size: 2.2rem;
  position: relative;
  z-index: 2;
}

.quantum-icon::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.3) 0%, transparent 50%);
  animation: quantum-spin 6s linear infinite;
}

@keyframes quantum-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* 元宇宙图标 */
.metaverse-icon {
  background: linear-gradient(135deg, #00BFFF 0%, #1E90FF 100%);
}

.metaverse-icon::before {
  content: "∞";
  font-size: 2.5rem;
  transform: rotate(45deg);
}

/* 边缘智能图标 */
.edge-icon {
  background: linear-gradient(135deg, #32CD32 0%, #228B22 100%);
}

.edge-icon::before {
  content: "α";
  font-size: 2.2rem;
  font-weight: bold;
}

/* 绿色计算图标 */
.sustainable-icon {
  background: linear-gradient(135deg, #3CB371 0%, #2E8B57 100%);
}

.sustainable-icon::before {
  content: "♻";
  font-size: 2.5rem;
}

/* 添加悬停动画效果 */
.future-card:hover .future-icon {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}

.future-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #1a1a2e;
}

.future-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.future-progress {
  display: flex;
  align-items: center;
  gap: 10px;
}

.progress-bar {
  height: 8px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  border-radius: 4px;
  flex: 1;
}

.future-progress span {
  font-size: 0.9rem;
  color: #666;
}

.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.award-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.award-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.award-badge {
  width: 60px;
  height: 60px;
  background: #1a1a2e;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0 auto 20px;
}

.award-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #1a1a2e;
}

.award-card p {
  color: #666;
  font-size: 0.9rem;
}

.innovation-footer {
  background: #1a1a2e;
  color: white;
  text-align: center;
  padding: 30px 20px;
  margin-top: 80px;
}

.footer-content p:first-child {
  margin-bottom: 10px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .start-header h1 {
    font-size: 2rem;
  }

  .achievements-timeline::before {
    content: '';
    position: absolute;
    left: 19px;
    top: 10px;
    height: 970px;
    width: 10px;
    background: linear-gradient(to bottom, #00dbde, #fc00ff);
    /* 使用 clip-path 剪裁底部为箭头形状 */
    clip-path: polygon(0% 0%,
        /* 左上角 */
        100% 0%,
        /* 右上角 */
        100% 95%,
        /* 右下角（接近底部） */
        50% 100%,
        /* 底部中心（形成箭头尖） */
        0% 95%
        /* 左下角（接近底部） */
      );
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

  .investment-content {
    flex-direction: column;
  }

  .investment-chart {
    height: auto;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 30px;
  }

  .timeline-date {
    width: 60px;
    height: 60px;
    left: -40px;
    font-size: 1rem;
  }
}
</style>