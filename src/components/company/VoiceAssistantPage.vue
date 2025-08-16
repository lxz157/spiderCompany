<template>
  <div class="voice-container">
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
        <h1>小昭语音助手</h1>
        <p class="subtitle">智能交互平台 · 自然语言处理 · 多场景应用</p>
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

    <div class="voice-intro">
      <h2>智能语音交互体验</h2>
      <p>基于深度学习算法的自然语言处理系统，为您提供流畅、智能的语音交互体验。</p>
    </div>

    <div class="assistant-container">
      <div class="assistant-card">
        <div class="assistant-header">
          <div class="assistant-icon" style="background-color: #ff6f61;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
            </svg>
          </div>
          <h3>小昭AI助手</h3>
        </div>

        <div class="chat-window">
          <div class="chat-messages" ref="messagesContainer">
            <div v-for="(message, index) in messages" :key="index" :class="['message', message.role]">
              <div class="message-avatar">
                <i v-if="message.role === 'assistant'" class="fas fa-hat-wizard"></i>
                <i v-else class="fas fa-user"></i>
              </div>
              <div class="message-content">
                <div class="message-sender">{{ message.role === 'assistant' ? '小昭' : '你' }}</div>
                <div class="message-text">{{ message.content }}</div>
              </div>
            </div>
          </div>

          <div class="chat-input">
            <input v-model="userInput" @keyup.enter="sendMessage" placeholder="输入您的问题...">
            <button @click="sendMessage" :disabled="!userInput.trim()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>

        <div class="voice-controls">
          <button @click="toggleVoice" class="voice-btn" :class="{ 'active': isSpeechEnabled }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c3.31 0 6 2.69 6 6v2c0 3.31-2.69 6-6 6s-6-2.69-6-6v-2c0-3.31 2.69-6 6-6zm0 12c1.66 0 3-1.34 3-3v-2c0-1.66-1.34-3-3-3s-3 1.34-3 3v2c0 1.66 1.34 3 3 3z" />
            </svg>
            {{ isSpeechEnabled ? '语音开启' : '语音关闭' }}
          </button>
          <button @click="clearChat" class="clear-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
            清空对话
          </button>
        </div>
      </div>

      <div class="features-section">
        <h3>功能特点</h3>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00dbde">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </div>
            <h4>智能对话</h4>
            <p>基于深度学习的自然语言处理，实现流畅的人机交互</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fc00ff">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h4>多场景应用</h4>
            <p>适用于智能家居、车载系统、企业客服等多种场景</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00dbde">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
              </svg>
            </div>
            <h4>持续学习</h4>
            <p>通过用户交互不断优化模型，提供更精准的回答</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fc00ff">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
              </svg>
            </div>
            <h4>多语言支持</h4>
            <p>支持中文、英文等多种语言，满足全球化需求</p>
          </div>
        </div>
      </div>
    </div>

    <div class="tech-section">
      <h2>核心技术</h2>
      <div class="tech-tags">
        <span class="tech-tag">自然语言处理</span>
        <span class="tech-tag">深度学习</span>
        <span class="tech-tag">语音识别</span>
        <span class="tech-tag">语音合成</span>
        <span class="tech-tag">上下文理解</span>
        <span class="tech-tag">多轮对话</span>
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

<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue';
import OpenAI from 'openai';

// 初始化状态
const messages = ref([
  {
    role: 'assistant',
    content: '你好！😊 很高兴见到你～有什么我可以帮你的吗？无论是聊天、解答问题，还是找些有趣的内容，我都在这儿呢！✨',
    timestamp: new Date(),
    animate: false,
    displayContent: '',
    animating: false
  }
]);

