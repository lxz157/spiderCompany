<template>
  <div class="navigation-container">
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
        <h1>八目导航</h1>
        <p class="subtitle">智能导航平台 · 精准推荐 · 高效资源整合</p>
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

    <div class="nav-intro">
      <h2>您的智能导航助手</h2>
      <p>八目导航基于AI智能推荐算法，为您提供精准的网站导航服务，整合全网优质资源，提升信息获取效率。</p>
    </div>

    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="搜索网站..." class="search-input" @keyup.enter="performSearch"
        style="width: 40vw;">
      <button class="search-btn" @click="performSearch">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </button>
    </div>

    <div class="category-tabs">
      <button v-for="(category, index) in categories" :key="index" @click="activeCategory = index"
        :class="['category-tab', { active: activeCategory === index }]">
        {{ category }}
      </button>
    </div>

    <main class="links-main">
      <div v-for="(categoryLinks, index) in categorizedLinks" :key="index" v-show="activeCategory === index"
        class="category-section">
        <h2 class="category-title">{{ categories[index] }}</h2>
        <div class="links-grid">
          <a v-for="link in categoryLinks" :key="link.url" :href="link.url" target="_blank" class="nav-link-card">
            <div class="link-icon">
              <i :class="link.icon || 'fas fa-link'"></i>
            </div>
            <div class="link-info">
              <h3 class="link-name">{{ link.name }}</h3>
              <p class="link-desc">{{ link.desc }}</p>
            </div>
          </a>
        </div>
      </div>
    </main>

    <div class="stats-section">
      <h2>平台数据</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon" style="background-color: #00dbde;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-value">800万+</div>
            <div class="stat-label">活跃用户</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background-color: #fc00ff;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-value">50,000+</div>
            <div class="stat-label">优质网站</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon" style="background-color: #8f00ff;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-value">98.7%</div>
            <div class="stat-label">用户满意度</div>
          </div>
        </div>
      </div>
    </div>

    <div class="tech-section">
      <h2>核心技术</h2>
      <div class="tech-tags">
        <span class="tech-tag">AI推荐算法</span>
        <span class="tech-tag">用户行为分析</span>
        <span class="tech-tag">大数据处理</span>
        <span class="tech-tag">实时索引</span>
        <span class="tech-tag">个性化定制</span>
        <span class="tech-tag">多维度评价</span>
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
import { ref } from 'vue';

const searchQuery = ref('');
const activeCategory = ref(0);

const categories = ref(['AI工具', '通用工具', '精美壁纸', '休闲娱乐', '国家官网', '开发教程', '研公就业']);

