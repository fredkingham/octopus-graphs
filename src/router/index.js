import { createWebHistory, createRouter } from "vue-router";
import SetUp from "@/components/SetUp.vue";
import DateRange from "@/components/DateRange.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: () => {
      let currentDate = new Date();
      return {name: 'date', params: { month: currentDate.getMonth() + 1, year: currentDate.getFullYear() }}
    }
  },
  {
    path: "/date/:month/:year/",
    name: "date",
    component: DateRange,
    props: true,
  },
  {
    path: "/setup",
    name: "setup",
    component: SetUp,
  },
];

const router = createRouter({
  history: createWebHistory('/octopus-graphs/'),
  routes,
});

export default router;