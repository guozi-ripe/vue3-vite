<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="app">
    <!-- 导航栏 -->
    <Navbar />
    <!-- 路由视图 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
