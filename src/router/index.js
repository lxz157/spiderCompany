import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "@/components/company/WelcomePage.vue";
import CompanyPage from "@/components/company/CompanyPage.vue";
import OwnerPage from "@/components/company/OwnerPage.vue";
import ProjectPage from "@/components/company/ProjectPage.vue";
import CareersPage from "@/components/company/CareersPage.vue";
import JobApplication from "@/components/company/JobApplication.vue";
import TechnologyPage from "@/components/company/TechnologyPage.vue";
import InnovationPage from "@/components/company/InnovationPage.vue";
import NewsDetail from "@/components/company/NewsDetail.vue";
import LatestProducts from "@/components/company/LatestProducts.vue";
import MusicPage from "@/components/company/MusicPage.vue";
import VoiceAssistantPage from "@/components/company/VoiceAssistantPage.vue";
import NavigationPage from "@/components/company/NavigationPage.vue";

// 定义路由关系
const routes = [
  { path: "/", redirect: "/welcome" },
  { path: "/welcome", component: WelcomePage },
  { path: "/spider", redirect: "/spider/company" },
  { path: "/spider/company", component: CompanyPage },
  { path: "/spider/owner", component: OwnerPage },
  { path: "/spider/project", component: ProjectPage },
  { path: "/spider/latest", component: LatestProducts },
  { path: "/spider/careers", component: CareersPage },
  { path: "/spider/technology", component: TechnologyPage },
  { path: "/spider/innovation", component: InnovationPage },
  { path: "/spider/music", component: MusicPage },
  { path: "/spider/robot", component: VoiceAssistantPage },
  { path: "/spider/navigation", component: NavigationPage },
  { path: "/spider/news/:id", component: NewsDetail, props: true },
  {
    path: "/spider/job",
    component: JobApplication,
    props: (route) => ({ position: route.query.position }),
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// 导出路由实例
export default router;
