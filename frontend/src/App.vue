<template>
  <div id="app">
    <img src="./assets/logo.png" height = 50 width = 50 text-align = "left">
    <h1>  * Student system</h1>
    <div>
      <router-link to="/">主页</router-link><br>
      <router-link to="/login">登录</router-link><br>
      <router-link to="/mark">查看成绩</router-link>
    </div>
      <div>
        <router-view/>
      </div>
    </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
