<!--组件的模板结构-->
<template>
  <div>
    <router-link :to="{name:'home'}">首页</router-link>
    <router-link :to="{name:'course'}">课程</router-link>
    <router-view></router-view>
  </div>
</template>
<!--组件的业务逻辑-->
<script>
export default {
  name: 'App',
  data() {
    return {}
  },
}
</script>
<!--组件的样式-->
<style>
</style>