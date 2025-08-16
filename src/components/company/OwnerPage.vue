<template>
  <div class="team-container">
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
        <h1>八目蛛核心团队</h1>
        <p class="subtitle">专业 · 创新 · 卓越</p>
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

    <div class="team-intro">
      <p>八目蛛网络有限公司拥有一支由行业资深专家组成的核心团队，平均从业经验超过10年，在各自领域都有深厚的技术积累和丰富的实践经验。团队致力于推动科技创新，为用户创造卓越价值。</p>
    </div>

    <div class="team-grid">
      <div class="team-card founder">
        <div class="member-photo">
          <img
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231a1a2e'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/></svg>"
            alt="八目蛛">
        </div>
        <div class="member-info">
          <h2>八目蛛</h2>
          <p class="position">创始人 & CEO</p>
          <div class="member-details">
            <div class="details-left">
              <p class="bio">互联网行业资深专家，连续创业者，拥有15年互联网产品研发和管理经验。曾主导多个千万级用户产品的设计与开发，对技术创新和商业模式有独到见解。</p>
              <p class="bio">毕业于清华大学计算机科学系，曾在多家知名科技公司担任高管职位，2018年创立八目蛛网络有限公司，致力于打造引领行业的互联网产品矩阵。</p>
              <div class="expertise">
                <span class="expertise-tag">产品战略</span>
                <span class="expertise-tag">技术创新</span>
                <span class="expertise-tag">团队管理</span>
                <span class="expertise-tag">商业模式</span>
              </div>
            </div>
            <div class="details-right">
              <div class="achievement">
                <div class="achievement-icon"></div>
                <div class="achievement-text">
                  <h4>创业经历</h4>
                  <p>连续创办3家科技公司</p>
                </div>
              </div>
              <div class="achievement">
                <div class="achievement-icon"></div>
                <div class="achievement-text">
                  <h4>行业影响</h4>
                  <p>多次受邀出席国内外顶级技术大会</p>
                </div>
              </div>
              <div class="achievement">
                <div class="achievement-icon"></div>
                <div class="achievement-text">
                  <h4>技术贡献</h4>
                  <p>持有12项技术专利</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="team-card vp">
        <div class="member-photo">
          <img
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231a1a2e'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/></svg>"
            alt="林小昭">
        </div>
        <div class="member-info">
          <h2>林小昭</h2>
          <p class="position">副总裁 & CTO</p>
          <p class="bio">人工智能领域专家，拥有计算机科学博士学位，在大型互联网平台架构和人工智能应用方面有10年实战经验。主导开发了公司核心产品技术架构，带领团队突破多项技术难关。</p>
          <div class="expertise">
            <span class="expertise-tag">系统架构</span>
            <span class="expertise-tag">人工智能</span>
            <span class="expertise-tag">技术管理</span>
            <span class="expertise-tag">分布式系统</span>
          </div>
        </div>
      </div>

      <div class="team-card">
        <div class="member-photo">
          <img
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231a1a2e'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/></svg>"
            alt="九牧昭">
        </div>
        <div class="member-info">
          <h2>九牧昭</h2>
          <p class="position">产品设计总监</p>
          <p class="bio">用户体验专家，拥有8年互联网产品设计经验，曾任职于多家知名互联网公司，主导设计了多款成功产品。精通用户研究和交互设计，致力于打造卓越的用户体验。</p>
          <div class="expertise">
            <span class="expertise-tag">产品设计</span>
            <span class="expertise-tag">用户体验</span>
            <span class="expertise-tag">市场分析</span>
            <span class="expertise-tag">品牌策略</span>
          </div>
        </div>
      </div>

      <div class="team-card">
        <div class="member-photo">
          <img
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231a1a2e'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/></svg>"
            alt="西河钊">
        </div>
        <div class="member-info">
          <h2>西河钊</h2>
          <p class="position">技术研发总监</p>
          <p class="bio">全栈开发专家，精通前端Vue框架和后端Spring Boot技术，拥有丰富的大型项目开发经验。带领技术团队完成多个关键项目，推动公司技术栈升级，提升开发效率。</p>
          <div class="expertise">
            <span class="expertise-tag">前端开发</span>
            <span class="expertise-tag">后端架构</span>
            <span class="expertise-tag">团队协作</span>
            <span class="expertise-tag">敏捷开发</span>
          </div>
        </div>
      </div>

      <div class="team-card">
        <div class="member-photo">
          <img
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231a1a2e'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/></svg>"
            alt="比钊">
        </div>
        <div class="member-info">
          <h2>比钊</h2>
          <p class="position">市场运营总监</p>
          <p class="bio">数字营销专家，拥有丰富的互联网运营和市场推广经验，擅长用户增长策略和产品商业化。曾带领团队实现用户量10倍增长，建立了系统化的市场运营体系。</p>
          <div class="expertise">
            <span class="expertise-tag">用户增长</span>
            <span class="expertise-tag">数字营销</span>
            <span class="expertise-tag">数据分析</span>
            <span class="expertise-tag">品牌推广</span>
          </div>
        </div>
      </div>
    </div>

    <div class="join-team">
      <h2>加入我们</h2>
      <p>我们始终在寻找志同道合的优秀人才，如果您对技术充满热情，追求卓越，欢迎加入八目蛛网络，与我们一起创造未来！</p>
      <router-link to="/spider/careers" class="join-button">查看职位</router-link>
    </div>

    <footer class="team-footer">
      <div class="footer-content">
        <p>© 2030 八目蛛网络有限公司 版权所有(本页面纯属虚构)</p>
        <p>创新科技 · 引领未来 · 智启新元</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.team-container {
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

.team-intro {
  max-width: 800px;
  margin: 50px auto 30px;
  text-align: center;
  padding: 0 20px;
}

.team-intro p {
  font-size: 1.1rem;
  line-height: 1.8;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 60px;
  padding: 0 20px;
}

.team-card {
  background: #ffffff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.founder {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: linear-gradient(to right, #fff, #f9f9ff);
  border-left: 5px solid #00dbde;
}

.vp {
  grid-column: 1 / -1;
  background: linear-gradient(to right, #fff, #f9f9ff);
  border-left: 5px solid #00dbde;
}

.member-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #f1f1f1;
  margin: 0 auto 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 4px solid white;
  flex-shrink: 0;
}

.founder .member-photo {
  width: 160px;
  height: 160px;
  margin-right: 40px;
  margin-bottom: 0;
}

.member-photo img {
  width: 60%;
  height: 60%;
}

.member-info {
  flex: 1;
}

.team-card h2 {
  font-size: 1.5rem;
  color: #1a1a2e;
  margin-bottom: 5px;
  text-align: center;
}

.founder h2,
.vp h2 {
  text-align: left;
  font-size: 1.8rem;
}

.position {
  color: #00dbde;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
}

.founder .position,
.vp .position {
  text-align: left;
  font-size: 1.1rem;
}

.bio {
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
  text-align: justify;
}

.member-details {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 30px;
  margin-top: 20px;
}

.achievement {
  display: flex;
  margin-bottom: 15px;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  transition: all 0.3s;
}

.achievement:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  background: linear-gradient(to right, #f8f9fa, #9ae4e0);
}

.achievement-icon {
  width: 40px;
  height: 40px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300dbde"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 15px;
  flex-shrink: 0;
}

.achievement-text h4 {
  margin: 0 0 5px;
  color: #1a1a2e;
}

.achievement-text p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.expertise {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 15px;
}

.founder .expertise,
.vp .expertise {
  justify-content: flex-start;
}

.expertise-tag {
  background: #1a1a2e;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: all 0.3s;
}

.expertise-tag:hover {
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.join-team {
  text-align: center;
  padding: 60px 20px;
  background: white;
  margin-top: 20px;
}

.join-team h2 {
  font-size: 2rem;
  color: #1a1a2e;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.join-team h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
}

.join-team p {
  max-width: 600px;
  margin: 0 auto 30px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.join-button {
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 35px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
}

.join-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 219, 222, 0.3);
}

.team-footer {
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

  .founder {
    flex-direction: column;
    align-items: center;
  }

  .founder .member-photo {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .founder h2,
  .founder .position {
    text-align: center;
  }

  .member-details {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }

  .expertise {
    justify-content: center;
  }

  .founder .expertise {
    justify-content: center;
  }
}
</style>