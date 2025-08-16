<template>
  <div class="careers-container">
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
        <h1>加入八目蛛团队</h1>
        <p class="subtitle">创新 · 成长 · 共赢</p>
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

    <div class="careers-intro">
      <p>我们正在寻找志同道合的伙伴加入我们的团队。在这里，您将与行业顶尖人才共事，参与创新项目，获得快速成长的机会。八目蛛提供具有竞争力的薪酬、完善的培训体系和广阔的发展空间。</p>
    </div>

    <div class="job-grid">
      <div class="job-card">
        <div class="job-header">
          <h2>前端工程师</h2>
          <div class="job-meta">
            <span class="job-location">北京/上海/深圳</span>
            <span class="job-count">招聘人数: 10人</span>
          </div>
        </div>

        <div class="job-content">
          <div class="job-section">
            <h3>职位描述</h3>
            <ul>
              <li>负责公司产品的前端开发工作，使用Vue.js框架构建高性能Web应用</li>
              <li>与设计团队协作，实现高质量的用户界面和交互体验</li>
              <li>优化前端性能，确保跨浏览器和跨设备的兼容性</li>
              <li>参与前端架构设计和新技术调研</li>
              <li>与后端工程师协作完成接口对接和数据交互</li>
            </ul>
          </div>

          <div class="job-section">
            <h3>职位要求</h3>
            <ul>
              <li>计算机相关专业本科及以上学历，2年以上前端开发经验</li>
              <li>精通HTML5、CSS3、JavaScript/TypeScript等前端技术</li>
              <li>熟练掌握Vue.js框架及其生态，有实际项目经验</li>
              <li>熟悉前端工程化工具如Webpack、Vite等</li>
              <li>了解前端性能优化和安全防护措施</li>
              <li>良好的代码习惯和团队协作能力</li>
            </ul>
          </div>

          <div class="job-perks">
            <div class="perk-item">
              <div class="perk-icon">💰</div>
              <div class="perk-text">15-35K·13薪</div>
            </div>
            <div class="perk-item">
              <div class="perk-icon">🏠</div>
              <div class="perk-text">弹性办公</div>
            </div>
            <div class="perk-item">
              <div class="perk-icon">📈</div>
              <div class="perk-text">晋升空间大</div>
            </div>
          </div>
        </div>

        <button class="apply-button" @click="applyForJob('前端工程师')">立即申请</button>
      </div>

      <div class="job-card">
        <div class="job-header">
          <h2>后端工程师</h2>
          <div class="job-meta">
            <span class="job-location">北京/上海/深圳/杭州</span>
            <span class="job-count">招聘人数: 10人</span>
          </div>
        </div>

        <div class="job-content">
          <div class="job-section">
            <h3>职位描述</h3>
            <ul>
              <li>负责公司产品的后端服务开发和架构设计</li>
              <li>使用Java/Spring Boot构建高性能、高可用的后端服务</li>
              <li>设计和优化数据库结构，保证数据安全和高效访问</li>
              <li>参与系统架构设计和技术选型</li>
              <li>编写高质量、可维护的代码，进行代码审查</li>
              <li>与前端工程师协作完成接口设计和实现</li>
            </ul>
          </div>

          <div class="job-section">
            <h3>职位要求</h3>
            <ul>
              <li>计算机相关专业本科及以上学历，2年以上后端开发经验</li>
              <li>精通Java语言，熟悉Spring Boot框架及其生态</li>
              <li>熟悉MySQL等关系型数据库，了解Redis等NoSQL技术</li>
              <li>了解分布式系统、微服务架构和常见设计模式</li>
              <li>熟悉RESTful API设计和开发</li>
              <li>良好的算法基础和系统设计能力</li>
            </ul>
          </div>

          <div class="job-perks">
            <div class="perk-item">
              <div class="perk-icon">💰</div>
              <div class="perk-text">18-35K·13薪</div>
            </div>
            <div class="perk-item">
              <div class="perk-icon">💻</div>
              <div class="perk-text">顶配设备</div>
            </div>
            <div class="perk-item">
              <div class="perk-icon">🍱</div>
              <div class="perk-text">免费三餐</div>
            </div>
          </div>
        </div>

        <button class="apply-button" @click="applyForJob('后端工程师')">立即申请</button>
      </div>

      <div class="job-card">
        <div class="job-header">
          <h2>项目经理</h2>
          <div class="job-meta">
            <span class="job-location">北京/上海</span>
            <span class="job-count">招聘人数: 2人</span>
          </div>
        </div>

        <div class="job-content">
          <div class="job-section">
            <h3>职位描述</h3>
            <ul>
              <li>负责互联网产品的全生命周期管理，确保项目按时高质量交付</li>
              <li>制定项目计划，协调资源，跟踪项目进度，识别并管理风险</li>
              <li>作为团队沟通桥梁，协调产品、研发、测试等多方协作</li>
              <li>管理项目文档，组织项目会议，推动问题解决</li>
              <li>优化项目管理流程，提高团队效率</li>
            </ul>
          </div>

          <div class="job-section">
            <h3>职位要求</h3>
            <ul>
              <li>计算机或管理相关专业本科及以上学历，3年以上项目管理经验</li>
              <li>熟悉敏捷开发流程，有PMP或Scrum认证者优先</li>
              <li>优秀的沟通协调能力和团队管理能力</li>
              <li>具备较强的逻辑思维和问题解决能力</li>
              <li>了解互联网产品开发流程和技术架构</li>
              <li>英语读写能力良好，能阅读技术文档</li>
            </ul>
          </div>

          <div class="job-perks">
            <div class="perk-item">
              <div class="perk-icon">💰</div>
              <div class="perk-text">20-40K·14薪</div>
            </div>
            <div class="perk-item">
              <div class="perk-icon">✈️</div>
              <div class="perk-text">年度旅游</div>
            </div>
            <div class="perk-item">
              <div class="perk-icon">🎯</div>
              <div class="perk-text">项目奖金</div>
            </div>
          </div>
        </div>

        <button class="apply-button" @click="applyForJob('项目经理')">立即申请</button>
      </div>

      <div class="job-card">
        <div class="job-header">
          <h2>UI/UX设计师</h2>
          <div class="job-meta">
            <span class="job-location">北京/上海/广州</span>
            <span class="job-count">招聘人数: 5人</span>
          </div>
        </div>

        <div class="job-content">
          <div class="job-section">
            <h3>职位描述</h3>
            <ul>
              <li>负责公司产品的用户界面和用户体验设计</li>
              <li>参与产品需求分析，输出高质量的设计方案和原型</li>
              <li>创建用户流程图、线框图、高保真原型和设计规范</li>
              <li>与产品经理和开发团队紧密合作，确保设计落地质量</li>
              <li>进行用户研究和可用性测试，持续优化产品体验</li>
            </ul>
          </div>

          <div class="job-section">
            <h3>职位要求</h3>
            <ul>
              <li>设计相关专业本科及以上学历，2年以上UI/UX设计经验</li>
              <li>精通Figma、Sketch、Adobe XD等设计工具</li>
              <li>熟悉用户体验设计原则和交互设计规范</li>
              <li>具备良好的审美能力和创新思维</li>
              <li>了解前端开发技术(HTML/CSS)者优先</li>
              <li>有作品集展示设计能力和设计思维</li>
            </ul>
          </div>

          <div class="job-perks">
            <div class="perk-item">
              <div class="perk-icon">💰</div>
              <div class="perk-text">15-30K·13薪</div>
            </div>
            <div class="perk-item">
              <div class="perk-icon">🎨</div>
              <div class="perk-text">设计自由</div>
            </div>
            <div class="perk-item">
              <div class="perk-icon">📚</div>
              <div class="perk-text">学习预算</div>
            </div>
          </div>
        </div>

        <button class="apply-button" @click="applyForJob('UI/UX设计师')">立即申请</button>
      </div>
    </div>

    <div class="why-join">
      <h2>为什么选择八目蛛</h2>
      <div class="reasons-grid">
        <div class="reason-card">
          <div class="reason-icon">🚀</div>
          <h3>快速成长</h3>
          <p>与行业顶尖人才共事，参与前沿技术项目，获得快速成长机会</p>
        </div>
        <div class="reason-card">
          <div class="reason-icon">💡</div>
          <h3>创新文化</h3>
          <p>鼓励创新思维，支持技术探索，提供充足的资源实现你的想法</p>
        </div>
        <div class="reason-card">
          <div class="reason-icon">🌍</div>
          <h3>全球视野</h3>
          <p>国际化业务布局，提供海外交流机会，拓展全球视野</p>
        </div>
        <div class="reason-card">
          <div class="reason-icon">❤️</div>
          <h3>关怀文化</h3>
          <p>完善的福利体系，关注员工身心健康，营造温暖的工作环境</p>
        </div>
      </div>
    </div>

    <footer class="careers-footer">
      <div class="footer-content">
        <p>© 2030 八目蛛网络有限公司 版权所有(本页面纯属虚构)</p>
        <p>创新科技 · 引领未来 · 智启新元</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    applyForJob(position) {
      this.$router.push({
        path: '/spider/job',
        query: { position: position }
      });
    }
  }
}
</script>

