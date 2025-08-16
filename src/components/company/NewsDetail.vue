<template>
    <div class="news-detail-container">
        <header class="start-header">
            <div class="starfield"></div>
            <div class="meteor"></div>
            <div class="meteor"></div>
            <div class="meteor"></div>
            <div class="header-content">
                <h1>八目蛛新闻详情</h1>
                <p class="subtitle">了解八目蛛最新动态</p>
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

        <div class="news-detail-content">
            <div class="news-main">
                <div class="news-header">
                    <h2>{{ newsItem.title }}</h2>
                    <div class="news-meta">
                        <span class="news-date">{{ newsItem.date }}</span>
                        <span class="news-category">公司动态</span>
                    </div>
                </div>

                <div class="news-body">
                    <div class="news-text" v-html="newsItem.content"></div>

                    <div class="news-chart" v-if="newsItem.chartData">
                        <div ref="chart" style="width: 100%; height: 400px;"></div>
                    </div>
                </div>

                <div class="news-footer">
                    <i class="fas fa-arrow-left back-link">
                        <router-link to="/spider/company" class="back-link">返回新闻列表</router-link>
                    </i>
                </div>
            </div>

            <div class="news-sidebar">
                <h3>相关新闻</h3>
                <div class="related-news">
                    <div v-for="item in relatedNews" :key="item.id" class="related-item" @click="goToNews(item.id)">
                        <div class="related-date">{{ item.date }}</div>
                        <div class="related-title">{{ item.title }}</div>
                    </div>
                </div>
            </div>
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

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import echarts from 'echarts';

const route = useRoute();
const router = useRouter();
const chart = ref(null);