const categorizedLinks = ref([
  // AI工具
  [
    { name: 'BandLab', url: 'https://www.bandlab.com/feed/trending', icon: 'fas fa-music', desc: '在线音乐创作和分享社区，支持协作创作' },
    { name: 'Canva', url: 'https://www.canva.cn/', icon: 'fas fa-palette', desc: '在线平面设计平台，提供丰富的模板和设计工具' },
    { name: 'DeepSeek', url: 'https://chat.deepseek.com/', icon: 'fas fa-brain', desc: '强大的AI聊天助手，支持长文本和代码理解' },
    { name: 'Asksia', url: 'https://www.asksia.ai/', icon: 'fas fa-lightbulb', desc: '智能问答AI，提供专业领域知识解答' },
    { name: '学术范', url: 'https://www.xueshufan.com/', icon: 'fas fa-graduation-cap', desc: '学术研究工具，论文写作助手' },
    { name: 'LibLib', url: 'https://www.liblib.art/', icon: 'fas fa-palette', desc: 'AI绘画平台，艺术创作工具' },
    { name: 'TensorArt', url: 'https://tusiart.com/', icon: 'fas fa-paint-brush', desc: 'AI艺术生成器，创意设计平台' },
    { name: '小方包装', url: 'https://www.xiaofang.design/home', icon: 'fas fa-box', desc: '产品包装设计AI工具' },
    { name: '纳米AI搜索', url: 'https://www.n.cn/', icon: 'fas fa-robot', desc: 'AI搜索工具' },
    { name: 'Kimi', url: 'https://www.kimi.com/', icon: 'fas fa-comments', desc: '智能AI助手，支持长文本处理和复杂推理' },
    { name: '豆包AI', url: 'https://www.doubao.com/chat/', icon: 'fas fa-robot', desc: '字节跳动推出的AI对话助手' },
    { name: '通义千问', url: 'https://www.tongyi.com/qianwen', icon: 'fas fa-brain', desc: '阿里巴巴的通用大模型AI' },
    { name: '文心一言', url: 'https://yiyan.baidu.com/', icon: 'fas fa-comment-alt', desc: '百度智能对话与创作平台' },
    { name: '智谱清言', url: 'https://chatglm.cn/main/alltoolsdetail?lang=zh', icon: 'fas fa-cogs', desc: 'ChatGLM多功能AI工具' },
    { name: '腾讯元宝', url: 'https://yuanbao.tencent.com/', icon: 'fas fa-coins', desc: '腾讯推出的AI助手平台' },
    { name: '吐司AI', url: 'https://tusi.cn/', icon: 'fas fa-robot', desc: 'AI工具集合，提供多种智能服务' },
    { name: 'SeaArt.AI', url: 'https://www.seaart.me/zhCN?ad=070218&refer=17yongai.com', icon: 'fas fa-palette', desc: 'AI艺术创作平台，支持多种风格生成' },
    { name: 'ChatSandBox', url: 'https://chatsandbox.com/chat/openai-gpt-4o', icon: 'fas fa-comment-dots', desc: '在线体验OpenAI GPT-4o等AI模型' },
  ],
  // 通用工具
  [
    { name: 'Online Audio Converter', url: 'https://audio.online-convert.com/convert-to-mp3', icon: 'fas fa-file-audio', desc: '在线音频转换工具，支持多种格式转MP3' },
    { name: '万能转换', url: 'https://smallpdf.com/cn/pdf-to-jpg#r=convert-to-image', icon: 'fas fa-exchange-alt', desc: 'PDF转图片、Word等格式转换工具' },
    { name: '设备修理', url: 'https://zh.ifixit.com/', icon: 'fas fa-tools', desc: '电子设备维修指南和教程' },
    { name: '一证通查', url: 'https://getsimnum.caict.ac.cn/#/', icon: 'fas fa-id-card', desc: '查询名下电话卡数量' },
    { name: '临时邮箱1', url: 'https://smail.pw/zh-CN/', icon: 'fas fa-envelope', desc: '一次性临时邮箱服务' },
    { name: '临时邮箱2', url: 'https://gmail.pm/', icon: 'fas fa-mail-bulk', desc: '匿名临时邮箱生成器' },
    { name: '终生教育', url: 'https://le.ouchn.cn/home', icon: 'fas fa-university', desc: '国家开放大学在线学习平台' },
    { name: '讯飞听见', url: 'https://www.iflyrec.com', icon: 'fas fa-headphones', desc: '语音转文字服务平台' },
    { name: '通义听悟', url: 'https://tingwu.aliyun.com/home', icon: 'fas fa-comment-dots', desc: '阿里云智能语音转写平台' },
    { name: '万兴喵影', url: 'https://miao.wondershare.cn', icon: 'fas fa-video', desc: '视频剪辑创作工具' },
    { name: 'DeepVo.ai', url: 'https://deepvo.ai/zh', icon: 'fas fa-robot', desc: 'AI语音合成与转换平台' },
    { name: 'NewsNow', url: 'https://newsnow.busiyi.world/c/hottest', icon: 'fas fa-newspaper', desc: '实时热点新闻聚合平台' },
    { name: 'Photopea(PS平替)', url: 'https://www.photopea.com/', icon: 'fas fa-image', desc: '在线图像编辑器，功能类似Photoshop' },
  ],
  // 精美壁纸
  [
    { name: 'Pixbay', url: 'https://pixabay.com/zh/', icon: 'fas fa-camera', desc: '免费高清图片和壁纸下载' },
    { name: 'Unsplash', url: 'https://unsplash.com/', icon: 'fas fa-images', desc: '专业摄影师分享的高质量图片' },
    { name: 'Pexels', url: 'https://www.pexels.com/zh-cn/', icon: 'fas fa-photo-video', desc: '免费素材图片和视频库' },
    { name: 'Pxhere', url: 'https://pxhere.com/zh/', icon: 'fas fa-mountain', desc: '免版权图片资源网站' },
    { name: 'Foodiesfeed', url: 'https://www.foodiesfeed.com/', icon: 'fas fa-utensils', desc: '美食主题高清图片' },
    { name: '视觉中国', url: 'https://www.vcg.com/', icon: 'fas fa-eye', desc: '专业创意图片素材平台' },
    { name: 'WallpapersCraft', url: 'https://wallpaperscraft.com/catalog/nature', icon: 'fas fa-image', desc: '海量高清壁纸库，支持按分类/分辨率筛选' },
    { name: '4K WallPapers', url: 'https://4kwallpapers.com/', icon: 'fas fa-desktop', desc: '专精4K/5K/8K超高清壁纸下载' },
    { name: '极简壁纸', url: 'https://www.jijianzy.com/bz2/', icon: 'fas fa-paint-brush', desc: '国内优质壁纸站，含二次元/风景等资源' },
    { name: 'WallPaper Abyss', url: 'https://wallpaperaccess.com/abyss', icon: 'fas fa-gamepad', desc: '游戏/动漫主题壁纸库，多设备适配' },
    { name: '必应壁纸', url: 'https://bing.wdbyte.com/zh-cn/', icon: 'fas fa-globe', desc: '每日自动同步必应搜索背景图（4K）' },
    { name: 'Simple Desktops', url: 'https://simpledesktops.com/', icon: 'fas fa-minimize', desc: '极简风格插画壁纸，适合Mac/Windows' },
    { name: '故宫壁纸', url: 'https://www.dpm.org.cn/lights/royal.html', icon: 'fas fa-landmark', desc: '故宫博物院官方出品，中国风高清壁纸' },
    { name: 'FreePik', url: 'https://www.freepik.com/', icon: 'fas fa-images', desc: '免费矢量图、照片和PSD素材下载' },
  ],
  // 休闲娱乐
  [
    { name: 'VidHub', url: 'https://vidhub3.top/', icon: 'fas fa-film', desc: '高清影视资源在线观看' },
    { name: 'BiliBili', url: 'https://www.bilibili.com/', icon: 'fab fa-bilibili', desc: '二次元文化视频分享平台' },
    { name: 'A站', url: 'https://www.acfun.cn/bangumilist', icon: 'fas fa-tv', desc: 'AcFun弹幕视频网站' },
    { name: '茶杯狐', url: 'https://www.cupfox.in/', icon: 'fas fa-mug-hot', desc: '影视资源搜索引擎' },
    { name: '读漫屋', url: 'https://www.dumanwu.com/', icon: 'fas fa-book-open', desc: '在线漫画阅读平台' },
    { name: '央视网', url: 'https://tv.cctv.com/', icon: 'fas fa-landmark', desc: '央视官方视频直播平台' },
    { name: '雅书博客', url: 'https://yabook.blog/', icon: 'fas fa-book', desc: '电子书资源下载平台' },
    { name: 'Gutenberg', url: 'https://www.gutenberg.org/', icon: 'fas fa-book-open', desc: '全球最大免费公版电子书库' },
    { name: 'Ofiii 歐飛', url: 'https://ofiii.com/', icon: 'fas fa-tv', desc: '合法正版電視頻道、新聞直播，戲劇、電影、動漫、綜藝娛樂，免註冊免費看' },
    { name: 'MuteFun', url: 'https://mutefun.com/', icon: 'fas fa-film', desc: '提供各类动漫资源' },
    { name: 'AnimeHeaven', url: 'https://animeheaven.me/', icon: 'fas fa-dragon', desc: '英文字幕动漫网站，提供最新动漫资源和发布计划' },
    { name: 'Nyafun', url: 'https://nyafun.com/', icon: 'fas fa-cat', desc: '动漫资源网站' },
  ],
  // 国家官网
  [
    { name: '中国科普博览', url: 'https://www.kepu.net.cn/', icon: 'fas fa-flask', desc: '中国科学院科学传播平台' },
    { name: '中国国家图书馆', url: 'https://www.nlc.cn/web/index.shtml', icon: 'fas fa-book', desc: '国家图书馆数字资源平台' },
    { name: '国家哲学社会科学', url: 'https://ncpssd.org/', icon: 'fas fa-university', desc: '哲学社会科学文献中心' },
    { name: '中央纪委国家监委', url: 'https://www.ccdi.gov.cn/', icon: 'fas fa-gavel', desc: '纪检监察机关官方网站' },
    { name: '国家市场监督管理', url: 'https://www.samr.gov.cn/', icon: 'fas fa-balance-scale', desc: '市场监管总局官网' },
    { name: '国家统计局', url: 'https://www.stats.gov.cn/', icon: 'fas fa-chart-line', desc: '国家数据统计官方网站' },
    { name: '国家企业信用信息公示系统', url: 'https://www.gsxt.gov.cn/corp-query-homepage.html', icon: 'fas fa-landmark', desc: '企业信用信息查询平台' },
    { name: 'ICP备案查询', url: 'https://beian.miit.gov.cn/#/Integrated/index', icon: 'fas fa-address-card', desc: '工信部ICP/IP备案查询系统' },
    { name: '国家企业信用信息公示系统', url: 'https://www.gsxt.gov.cn/index.html', icon: 'fas fa-landmark', desc: '官方企业信用信息查询平台，提供企业注册登记、行政许可等信息' },
    { name: '国家法律法规数据库', url: 'https://flk.npc.gov.cn/', icon: 'fas fa-gavel', desc: '权威法律法规查询系统，收录全国人大及其常委会制定的法律等规范性文件' },
    { name: '中国裁判文书网', url: 'https://wenshu.court.gov.cn/', icon: 'fas fa-file-contract', desc: '最高人民法院主办的裁判文书公开平台，提供各类案件判决文书查询' },
  ],
  // 开发教程
  [
    { name: 'W3school', url: 'https://www.w3school.com.cn/?ref=huamao.vip', icon: 'fab fa-html5', desc: 'Web开发技术学习平台' },
    { name: '菜鸟教程(Runoob)', url: 'https://www.runoob.com/', icon: 'fas fa-code', desc: '编程入门学习网站' },
    { name: '极客教程', url: 'https://geek-docs.com/', icon: 'fas fa-laptop-code', desc: '技术文档和编程教程' },
    { name: '程序员导航', url: 'http://www.cxy521.com/', icon: 'fas fa-compass', desc: '开发者资源导航网站' },
    { name: '香港教育', url: 'https://www.eduhk.hk/ocio/grammarly', icon: 'fas fa-language', desc: '英语写作辅助工具' },
    { name: '清华镜像', url: 'https://mirrors.tuna.tsinghua.edu.cn/', icon: 'fas fa-server', desc: '清华大学开源软件镜像站' },
    { name: '安卓开发', url: 'https://developer.android.google.cn/?hl=zh-cn', icon: 'fab fa-android', desc: '谷歌官方安卓开发者文档' },
    { name: 'Ubuntu', url: 'https://www.releases.ubuntu.com/', icon: 'fab fa-ubuntu', desc: 'Ubuntu系统镜像下载' },
    { name: '博客园', url: 'https://www.cnblogs.com/', icon: 'fas fa-blog', desc: '开发者技术博客社区' },
    { name: 'NodeJS', url: 'https://nodejs.org/zh-cn', icon: 'fab fa-node-js', desc: 'Node.js官方中文网站' }
  ],
  // 考研考公&就业
  [
    { name: '研招网', url: 'https://yz.chsi.com.cn/', icon: 'fas fa-user-graduate', desc: '研究生招生信息官方网站' },
    { name: '考研帮', url: 'https://www.kaoyan.com/', icon: 'fas fa-book-reader', desc: '考研资讯和学习平台' },
    { name: '国家公务员局', url: 'http://www.scs.gov.cn/', icon: 'fas fa-landmark', desc: '国家公务员考试官方网站' },
    { name: '军队人才网', url: 'http://81rc.81.cn/wzry/index.html', icon: 'fas fa-shield-alt', desc: '军队文职人员招考平台' },
    { name: '中国政府网', url: 'https://www.gov.cn/', icon: 'fas fa-flag', desc: '中央人民政府门户网站' },
    { name: '公务员体检标准', url: 'https://www.gov.cn/xinwen/2016-10/13/content_5118377.htm', icon: 'fas fa-heartbeat', desc: '公务员录用体检通用标准' },
    { name: '国家烟草专卖局', url: 'http://www.tobacco.gov.cn/gjyc/zpxx/list.shtml', icon: 'fas fa-landmark', desc: '国家烟草专卖局招聘信息发布平台' },
    { name: '国家电网招聘', url: 'https://zhaopin.sgcc.com.cn/sgcchr/static/home.html', icon: 'fas fa-bolt', desc: '国家电网有限公司统一招聘平台' },
    { name: '中国移动招聘', url: 'https://job.10086.cn/personal/campus/', icon: 'fas fa-mobile-alt', desc: '中国移动校园招聘官方网站' },
    { name: '中国电信招聘', url: 'https://job.chinatelecom.com.cn/wt/TELE/web/index#/', icon: 'fas fa-phone-alt', desc: '中国电信集团有限公司招聘平台' },
    { name: 'Boss直聘', url: 'https://www.zhipin.com/', icon: 'fas fa-comments', desc: 'Boss直聘招聘平台' },
    { name: '前程无忧', url: 'https://www.51job.com/', icon: 'fas fa-briefcase', desc: '前程无忧招聘网站' },
    { name: '猎聘', url: 'https://www.liepin.com/', icon: 'fas fa-search', desc: '猎聘高端人才招聘平台' },
    { name: '智联招聘', url: 'https://www.zhaopin.com/', icon: 'fas fa-user-tie', desc: '智联招聘官方网站' },
    { name: '国家大学生就业服务平台', url: 'https://gj.ncss.cn/', icon: 'fas fa-graduation-cap', desc: '教育部大学生就业服务网' },
    { name: '对标管理', url: 'https://www.duibiao.info/', icon: 'fas fa-chart-line', desc: '企业对标分析工具' },
    { name: '国聘校园', url: 'https://xiaoyuan.iguopin.com/', icon: 'fas fa-user-graduate', desc: '校园招聘服务平台' },
    { name: '职朋', url: 'https://www.job592.com/', icon: 'fas fa-briefcase', desc: '职场社交与招聘平台，提供企业评价、薪资查询等服务' },
  ],
]);