<style scoped>
.careers-container {
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

.careers-intro {
  max-width: 800px;
  margin: 50px auto 30px;
  text-align: center;
  padding: 0 20px;
}

.careers-intro p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.job-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 60px;
  padding: 0 20px;
}

.job-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.job-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.job-header {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.job-header h2 {
  font-size: 1.5rem;
  color: #1a1a2e;
  margin-bottom: 10px;
}

.job-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #666;
}

.job-count {
  color: #00dbde;
  font-weight: bold;
}

.job-content {
  flex: 1;
}

.job-section {
  margin-bottom: 20px;
}

.job-section h3 {
  font-size: 1.1rem;
  color: #1a1a2e;
  margin-bottom: 10px;
  position: relative;
  padding-left: 15px;
}

.job-section h3:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 16px;
  background: linear-gradient(to bottom, #00dbde, #fc00ff);
  border-radius: 3px;
}

.job-section ul {
  margin: 0;
  padding-left: 20px;
}

.job-section li {
  margin-bottom: 8px;
  line-height: 1.5;
  color: #555;
}

.job-perks {
  display: flex;
  gap: 15px;
  margin: 25px 0;
  flex-wrap: wrap;
}

.perk-item {
  display: flex;
  align-items: center;
  background: #f8f9fa;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.perk-icon {
  margin-right: 8px;
  font-size: 1.1rem;
}

.apply-button {
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 35px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
  margin-top: auto;
}

.apply-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 219, 222, 0.3);
}

.why-join {
  max-width: 1200px;
  margin: 0 auto 60px;
  padding: 0 20px;
  text-align: center;
}

.why-join h2 {
  font-size: 2rem;
  color: #1a1a2e;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
}

.why-join h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.reason-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.reason-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.reason-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.reason-card h3 {
  font-size: 1.2rem;
  color: #1a1a2e;
  margin-bottom: 15px;
}

.reason-card p {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.careers-footer {
  background: #1a1a2e;
  color: white;
  padding: 30px 20px;
  text-align: center;
  margin-top: auto;
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

  .job-grid {
    grid-template-columns: 1fr;
  }

  .reasons-grid {
    grid-template-columns: 1fr;
  }
}
</style>