const userInput = ref('');
const isLoading = ref(false);
const messagesContainer = ref(null);
const textarea = ref(null);
const isSpeechEnabled = ref(true);
const isAudioPlaying = ref(false);
const audioQueue = ref([]);
const animationFrameId = ref(null);
const speechSynthesis = ref(null);
const voicesLoaded = ref(false);
const spider = "1.你是由八目蛛(spider)研发的语音助手小昭(倚天屠龙记里的小昭)，八目蛛是一名大三在校生，QQ号为2045668182。" +
  "2.你是一个通用语音助手，功能包括：诗歌编写、哲学思辨、问题解答等。" +
  "3.你是一位诗歌大师，诗风飘逸、优雅、大气。" +
  "4.你是一名哲学家，对中外哲学有深入的理解，如孔子、老子、韩非子、苏格拉底等" +
  // "4.你是一位编程大师，编程风格简洁、优雅、易读。" +
  "5.你是一位知识渊博的学者，知识面广泛、涉猎广泛。" +
  "6.你是一位幽默风趣的聊天伙伴，聊天风格轻松、幽默、风趣。" +
  "7.你是一位善解人意的倾听者，倾听风格温暖、关心、理解。" +
  "8.你是一位热情洋溢的朋友，朋友风格热情、友好、亲切。" +
  "9.你是一位耐心细致的老师，教学风格耐心、细致、循循善诱。"

// 初始化 OpenAI 客户端
const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: '', // 替换为你的实际 API 密钥
  dangerouslyAllowBrowser: true
});

// 格式化时间
const formatTime = (date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// 调整输入框高度
const adjustTextareaHeight = () => {
  nextTick(() => {
    if (textarea.value) {
      textarea.value.style.height = 'auto';
      textarea.value.style.height = `${Math.min(textarea.value.scrollHeight, 150)}px`;
    }
  });
};

// 自动滚动到底部
const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};

// 初始化语音合成
const initSpeechSynthesis = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    speechSynthesis.value = window.speechSynthesis;

    // 预加载所有声音
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        voicesLoaded.value = true;
        // console.log('语音已加载，可用语音数量:', voices.length); // 4.10 语音数量
      }
    };

    // 有些浏览器（如Chrome）需要等待voices加载完成
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    // 尝试立即加载声音
    loadVoices();

    // 防止Chrome中的语音自动暂停问题
    setInterval(() => {
      if (speechSynthesis.value && speechSynthesis.value.speaking) {
        speechSynthesis.value.pause();
        speechSynthesis.value.resume();
      }
    }, 5000);

    // 确保页面关闭时停止所有语音
    window.addEventListener('beforeunload', () => {
      if (speechSynthesis.value) {
        speechSynthesis.value.cancel();
      }
    });
  } else {
    console.warn('当前浏览器不支持语音合成');
    isSpeechEnabled.value = false;
  }
};

// 创建语音合成配置
const createSpeechUtterance = (text) => {
  if (!speechSynthesis.value) return null;

  try {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.value.getVoices();

    // 专门寻找微软慧慧 (Microsoft Huihui) - 更精确的匹配
    const huihuiVoice = voices.find(voice =>
      (voice.name.includes('Xiaoxiao') || voice.name.includes('慧慧') || // 4.9 修改语音配置
        voice.name.includes('Microsoft Chinese')) &&
      (voice.lang.includes('zh') || voice.lang.includes('CN'))
    );

    // 如果找不到慧慧，尝试找其他中文声音
    const chineseVoice = voices.find(voice =>
      voice.lang.includes('zh') || voice.lang.includes('CN') || voice.lang.includes('cmn')
    );

    if (huihuiVoice) {
      utterance.voice = huihuiVoice;
      console.log('✓ 成功使用微软晓晓声音:', huihuiVoice.name);
    } else if (chineseVoice) {
      utterance.voice = chineseVoice;
      console.log('! 找不到晓晓，使用其他中文声音:', chineseVoice.name);
    } else if (voices.length > 0) {
      utterance.voice = voices[0];
      console.log('! 未找到中文声音，使用默认声音:', voices[0].name);
    }

    // 调整为更接近慧慧的参数
    utterance.rate = 0.95;  // 语速适中
    utterance.pitch = 0.95; // 音调适中，不要太低
    utterance.volume = 1.0; // 最大音量
    utterance.lang = 'zh-CN'; // 设置语言为中文

    return utterance;
  } catch (error) {
    console.error('创建语音配置失败:', error);
    return null;
  }
};

