<script setup>
import Sidebar from '../components/Sidebar.vue';
import TheHeader from '../components/TheHeader.vue';
import { onBeforeRouteUpdate, onBeforeRouteLeave, RouterView } from 'vue-router';

// 在当前路由改变，但是该组件被复用时调用
onBeforeRouteUpdate((to, from) => {
  console.log('我是组件级的导航守卫 - onBeforeRouteUpdate');
})

// 在导航离开渲染该组件的对应路由时调用
onBeforeRouteLeave((to, from) => {
  console.log('我是组件级的导航守卫 - onBeforeRouteLeave')
})
</script>

<!-- <script>
export default {
  // 组件前置导航守卫尽在 选项式写法 中存在
  beforeRouteEnter(to, from) {
    console.log('我是组件级的导航守卫 - onBeforeRouteEnter: 在渲染该组件的对应路由被验证前调用');
  }
}
</script> -->


<template>
  <el-container class="contaier">
    <el-aside width="auto">
      <Sidebar />
    </el-aside>

    <el-container>
      <el-header>
        <TheHeader />
      </el-header>

      <el-main class="main">
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>


<style scoped lang="scss">
.contaier {
  height: 100vh;
}

.el-header {
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  border-bottom: 1px solid rgba(0, 21, 41, .08);
}

.main {
  padding: 20px 30px;
  // background-image: linear-gradient(90deg, rgba(60, 10, 30, 0.04) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(60, 10, 30, 0.04) 3%, rgba(0, 0, 0, 0) 3%);
  // background-size: 20px 20px;
  // background-position: center center;
}
</style>