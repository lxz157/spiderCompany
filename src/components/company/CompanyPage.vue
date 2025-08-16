<template>
  <div class="company-container">
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
        <h1>八目蛛网络有限公司</h1>
        <p class="subtitle">想象力是第一竞争力 · 创新驱动未来</p>
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

    <div class="company-content">
      <section class="company-section" id="about">
        <div class="section-header">
          <h2>公司背景</h2>
          <div class="section-divider"></div>
        </div>
        <div class="about-grid">
          <div class="about-content">
            <p>八目蛛网络有限公司成立于2018年，总部位于北京中关村科技园，是一家专注于互联网技术研发的高科技企业。公司注册资金1000万元，由行业顶尖专家团队创立。</p>
            <p>
              公司以"创新、专业、卓越"为核心价值观，致力于为全球用户提供优质的互联网产品和服务。目前，公司已形成完整的产品生态矩阵，涵盖智能导航、语音交互、网络安全、企业管理、数据分析、区块链技术、云服务和物联网八大核心领域。
            </p>
            <p>公司在北京设立总部，在上海、深圳设有研发中心，现有员工200余人，其中技术研发人员占比超过70%，硕士及以上学历占比35%，拥有多项国家专利技术。</p>
          </div>
          <div class="about-stats">
            <div class="stat-item">
              <div class="stat-number">2018</div>
              <div class="stat-label">成立年份</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">200+</div>
              <div class="stat-label">员工规模</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">3</div>
              <div class="stat-label">研发中心</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">6</div>
              <div class="stat-label">核心产品</div>
            </div>
          </div>
        </div>
      </section>

      <section class="company-section" id="culture">
        <div class="section-header">
          <h2>公司文化</h2>
          <div class="section-divider"></div>
        </div>
        <div class="culture-grid">
          <div class="culture-item">
            <div class="culture-icon innovation-icon"></div>
            <h3>创新</h3>
            <p>持续探索前沿技术，勇于突破传统界限，追求技术创新与产品创新的完美结合</p>
          </div>
          <div class="culture-item">
            <div class="culture-icon collaboration-icon"></div>
            <h3>协作</h3>
            <p>注重团队协作，打破部门壁垒，鼓励跨领域合作，共同创造卓越成果</p>
          </div>
          <div class="culture-item">
            <div class="culture-icon integrity-icon"></div>
            <h3>诚信</h3>
            <p>坚持诚信为本，对用户负责，对社会负责，构建透明诚信的企业形象</p>
          </div>
          <div class="culture-item">
            <div class="culture-icon excellence-icon"></div>
            <h3>卓越</h3>
            <p>不断追求卓越品质，精益求精，打造行业领先的产品与服务体验</p>
          </div>
        </div>
      </section>

      <section class="company-section" id="history">
        <div class="section-header">
          <h2>发展历程</h2>
          <div class="section-divider"></div>
        </div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">2018</div>
            <div class="timeline-content">
              <h3>公司成立</h3>
              <p>八目蛛网络有限公司在北京正式注册成立，注册资金1000万元</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2019</div>
            <div class="timeline-content">
              <h3>首款产品发布</h3>
              <p>推出"八目导航"智能导航平台，获得首轮500万用户</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2020</div>
            <div class="timeline-content">
              <h3>技术升级</h3>
              <p>全面升级技术栈，采用Vue3+Spring Boot3，并推出"小昭语音助手"</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2021</div>
            <div class="timeline-content">
              <h3>团队扩张</h3>
              <p>上海、深圳研发中心成立，团队突破100人，推出"蛛网安全卫士"和"云蛛企业平台"</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2022</div>
            <div class="timeline-content">
              <h3>产品矩阵</h3>
              <p>形成八大核心产品矩阵，推出"数据蛛分析"和"蛛链区块链"，用户总量突破800万</p>
            </div>
          </div>
          <div class="timeline-item highlight">
            <div class="timeline-date">2023</div>
            <div class="timeline-content">
              <h3>全面升级</h3>
              <p>产品全线升级3.0版本，技术架构全面优化，获得多项行业大奖</p>
            </div>
          </div>
        </div>
      </section>

      <section class="company-section" id="news">
        <div class="section-header">
          <h2>公司新闻</h2>
          <div class="section-divider"></div>
        </div>
        <div class="news-grid">
          <div class="news-card">
            <div class="news-date">2023-12-15</div>
            <h3>八目导航3.0版本重磅发布</h3>
            <p>全新UI设计，智能推荐算法升级，用户体验大幅提升，首日活跃用户增长30%...</p>
            <router-link :to="'/spider/news/1'" class="news-link">阅读更多</router-link>
          </div>
          <div class="news-card">
            <div class="news-date">2023-10-22</div>
            <h3>与阿里云达成战略合作</h3>
            <p>双方将在云计算、人工智能领域展开深度合作，共同打造新一代智能云平台...</p>
            <router-link :to="'/spider/news/2'" class="news-link">阅读更多</router-link>
          </div>
          <div class="news-card highlight">
            <div class="news-date">2023-09-10</div>
            <h3>荣获"年度创新企业"称号</h3>
            <p>在2023中国互联网大会上获此殊荣，CEO八目蛛发表主题演讲《创新驱动发展》...</p>
            <router-link :to="'/spider/news/3'" class="news-link">阅读更多</router-link>
          </div>
          <div class="news-card">
            <div class="news-date">2023-07-18</div>
            <h3>完成新一轮融资</h3>
            <p>公司完成B轮融资2亿元，由知名投资机构领投，将用于产品研发和市场拓展...</p>
            <router-link :to="'/spider/news/4'" class="news-link">阅读更多</router-link>
          </div>
          <div class="news-card">
            <div class="news-date">2023-05-12</div>
            <h3>入选"中国互联网百强企业"</h3>
            <p>凭借技术创新和业务增长，公司首次入选中国互联网协会发布的百强企业榜单...</p>
            <router-link :to="'/spider/news/5'" class="news-link">阅读更多</router-link>
          </div>
          <div class="news-card">
            <div class="news-date">2023-03-08</div>
            <h3>发布企业社会责任报告</h3>
            <p>公司发布首份CSR报告，详细披露在技术创新、人才培养、环境保护等方面的实践...</p>
            <router-link :to="'/spider/news/6'" class="news-link">阅读更多</router-link>
          </div>
        </div>
      </section>
    </div>

    <footer class="company-footer">
      <div class="footer-content">
        <p>© 2030 八目蛛网络有限公司 版权所有(本页面纯属虚构)</p>
        <div class="footer-links">
          <a href="#about">关于我们</a>
          <span>|</span>
          <a href="#culture">公司文化</a>
          <span>|</span>
          <a href="#history">发展历程</a>
          <span>|</span>
          <a href="#news">新闻动态</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.company-container {
  max-width: 100%;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  font-family: "楷体", 'Arial', sans-serif;
  color: #333;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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

.company-content {
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

.company-section {
  margin-bottom: 80px;
  background: white;
  border-radius: 15px;
  padding: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

/* 关于我们部分 */
.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

.about-content p {
  margin-bottom: 20px;
  line-height: 1.8;
  color: #555;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
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

/* 公司文化部分 */
.culture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
}

.culture-item {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s;
  border-top: 4px solid transparent;
}

.culture-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-top-color: #00dbde;
}

.culture-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.innovation-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300dbde"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 16v-2h4v2h-4zm5.41-6.59l-2.83 2.83c-.19.19-.44.3-.71.3-.26 0-.52-.09-.7-.29-.19-.2-.3-.46-.3-.71 0-.26.1-.52.29-.71l2.83-2.83c.4-.39.4-1.01.01-1.4-.2-.2-.46-.3-.71-.3-.26 0-.52.1-.71.29L10.1 10.1c-.59.59-.92 1.39-.92 2.22 0 .84.34 1.64.92 2.22.58.58 1.37.91 2.21.91.83 0 1.62-.34 2.21-.92l3.31-3.31c.39-.39.39-1.03 0-1.42-.39-.4-1.02-.4-1.42-.01z"/></svg>');
}

.collaboration-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300dbde"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>');
}