// 新闻数据
const newsData = {
    1: {
        id: 1,
        title: '八目导航3.0版本重磅发布',
        date: '2023-12-15',
        content: `
        <p>八目蛛网络有限公司今日正式发布八目导航3.0版本，这是公司旗舰产品的一次重大升级。</p>
        <p>新版导航系统采用了全新UI设计语言，界面更加简洁现代，同时优化了智能推荐算法，能够更精准地预测用户需求。</p>
        <p>技术总监表示："我们在3.0版本中引入了机器学习模型，能够根据用户历史行为和实时场景提供个性化推荐，这使我们的产品在同类中脱颖而出。"</p>
        <p>据内部数据显示，新版本发布首日活跃用户增长30%，用户平均使用时长提升25%，获得了市场的热烈反响。</p>
        <p>未来，八目导航将继续优化算法，并计划在下个季度推出多语言版本，拓展国际市场。</p>
      `,
        chartData: {
            xAxis: {
                type: 'category',
                data: ['发布前', '发布首日', '发布一周']
            },
            yAxis: {
                type: 'value',
                name: '用户增长率(%)'
            },
            series: [{
                data: [0, 30, 45],
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 3,
                    color: '#00dbde'
                },
                itemStyle: {
                    color: '#fc00ff'
                }
            }]
        }
    },
    2: {
        id: 2,
        title: '与阿里云达成战略合作',
        date: '2023-10-22',
        content: `
        <p>八目蛛网络有限公司与阿里云今日宣布达成战略合作协议，双方将在云计算和人工智能领域展开深度合作。</p>
        <p>根据协议，八目蛛将全面接入阿里云的基础设施，同时双方将共同研发新一代智能云平台，整合八目蛛在数据分析领域的优势与阿里云的云计算能力。</p>
        <p>CEO八目蛛表示："这次合作将加速我们产品的技术升级，为用户提供更稳定、更智能的服务体验。"</p>
        <p>阿里云副总裁表示："八目蛛在智能算法方面的创新能力令人印象深刻，我们期待这次合作能够产生1+1>2的效果。"</p>
        <p>据悉，首个合作项目将于明年第一季度上线，将聚焦于企业级智能解决方案。</p>
      `,
        chartData: {
            xAxis: {
                type: 'category',
                data: ['云计算', 'AI', '大数据', '安全', '物联网']
            },
            yAxis: {
                type: 'value',
                name: '投入资源(百万)'
            },
            series: [{
                data: [45, 60, 30, 25, 20],
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#00dbde' },
                        { offset: 1, color: '#fc00ff' }
                    ])
                }
            }]
        }
    },
    3: {
        id: 3,
        title: '荣获"年度创新企业"称号',
        date: '2023-09-10',
        content: `
        <p>在2023中国互联网大会上，八目蛛网络有限公司荣获"年度创新企业"称号，这是对公司技术创新能力的充分肯定。</p>
        <p>CEO八目蛛在大会上发表了《创新驱动发展》的主题演讲，分享了公司在技术创新和产品研发方面的经验。</p>
        <p>"创新是我们的DNA，"八目蛛表示，"从创立之初，我们就将研发投入保持在行业领先水平，这是我们能够持续推出创新产品的关键。"</p>
        <p>评委会特别提到八目蛛在智能导航和语音交互领域的突破性创新，认为这些技术"重新定义了用户体验"。</p>
        <p>据悉，这是八目蛛连续第二年获得行业重要奖项，标志着公司在技术创新方面的领先地位得到业界广泛认可。</p>
      `,
        chartData: {
            tooltip: {
                trigger: 'item'
            },
            series: [{
                name: '研发投入',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 35, name: '人工智能' },
                    { value: 25, name: '大数据' },
                    { value: 20, name: '云计算' },
                    { value: 15, name: '安全技术' },
                    { value: 5, name: '其他' }
                ],
                color: ['#00dbde', '#fc00ff', '#9c27b0', '#673ab7', '#3f51b5']
            }]
        }
    },
    4: {
        id: 4,
        title: '完成新一轮融资',
        date: '2023-07-18',
        content: `
        <p>八目蛛网络有限公司宣布完成B轮融资2亿元人民币，由知名投资机构领投，多家跟投。</p>
        <p>本轮融资将主要用于产品研发和市场拓展，特别是加速公司在海外市场的布局。</p>
        <p>CEO八目蛛表示："这笔资金将帮助我们更快地实现技术突破和产品创新，同时扩大我们的市场份额。"</p>
        <p>领投方代表表示："我们看好八目蛛的技术实力和商业模式，相信他们在智能服务领域有巨大潜力。"</p>
        <p>据悉，这是八目蛛成立以来的第三轮融资，公司估值已达15亿元人民币。财务数据显示，公司过去三年营收年均增长率超过80%。</p>
      `,
        chartData: {
            xAxis: {
                type: 'category',
                data: ['2018', '2019', '2020', '2021', '2022', '2023']
            },
            yAxis: {
                type: 'value',
                name: '营收(百万)'
            },
            series: [{
                data: [5, 15, 40, 85, 150, 280],
                type: 'line',
                smooth: true,
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(0, 219, 222, 0.5)' },
                        { offset: 1, color: 'rgba(252, 0, 255, 0.1)' }
                    ])
                },
                lineStyle: {
                    width: 3,
                    color: '#00dbde'
                },
                itemStyle: {
                    color: '#fc00ff'
                }
            }]
        }
    },
    5: {
        id: 5,
        title: '入选"中国互联网百强企业"',
        date: '2023-05-12',
        content: `
        <p>中国互联网协会今日发布2023年中国互联网企业100强榜单，八目蛛网络有限公司首次入选。</p>
        <p>该榜单根据企业规模、盈利能力、创新能力、成长性等多维度指标综合评定，是衡量中国互联网企业发展水平的重要参考。</p>
        <p>"入选百强是对我们过去几年快速发展的肯定，"CEO八目蛛表示，"我们将继续坚持技术创新，为用户创造更多价值。"</p>
        <p>数据显示，八目蛛过去三年用户规模年均增长率达120%，产品矩阵覆盖用户数已突破1000万。</p>
        <p>分析师指出，八目蛛凭借在垂直领域的深度布局和技术积累，已成为行业不可忽视的新兴力量。</p>
      `,
        chartData: {
            radar: {
                indicator: [
                    { name: '技术创新', max: 100 },
                    { name: '用户增长', max: 100 },
                    { name: '盈利能力', max: 100 },
                    { name: '市场份额', max: 100 },
                    { name: '品牌影响', max: 100 }
                ],
                radius: '65%'
            },
            series: [{
                type: 'radar',
                data: [
                    {
                        value: [90, 95, 80, 75, 85],
                        name: '八目蛛',
                        areaStyle: {
                            color: 'rgba(0, 219, 222, 0.4)'
                        },
                        lineStyle: {
                            color: '#00dbde',
                            width: 2
                        },
                        itemStyle: {
                            color: '#fc00ff'
                        }
                    }
                ]
            }]
        }
    },
    6: {
        id: 6,
        title: '发布企业社会责任报告',
        date: '2023-03-08',
        content: `
        <p>八目蛛网络有限公司今日发布首份企业社会责任(CSR)报告，全面披露公司在技术创新、人才培养、环境保护等方面的实践。</p>
        <p>报告显示，公司每年将营收的15%投入研发，技术团队占比超过70%；同时，公司建立了完善的人才培养体系，员工满意度达92%。</p>
        <p>在环保方面，八目蛛的数据中心采用100%可再生能源，并通过算法优化减少15%的能源消耗。</p>
        <p>"作为科技企业，我们不仅要追求商业成功，更要承担社会责任，"CEO八目蛛表示，"这份报告是我们对利益相关方的承诺。"</p>
        <p>据悉，八目蛛还设立了专项基金支持STEM教育，已帮助30所偏远地区学校建立计算机实验室。</p>
      `,
        chartData: {
            tooltip: {
                trigger: 'item'
            },
            series: [{
                name: '资源分配',
                type: 'pie',
                radius: '70%',
                center: ['50%', '50%'],
                data: [
                    { value: 15, name: '研发投入' },
                    { value: 35, name: '人才发展' },
                    { value: 25, name: '产品创新' },
                    { value: 15, name: '社会责任' },
                    { value: 10, name: '环境保护' }
                ],
                itemStyle: {
                    borderRadius: 5,
                    borderColor: '#fff',
                    borderWidth: 2,
                    color: function (params) {
                        const colorList = ['#00dbde', '#fc00ff', '#9c27b0', '#673ab7', '#3f51b5'];
                        return colorList[params.dataIndex];
                    }
                },
                label: {
                    formatter: '{b}: {d}%'
                }
            }]
        }
    }
};

