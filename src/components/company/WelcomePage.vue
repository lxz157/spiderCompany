<template>
  <div class="welcome-container">
    <div class="particles-container" id="particles-js"></div>

    <div class="hero-section">
      <div class="logo-container">
        <div class="logo-icon"></div>
      </div>
      <h1 class="title">八目蛛网络有限公司</h1>
      <p class="subtitle" data-text="创新科技 · 引领未来 · 智启新元">创新科技 · 引领未来 · 智启新元</p>
      <div class="cta-buttons">
        <router-link to="/spider/company" class="cta-button primary">探索公司</router-link>
        <a href="#features" class="cta-button secondary">了解优势</a>
      </div>
    </div>

    <div class="features-section" id="features">
      <h2 class="section-title">核心优势</h2>
      <div class="features-grid">
        <router-link to="/spider/technology">
          <div class="feature-card">
            <div class="icon tech-icon"></div>
            <h3>前沿技术</h3>
            <p>采用Vue3、Spring Boot3等最新技术栈，保持技术领先优势</p>
          </div>
        </router-link>
        <router-link to="/spider/owner">
          <div class="feature-card">
            <div class="icon team-icon"></div>
            <h3>专业团队</h3>
            <p>由行业资深专家带领的技术团队，平均经验超过8年</p>
          </div>
        </router-link>
        <router-link to="/spider/project">
          <div class="feature-card">
            <div class="icon product-icon"></div>
            <h3>丰富产品</h3>
            <p>八大核心产品矩阵，满足企业多样化数字化需求</p>
          </div>
        </router-link>
        <router-link to="/spider/innovation">
          <div class="feature-card">
            <div class="icon innovation-icon"></div>
            <h3>持续创新</h3>
            <p>每年投入超过30%营收用于研发创新，保持行业领先</p>
          </div>
        </router-link>
      </div>
    </div>

    <div class="footer">
      <p>© 2030 八目蛛网络有限公司 版权所有(本页面纯属虚构)</p>
      <p>联系方式：2045668182@qq.com</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {

  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #00dbde;
}

p {
  color: white;
}

.welcome-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  color: white;
  overflow-x: hidden;
  font-family: "楷体", 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.logo-container {
  margin-bottom: 2rem;
}

.logo-icon {
  width: 100px;
  height: 100px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 5 L90 30 L90 70 L50 95 L10 70 L10 30 Z M50 15 L80 35 L80 65 L50 85 L20 65 L20 35 Z M50 25 L70 40 L70 60 L50 75 L30 60 L30 40 Z M50 35 L60 45 L60 55 L50 65 L40 55 L40 45 Z" stroke="%2300dbde" stroke-width="1.5" fill="none"/><path d="M50 5 L50 95 M10 30 L90 70 M10 70 L90 30" stroke="%2300dbde" stroke-width="1" fill="none"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  filter: linear-gradient(to bottom, #00dbde, #fc00ff);
  animation: gradient 5s ease infinite;

}

.hero-section {
  position: relative;
  z-index: 2;
  padding: 100px 20px;
  text-align: center;
  max-width: 1200px;
  margin: 0px auto 200px auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient 5s ease infinite;
  background-size: 200% 200%;
  text-shadow: 0 0 10px rgba(0, 219, 222, 0.3);
  letter-spacing: 2px;
  /* 倒影效果-最简单但仅限Webkit浏览器 */
  -webkit-box-reflect: below -10px linear-gradient(transparent, rgba(255,255,255,0.3));
  /* text-shadow: 0 5px 0 rgba(255,255,255,0.2); */
  /* 启用text-shadow，会导致页面出现眩晕感 */
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.subtitle {
  position: relative;
  font-size: 1.6rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  letter-spacing: 1px;
  display: inline-block;
  
  /* 主文字阴影效果 */
  text-shadow: 
    2px 2px 4px rgba(0, 219, 222, 0.3),
    -1px -1px 0 rgba(255, 255, 255, 0.1);
  
  /* 倒影效果 - 侧后方 */
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 105%;
    left: 3px;
    color: transparent;
    background: linear-gradient(to bottom, 
      rgba(0, 219, 222, 0.15) 0%, 
      transparent 80%);
    -webkit-background-clip: text;
    background-clip: text;
    transform: 
      perspective(2px)
      rotateX(30deg)
      scaleY(0.6)
      skewX(0deg);
    transform-origin: 50% 1%;
    filter: blur(1px);
    opacity: 0.7;
    z-index: -1;

    /* 仅对 skewX 做动画 */
  animation: skewX-animation 20s infinite linear;
  }
}

/* 仅定义 skewX 的变化 */
@keyframes skewX-animation {
  0%, 100% {
    transform: 
      perspective(2px)
      rotateX(30deg)
      scaleY(0.6)
      skewX(0deg);
  }
  50% {
    transform: 
      perspective(2px)
      rotateX(30deg)
      scaleY(0.6)
      skewX(70deg);
  }
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.cta-button {
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
  letter-spacing: 1px;
  text-transform: uppercase;
  z-index: 2;
}

.cta-button.primary {
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 219, 222, 0.3);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 219, 222, 0.5);
}

.cta-button.secondary {
  background: transparent;
  border: 2px solid #00dbde;
  color: white;
}

.cta-button.secondary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 219, 222, 0.2);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: white;
  position: relative;
  padding-bottom: 1rem;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
}

.features-section {
  position: relative;
  z-index: 2;
  padding: 80px 20px;
  /* background: rgba(16, 13, 46, 0.6); */
  backdrop-filter: blur(10px);
  width: 100%;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 219, 222, 0.3);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin: 20px 0 15px;
  color: #00dbde;
}

.feature-card p {
  opacity: 0.8;
  line-height: 1.6;
}

.icon {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow(0 0 5px rgba(0, 219, 222, 0.5));
}

.tech-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300dbde"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L20 9v6l-8 4-8-4V9l8-4.2z"/></svg>');
}

.team-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300dbde"><path d="M12 3a4 4 0 100 8 4 4 0 000-8zm0 10c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"/></svg>');
}

.product-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300dbde"><path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L18.5 8 12 11.5 5.5 8 12 4.5zM5.5 10.5L12 14l6.5-3.5V15L12 18.5 5.5 15v-4.5z"/></svg>');
}

.innovation-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300dbde"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>');
}

.footer {
  position: relative;
  z-index: 2;
  padding: 20px;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.7;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-button {
    width: 80%;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>