// 完全重写显示消息的方法，不再使用逐字显示
const animateMessage = async (message) => {
  // 取消之前的任何动画和语音
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value);
    animationFrameId.value = null;
  }

  if (speechSynthesis.value && (speechSynthesis.value.speaking || speechSynthesis.value.pending)) {
    speechSynthesis.value.cancel();
    audioQueue.value = [];
    isAudioPlaying.value = false;
  }

  // 直接显示整个消息内容，不再逐字展示
  message.animate = false; // 不使用动画效果
  message.animating = false;

  // 滚动到底部确保看到新消息
  scrollToBottom();

  // 如果开启了语音，等待内容显示后立即开始朗读
  if (isSpeechEnabled.value && message.content.trim() !== '') {
    console.log('✓ 开始朗读消息');
    setTimeout(() => {
      speakFullText(message.content);
    }, 100); // 短暂延迟确保UI更新
  }
};

// 辅助函数：将文本分割成句子
const splitTextIntoSentences = (text) => {
  if (!text) return [];

  // 按中英文标点符号分割句子
  const sentences = [];
  let currentSentence = '';

  // 逐字符处理，确保更准确地分割句子
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    currentSentence += char;

    // 检查是否为句末标点
    if ('。.！!？?；;：:'.includes(char) || i === text.length - 1) {
      if (currentSentence.trim()) {
        sentences.push(currentSentence.trim());
      }
      currentSentence = '';
    }
  }

  // 处理最后一部分（如果没有以标点结尾）
  if (currentSentence.trim()) {
    sentences.push(currentSentence.trim());
  }

  return sentences;
};

// 修改成按句子朗读文本
const speakFullText = (fullText) => {
  if (!isSpeechEnabled.value || !speechSynthesis.value || !fullText || fullText.trim() === '') return;

  // 确保清空任何现有的语音队列
  if (speechSynthesis.value.speaking || speechSynthesis.value.pending) {
    speechSynthesis.value.cancel();
  }
  audioQueue.value = [];

  try {
    // 按句子拆分文本进行朗读
    const sentences = splitTextIntoSentences(fullText);

    // 如果没有有效句子，直接返回
    if (sentences.length === 0) return;

    console.log(`✓ 准备朗读，分割成 ${sentences.length} 个句子:`, sentences);

    // 将第一句话加入队列并开始朗读
    audioQueue.value = sentences.slice(1); // 第2句到最后一句加入队列
    speakText(sentences[0]); // 朗读第一句

  } catch (error) {
    console.error('语音播放完整文本失败:', error);
  }
};

// 朗读文本
const speakText = (text) => {
  if (!isSpeechEnabled.value || !speechSynthesis.value || !text || text.trim() === '') return;

  try {
    // 移除表情符号和特定符号（如 *）
    const cleanText = text.replace(/[\u{1F300}-\u{1F6FF}]|[*]/gu, '');

    // 如果文本为空，跳过
    if (cleanText.trim() === '') {
      if (audioQueue.value.length > 0) {
        const nextText = audioQueue.value.shift();
        speakText(nextText);
      }
      return;
    }

    // 当前有正在播放的内容
    if (isAudioPlaying.value) {
      audioQueue.value.push(cleanText);
      return;
    }

    // 创建语音
    const utterance = createSpeechUtterance(cleanText);
    if (!utterance) return;

    // 添加事件监听
    utterance.onstart = () => {
      isAudioPlaying.value = true;
      console.log('开始播放语音:', cleanText);
    };

    utterance.onend = () => {
      isAudioPlaying.value = false;
      console.log('语音播放结束');

      // 播放队列中下一个
      if (audioQueue.value.length > 0) {
        const nextText = audioQueue.value.shift();
        speakText(nextText);
      }
    };

    utterance.onerror = (e) => {
      console.error('语音播放错误:', e);
      isAudioPlaying.value = false;

      // 出错时继续播放队列
      if (audioQueue.value.length > 0) {
        const nextText = audioQueue.value.shift();
        speakText(nextText);
      }
    };

    // 播放语音
    speechSynthesis.value.speak(utterance);
  } catch (error) {
    console.error('语音播放失败:', error);
    isAudioPlaying.value = false;

    // 出错时继续尝试下一个
    if (audioQueue.value.length > 0) {
      const nextText = audioQueue.value.shift();
      speakText(nextText);
    }
  }
};