// 获取当前新闻
const newsItem = computed(() => newsData[route.params.id] || newsData[1]);

// 相关新闻（排除当前新闻）
const relatedNews = computed(() => {
    return Object.values(newsData)
        .filter(item => item.id !== newsItem.value.id)
        .slice(0, 4);
});

let myChart = ref(null);
// 初始化图表
onMounted(() => {
    if (newsItem.value.chartData && chart.value) {
        myChart = echarts.init(chart.value);
        myChart.setOption(newsItem.value.chartData);

        // 响应式调整
        window.addEventListener('resize', function () {
            myChart.resize();
        });
    }
});

// 跳转到新闻
const goToNews = (id) => {
    window.location.href = `/spider/news/${id}`;
};
</script>

<style scoped>
.news-detail-container {
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
    z-index: 10;
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

.news-detail-content {
    flex: 1;
    max-width: 1200px;
    margin: 40px auto;
    width: 100%;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
}

.news-main {
    background: white;
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.news-header {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}

.news-header h2 {
    font-size: 2rem;
    color: #1a1a2e;
    margin-bottom: 15px;
}

.news-meta {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #666;
    font-size: 0.9rem;
}

.news-date {
    background: #f0f0f0;
    padding: 5px 15px;
    border-radius: 20px;
}

.news-body {
    margin: 30px 0;
}

.news-text {
    line-height: 1.8;
    color: #555;
    margin-bottom: 40px;
}

.news-text p {
    margin-bottom: 20px;
}

.news-chart {
    margin-top: 50px;
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
}

.news-footer {
    margin-top: 50px;
    padding-top: 30px;
    border-top: 1px solid #eee;
}

.back-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #00dbde;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s;
}

.back-link:hover {
    color: #fc00ff;
}

.news-sidebar {
    position: sticky;
    top: 20px;
    align-self: start;
}

.related-news {
    background: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.related-news h3 {
    color: #1a1a2e;
    margin-bottom: 20px;
    font-size: 1.3rem;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

.related-item {
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    transition: all 0.3s;
}

.related-item:last-child {
    border-bottom: none;
}

.related-item:hover {
    background: #f8f9fa;
    transform: translateX(5px);
}

.related-date {
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 5px;
}

.related-title {
    font-weight: 500;
    color: #1a1a2e;
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

    .news-sidebar {
        position: fixed;
        top: 5vh;
        width: 200px;
        border-left: 30px;
        text-align: right;
        transform: translateX(195%);
        transition: transform 1.5s ease-in-out;
        z-index: 200;
    }

    .news-sidebar:hover {
        transform: translateX(100%);
        transition-duration: 1.0s;
    }

    .news-main {
        width: 90vw;
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