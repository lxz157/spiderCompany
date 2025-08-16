<template>
  <div class="music-container">
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
        <h1>八目音乐</h1>
        <p class="subtitle">智能音乐平台 · 高品质音乐流媒体服务</p>
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

    <div class="music-intro">
      <h2>沉浸式音乐体验</h2>
      <p>基于深度学习算法的个性化音乐推荐系统，为您提供高品质音乐流媒体服务。</p>
    </div>

    <div class="player-container">
      <div class="player-card">
        <div class="player-header">
          <div class="player-icon" style="background-color: #ff4d4d;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
          <h3>正在播放</h3>
        </div>

        <div class="now-playing">
          <div class="album-art" :style="{ backgroundImage: `url(${currentSong.art})` }"></div>
          <div class="song-info">
            <h4>{{ currentSong.title }}</h4>
            <p>{{ currentSong.artist }}</p>
            <div class="progress-container">
              <div class="progress-bar" :style="{ width: progress + '%' }"></div>
            </div>
            <div class="time-display">
              <span>{{ currentTime }}</span>
              <span>{{ duration }}</span>
            </div>
          </div>
        </div>

        <div class="player-controls">
          <button @click="prevSong" class="control-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>
          <button @click="togglePlay" class="control-btn play-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path v-if="!isPlaying" d="M8 5v14l11-7z" />
              <path v-else d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          </button>
          <button @click="nextSong" class="control-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
          <div class="volume-control">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
            <input type="range" min="0" max="100" v-model="volume" @input="setVolume" class="volume-slider">
          </div>
        </div>
      </div>

      <div class="playlist">
        <h3>推荐歌单</h3>
        <div class="song-list">
          <div v-for="(song, index) in songs" :key="index" class="song-item"
            :class="{ active: currentSongIndex === index }" @click="playSong(index)">
            <div class="song-number">{{ index + 1 }}</div>
            <div class="song-details">
              <div class="song-title">{{ song.title }}</div>
              <div class="song-artist">{{ song.artist }}</div>
            </div>
            <div class="song-duration">{{ song.duration }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="music-features">
      <h2>产品特色</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00dbde">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
          <h3>AI智能推荐</h3>
          <p>基于您的听歌习惯和偏好，智能推荐您可能喜欢的音乐</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fc00ff">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <h3>无损音质</h3>
          <p>提供高品质无损音乐，还原音乐最真实的声音</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00dbde">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <h3>心情匹配</h3>
          <p>根据您当前的心情状态，推荐适合的音乐</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fc00ff">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <h3>全球曲库</h3>
          <p>500万+曲库，涵盖全球各种风格的音乐</p>
        </div>
      </div>
    </div>

    <footer class="project-footer">
      <div class="footer-content">
        <p>© 2030 八目蛛网络有限公司 版权所有(本页面纯属虚构)</p>
        <p>创新科技 · 引领未来 · 智启新元</p>
      </div>
    </footer>

    <audio ref="audioPlayer" @timeupdate="updateProgress" @ended="nextSong"></audio>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// 音乐列表数据
const songs = ref([
  {
    title: "A Choice for Love",
    artist: "八目AI乐团",
    duration: "3:26",
    file: "/music/A Choice for Love.mp3",
    art: "/icon/AChoiceforLove.png"
  },
  {
    title: "Dancing in Shadows",
    artist: "八目AI乐团",
    duration: "3:19",
    file: "/music/Dancing in Shadows.mp3",
    art: "/icon/DancinginShadows.png"
  },
  {
    title: "Moonlit Lament",
    artist: "八目AI乐团",
    duration: "2:55",
    file: "/music/Moonlit Lament.mp3",
    art: "/icon/MoonlitLament.png"
  },
  {
    title: "Silent Whisper",
    artist: "八目AI乐团",
    duration: "3:02",
    file: "/music/Silent Whisper.mp3",
    art: "/icon/SilentWhisper.png"
  },
  {
    title: "The Last Victory",
    artist: "八目AI乐团",
    duration: "2:53",
    file: "/music/The Last Victory.mp3",
    art: "/icon/TheLastVictory.png"
  },
  {
    title: "The Unbroken Flame",
    artist: "八目AI乐团",
    duration: "3:39",
    file: "/music/The Unbroken Flame.mp3",
    art: "/icon/TheUnbrokenFlame.png"
  },
  {
    title: "The Wolf's Song",
    artist: "八目AI乐团",
    duration: "3:39",
    file: "/music/The Wolf's Song.mp3",
    art: "/icon/TheWolf'sSong.png"
  },
  {
    title: "Unspoken Love",
    artist: "八目AI乐团",
    duration: "3:36",
    file: "/music/Unspoken Love.mp3",
    art: "/icon/UnspokenLove.png"
  }
]);

const audioPlayer = ref(null);
const isPlaying = ref(false);
const currentSongIndex = ref(0);
const progress = ref(0);
const currentTime = ref("0:00");
const duration = ref("0:00");
const volume = ref(70);

const currentSong = computed(() => songs.value[currentSongIndex.value]);

// 播放/暂停
const togglePlay = () => {
  if (isPlaying.value) {
    audioPlayer.value.pause();
  } else {
    audioPlayer.value.play();
  }
  isPlaying.value = !isPlaying.value;
};

// 播放指定歌曲
const playSong = (index) => {
  currentSongIndex.value = index;
  audioPlayer.value.src = currentSong.value.file;
  audioPlayer.value.play();
  isPlaying.value = true;
};

// 下一首
const nextSong = () => {
  currentSongIndex.value = (currentSongIndex.value + 1) % songs.value.length;
  audioPlayer.value.src = currentSong.value.file;
  audioPlayer.value.play();
  isPlaying.value = true;
};

// 上一首
const prevSong = () => {
  currentSongIndex.value = (currentSongIndex.value - 1 + songs.value.length) % songs.value.length;
  audioPlayer.value.src = currentSong.value.file;
  audioPlayer.value.play();
  isPlaying.value = true;
};

// 更新进度条
const updateProgress = () => {
  if (audioPlayer.value.duration) {
    progress.value = (audioPlayer.value.currentTime / audioPlayer.value.duration) * 100;

    // 更新当前时间显示
    const minutes = Math.floor(audioPlayer.value.currentTime / 60);
    const seconds = Math.floor(audioPlayer.value.currentTime % 60);
    currentTime.value = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    // 更新总时长显示
    const durMinutes = Math.floor(audioPlayer.value.duration / 60);
    const durSeconds = Math.floor(audioPlayer.value.duration % 60);
    duration.value = `${durMinutes}:${durSeconds < 10 ? '0' + durSeconds : durSeconds}`;
  }
};

// 设置音量
const setVolume = () => {
  audioPlayer.value.volume = volume.value / 100;
};

// 初始化
onMounted(() => {
  audioPlayer.value.volume = volume.value / 100;
  audioPlayer.value.src = currentSong.value.file;
});
</script>

<style scoped>
.music-container {
  max-width: 100vw;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "楷体", 'Arial', sans-serif;
  color: #333;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

/* 共用样式 - 与LatestProducts.vue一致 */
.start-header {
  position: relative;
  height: 300px;
  padding: 100px 20px;
  background: linear-gradient(135deg, #0f0c29 0%, #24243e 100%);
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

.meteor {
  rotate: 50deg;
  position: absolute;
  height: 5px;
  animation: meteorFall 6s linear infinite;
}

.meteor:nth-child(1) {
  left: 10%;
  animation-delay: 1s;
  background: linear-gradient(to right, transparent, rgba(0, 219, 222, 0.8), white);
  filter: drop-shadow(0 0 2px rgba(0, 219, 222, 0.8)) drop-shadow(0 0 5px white);
}

.meteor:nth-child(2) {
  left: 20%;
  animation-delay: 2s;
  background: linear-gradient(to right, transparent, rgba(252, 0, 255, 0.8), white);
  filter: drop-shadow(0 0 2px rgba(252, 0, 255, 0.8)) drop-shadow(0 0 5px white);
}

.meteor:nth-child(3) {
  left: 30%;
  animation-delay: 3s;
  background: linear-gradient(to right, transparent, rgba(0, 219, 222, 0.8), white);
  filter: drop-shadow(0 0 2px rgba(0, 219, 222, 0.8)) drop-shadow(0 0 5px white);
}

.meteor:nth-child(4) {
  left: 40%;
  animation-delay: 4s;
  background: linear-gradient(to right, transparent, rgba(252, 0, 255, 0.8), white);
  filter: drop-shadow(0 0 2px rgba(252, 0, 255, 0.8)) drop-shadow(0 0 5px white);
}

.meteor:nth-child(5) {
  left: 60%;
  animation-delay: 5s;
  background: linear-gradient(to right, transparent, rgba(0, 219, 222, 0.8), white);
  filter: drop-shadow(0 0 2px rgba(0, 219, 222, 0.8)) drop-shadow(0 0 5px white);
}

.meteor:nth-child(6) {
  left: 70%;
  animation-delay: 6s;
  background: linear-gradient(to right, transparent, rgba(252, 0, 255, 0.8), white);
  filter: drop-shadow(0 0 2px rgba(252, 0, 255, 0.8)) drop-shadow(0 0 5px white);
}

.meteor:nth-child(7) {
  left: 80%;
  animation-delay: 7s;
  background: linear-gradient(to right, transparent, rgba(0, 219, 222, 0.8), white);
  filter: drop-shadow(0 0 2px rgba(0, 219, 222, 0.8)) drop-shadow(0 0 5px white);
}

.meteor:nth-child(8) {
  left: 90%;
  animation-delay: 8s;
  background: linear-gradient(to right, transparent, rgba(252, 0, 255, 0.8), white);
  filter: drop-shadow(0 0 2px rgba(252, 0, 255, 0.8)) drop-shadow(0 0 5px white);
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

.header-content {
  position: relative;
  z-index: 3;
  color: white;
  max-width: 800px;
  padding: 40px;
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

.music-intro {
  max-width: 800px;
  margin: 50px auto 30px;
  text-align: center;
  padding: 0 20px;
}

.music-intro h2 {
  font-size: 2.2rem;
  color: #1a1a2e;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.music-intro h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
}

.music-intro p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

/* 播放器样式 */
.player-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 60px;
  padding: 0 20px;
}

.player-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.player-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.player-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.player-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
}

.player-icon svg {
  width: 30px;
  height: 30px;
}

.player-header h3 {
  font-size: 1.5rem;
  color: #1a1a2e;
  margin: 0;
}

.now-playing {
  display: flex;
  margin-bottom: 30px;
}

.album-art {
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
}

.song-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.song-info h4 {
  font-size: 1.5rem;
  color: #1a1a2e;
  margin: 0 0 5px 0;
}

.song-info p {
  color: #666;
  margin: 0 0 20px 0;
}

.progress-container {
  width: 100%;
  height: 6px;
  background: #eee;
  border-radius: 3px;
  margin-bottom: 5px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  border-radius: 3px;
  transition: width 0.1s;
}

.time-display {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #666;
}

.player-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.control-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f0f0f0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
}

.control-btn:hover {
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 100%);
  color: white;
  transform: scale(1.1);
}

.control-btn svg {
  width: 24px;
  height: 24px;
}

.play-btn {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  color: white;
}

.play-btn:hover {
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(0, 219, 222, 0.3);
}

.volume-control {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
}

.volume-control svg {
  width: 20px;
  height: 20px;
  color: #666;
}

.volume-slider {
  width: 100px;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: #ddd;
  border-radius: 2px;
  outline: none;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  cursor: pointer;
}

.volume-slider::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  cursor: pointer;
}

/* 播放列表样式 */
.playlist {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.playlist h3 {
  font-size: 1.5rem;
  color: #1a1a2e;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.song-list {
  max-height: 500px;
  overflow-y: auto;
}

.song-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.song-item:hover {
  background: rgba(0, 219, 222, 0.05);
}

.song-item.active {
  background: linear-gradient(90deg, rgba(0, 219, 222, 0.1), rgba(252, 0, 255, 0.1));
  border-left: 3px solid #00dbde;
}

.song-number {
  width: 30px;
  text-align: center;
  color: #666;
  font-weight: bold;
  margin-right: 15px;
}

.song-item.active .song-number {
  color: #00dbde;
}

.song-details {
  flex: 1;
}

.song-title {
  font-weight: bold;
  color: #1a1a2e;
  margin-bottom: 5px;
}

.song-item.active .song-title {
  color: #00dbde;
}

.song-artist {
  font-size: 0.9rem;
  color: #666;
}

.song-duration {
  color: #666;
  font-size: 0.9rem;
}

/* 特色功能区域 */
.music-features {
  background: white;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 20px;
}

.music-features h2 {
  font-size: 2rem;
  color: #1a1a2e;
  margin-bottom: 50px;
  position: relative;
  display: inline-block;
}

.music-features h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  background: rgba(0, 219, 222, 0.1);
}

.feature-icon svg {
  width: 30px;
  height: 30px;
}

.feature-card h3 {
  font-size: 1.3rem;
  color: #1a1a2e;
  margin-bottom: 15px;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* 页脚样式 */
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

/* 响应式设计 */
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
  .player-container {
    grid-template-columns: 1fr;
  }

  .now-playing {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .album-art {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>