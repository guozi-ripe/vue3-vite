<template>
  <div class="home">
    <h1>Home</h1>
    <p>布局控制示例：</p>
    
    <!-- 左对齐 -->
    <div class="left-align">
      <p>这段文字是左对齐的</p>
    </div>
    
    <!-- 居中对齐 -->
    <div class="center-align">
      <p>这段文字是居中对齐的</p>
    </div>
    
    <!-- 右对齐 -->
    <div class="right-align">
      <p>这段文字是右对齐的</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style scoped lang="scss">
.home{
  padding: 20px;
  text-align: left;
}

h1{
  font-size: 45px;
}

/* 布局控制类 */
.left-align {
  text-align: left;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f0f0f0;
}

.center-align {
  text-align: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #e0e0e0;
}

.right-align {
  text-align: right;
  padding: 10px;
  background-color: #d0d0d0;
}

</style>