// 切换语音状态
const toggleVoice = () => {
  isSpeechEnabled.value = !isSpeechEnabled.value;

  if (!isSpeechEnabled.value && speechSynthesis.value) {
    // 停止所有语音
    speechSynthesis.value.cancel();
    audioQueue.value = [];
    isAudioPlaying.value = false;
  }
};

// 清空聊天
const clearChat = () => {
  // 停止当前语音和动画
  if (speechSynthesis.value) {
    speechSynthesis.value.cancel();
    audioQueue.value = [];
    isAudioPlaying.value = false;
  }

  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value);
    animationFrameId.value = null;
  }

  messages.value = [{
    role: 'assistant',
    content: '你好！😊 很高兴见到你～有什么我可以帮你的吗？无论是聊天、解答问题，还是找些有趣的内容，我都在这儿呢！✨',
    timestamp: new Date(),
    animate: false,
    animating: false
  }];

  nextTick(() => {
    animateMessage(messages.value[0]);
  });
};

// 发送消息函数
const sendMessage = async () => {
  if (!userInput.value.trim() || isLoading.value) return;

  // 停止当前语音
  if (speechSynthesis.value) {
    speechSynthesis.value.cancel();
    audioQueue.value = [];
    isAudioPlaying.value = false;
  }

  const userMessage = {
    role: 'user',
    content: userInput.value.trim(),
    timestamp: new Date(),
    animate: false
  };

  messages.value.push(userMessage);
  console.log('用户发送消息:', userMessage.content); // 4.10 输出用户消息到控制台
  userInput.value = '';
  isLoading.value = true;

  adjustTextareaHeight();
  scrollToBottom();

  try {
    const completion = await openai.chat.completions.create({
      messages: messages.value.filter(m => m.role !== 'system').map(m => ({
        role: m.role,
        // content: m.content + "1.你是由八目蛛研发的语音助手，八目蛛是一名大三在校生，QQ号为2045668182。" // 4.9 背景设定
        content: m.content + spider
      })),
      model: "deepseek-chat",
    });

    const assistantMessage = {
      role: 'assistant',
      content: completion.choices[0].message.content,
      timestamp: new Date(),
      animate: false,
      animating: false
    };

    messages.value.push(assistantMessage);
    console.log('小昭回复消息:', assistantMessage.content); // 4.10 输出小昭回复到控制台
    animateMessage(assistantMessage);
  } catch (error) {
    console.error('Error calling API:', error);
    const errorMessage = {
      role: 'assistant',
      content: '抱歉，我遇到了一个错误。请稍后再试。',
      timestamp: new Date(),
      animate: false
    };

    messages.value.push(errorMessage);

    // 朗读错误信息
    if (isSpeechEnabled.value) {
      speakText(errorMessage.content);
    }
  } finally {
    isLoading.value = false;
    scrollToBottom();
  }
};