.integrity-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300dbde"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>');
}

.excellence-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300dbde"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/></svg>');
}

.culture-item h3 {
  color: #1a1a2e;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.culture-item p {
  color: #666;
  line-height: 1.6;
}

/* 发展历程部分 */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 50px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 16px;
  top: 10px;
  height: 990px;
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
  margin-bottom: 30px;
}

.timeline-item.highlight .timeline-date {
  background: linear-gradient(45deg, #00dbde, #fc00ff);
}

.timeline-date {
  position: absolute;
  left: -50px;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1a1a2e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  z-index: 1;
}

.timeline-content {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  position: relative;
  transition: all 0.3s;
}

.timeline-item:hover .timeline-content {
  transform: translateX(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.timeline-content::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 20px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #f8f9fa;
}

.timeline-content h3 {
  color: #1a1a2e;
  margin-bottom: 10px;
}

.timeline-item.highlight .timeline-content {
  background: linear-gradient(to right, #f8f9fa, #f0f0f0);
  border-left: 4px solid #00dbde;
}

.timeline-item.highlight .timeline-content::before {
  border-right-color: #f0f0f0;
}

/* 新闻部分 */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.news-card {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  transition: all 0.3s;
  border-bottom: 3px solid transparent;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-bottom-color: #00dbde;
}

.news-card.highlight {
  background: linear-gradient(to right, #f8f9fa, #f0f0f0);
  border-left: 4px solid #00dbde;
}

.news-date {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
  display: inline-block;
  padding: 5px 10px;
  background: #eee;
  border-radius: 20px;
}

.news-card h3 {
  color: #1a1a2e;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.news-card p {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
}

.news-link {
  display: inline-block;
  color: #00dbde;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s;
}

.news-link:hover {
  color: #fc00ff;
}

/* 页脚部分 */
.company-footer {
  background: #1a1a2e;
  color: white;
  padding: 30px 20px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-links {
  margin-top: 15px;
}

.footer-links a {
  color: #aaa;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #00dbde;
}

.footer-links span {
  color: #555;
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

  .timeline::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 10px;
    height: 1150px;
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

  .company-section {
    padding: 30px 20px;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }

  .timeline {
    padding-left: 30px;
  }

  .timeline-date {
    left: -30px;
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }
}
</style>