const performSearch = () => {
  if (searchQuery.value.trim()) {
    const encodedQuery = encodeURIComponent(searchQuery.value.trim());
    window.open(`https://www.bing.com/search?q=${encodedQuery}`, '_blank');
  }
};
</script>

<style scoped>
.navigation-container {
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

.nav-intro {
  max-width: 800px;
  margin: 50px auto 30px;
  text-align: center;
  padding: 0 20px;
}

.nav-intro h2 {
  font-size: 2.2rem;
  color: #1a1a2e;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.nav-intro h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
}

.nav-intro p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.search-container {
  display: flex;
  max-width: 800px;
  margin: 0 auto 30px;
  padding: 0 20px;
}

.search-input {
  flex: 1;
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 30px 0 0 30px;
  font-size: 1rem;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.search-input:focus {
  border-color: #00dbde;
  box-shadow: 0 2px 12px rgba(0, 219, 222, 0.2);
}

.search-btn {
  width: 60px;
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  color: white;
  border: none;
  border-radius: 0 30px 30px 0;
  cursor: pointer;
  transition: all 0.3s;
}

.search-btn:hover {
  opacity: 0.9;
}

.search-btn svg {
  width: 24px;
  height: 24px;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  overflow-x: auto;
  max-width: 100%;
  margin-bottom: 30px;
  scrollbar-width: none;
}

.category-tabs::-webkit-scrollbar {
  display: none;
}

.category-tab {
  padding: 10px 20px;
  background: #f0f0f0;
  border: none;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #555;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s;
}

.category-tab.active {
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 219, 222, 0.2);
}

.links-main {
  flex: 1;
  padding: 0 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.category-section {
  margin-bottom: 40px;
}

.category-title {
  color: #1a1a2e;
  font-size: 1.5rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.nav-link-card {
  display: flex;
  align-items: center;
  padding: 15px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  text-decoration: none;
  color: #333;
  border: 1px solid #eee;
}

.nav-link-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-color: #00dbde;
}

.link-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa, #e4e8f0);
  border-radius: 50%;
  margin-right: 15px;
  color: #00dbde;
  font-size: 1.2rem;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
}

.link-info {
  flex: 1;
}

.link-name {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a2e;
}

.link-desc {
  margin: 5px 0 0;
  font-size: 0.85rem;
  color: #777;
}

.stats-section {
  background: white;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 20px;
}

.stats-section h2 {
  font-size: 2rem;
  color: #1a1a2e;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
}

.stats-section h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.stat-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 20px;
}

.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-icon svg {
  width: 30px;
  height: 30px;
}

.stat-content {
  text-align: left;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: bold;
  color: #1a1a2e;
  margin-bottom: 5px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stat-label {
  font-size: 1rem;
  color: #666;
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

.kind-link {
  color: #00dbde;
  text-decoration: none;
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

  .search-container {
    margin-bottom: 20px;
  }

  .category-tabs {
    justify-content: flex-start;
    padding: 10px;
  }

  .links-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>