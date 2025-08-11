<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/">首页2</router-link>
      </li>
      <li>
        <router-link to="/">首页3</router-link>
      </li>
      <!-- 可以添加更多导航项 -->
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  background-color: #f0f0f0;
  padding: 10px 100px;
  margin-bottom: 20px;
  // 固定在頂部
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

li {
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  &:hover {
    color: #42b883;
  }
}
</style>