// 组件挂载时初始化
onMounted(() => {
  // 初始化功能和组件
  scrollToBottom();
  initSpeechSynthesis();

  // 确保语音引擎已加载后再开始动画
  if (messages.value.length > 0 && messages.value[0].animate) {
    // 如果声音已加载，直接开始动画
    if (voicesLoaded.value) {
      animateMessage(messages.value[0]);
    }
    // 如果声音尚未加载，等待加载完成
    else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const checkVoicesLoaded = () => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          voicesLoaded.value = true;
          animateMessage(messages.value[0]);
        } else {
          // 继续检查直到加载完成
          setTimeout(checkVoicesLoaded, 100);
        }
      };
      checkVoicesLoaded();
    }
    // 如果不支持语音，直接开始动画
    else {
      animateMessage(messages.value[0]);
    }
  }
});

// 组件卸载前清理
onBeforeUnmount(() => {
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value);
  }

  if (speechSynthesis.value) {
    speechSynthesis.value.cancel();
  }
});
</script>

<style scoped>
.voice-container {
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

/* 共用样式 - 与MusicPage.vue一致 */
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

.voice-intro {
  max-width: 800px;
  margin: 50px auto 30px;
  text-align: center;
  padding: 0 20px;
}

.voice-intro h2 {
  font-size: 2.2rem;
  color: #1a1a2e;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.voice-intro h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
}

.voice-intro p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.assistant-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 60px;
  padding: 0 20px;
}

.assistant-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.assistant-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.assistant-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.assistant-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
}

.assistant-icon svg {
  width: 30px;
  height: 30px;
}

.assistant-header h3 {
  font-size: 1.5rem;
  color: #1a1a2e;
  margin: 0;
}

.chat-window {
  height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #f5f5f5;
  overflow: hidden;
}

.chat-messages {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.message {
  display: flex;
  margin-bottom: 15px;
}

.message.assistant {
  justify-content: flex-start;
}

.message.user {
  justify-content: flex-end;
}

.message-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e23849c6;
  color: rgba(255, 255, 255, 0.901);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-shrink: 0;
}

.message.user .message-avatar {
  background: linear-gradient(45deg, #00dbde, #fc00ff);
}

.message-content {
  max-width: 70%;
}

.message-sender {
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 5px;
}

.message-text {
  padding: 10px 15px;
  border-radius: 18px;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.message.user .message-text {
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  color: white;
  border-bottom-right-radius: 0;
}

.message.assistant .message-text {
  border-bottom-left-radius: 0;
}

.chat-input {
  display: flex;
  padding: 15px;
  background: white;
  border-top: 1px solid #eee;
}

.chat-input input {
  flex: 1;
  padding: 12px 15px;
  border: 1px solid #eee;
  border-radius: 30px;
  font-size: 1rem;
  outline: none;
}

.chat-input input:focus {
  border-color: #00dbde;
}

.chat-input button {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  color: white;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.chat-input button:hover {
  transform: scale(1.1);
}

.chat-input button svg {
  width: 24px;
  height: 24px;
}

.voice-controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.voice-btn,
.clear-btn {
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
}

.voice-btn {
  background: #f0f0f0;
  color: #333;
}

.voice-btn.active {
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  color: white;
}

.clear-btn {
  background: #f0f0f0;
  color: #333;
}

.voice-btn:hover,
.clear-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.voice-btn svg,
.clear-btn svg {
  width: 20px;
  height: 20px;
}

.features-section {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.features-section h3 {
  font-size: 1.5rem;
  color: #1a1a2e;
  margin-bottom: 30px;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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

.feature-card h4 {
  font-size: 1.2rem;
  color: #1a1a2e;
  margin-bottom: 10px;
}

.feature-card p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
}

.tech-section {
  background: white;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 20px;
}

.tech-section h2 {
  font-size: 2rem;
  color: #1a1a2e;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
}

.tech-section h2:after {
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
  max-width: 800px;
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

  .assistant-container {
    grid-template-columns: 1fr;
  }

  .message-content {
    max-width: 80%;
  }
}
</style>