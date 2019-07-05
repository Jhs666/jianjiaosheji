<template>
<div>
<tabbar></tabbar>
<!-- 插槽容器 -->
<section>
  <router-view></router-view>
</section>
</div>
</template>
<script>

import tabbar from '@/components/Tabbar'
import navbar from '@/components/Navbar'
import siderbar from '@/components/Sidebar'
import axios from 'axios'

// 全局组件
// import Vue from 'vue'
// Vue.component("navbar",navbar)
// Vue.component("siderbar",siderbar)

export default {
  data () {
    return {

    }
  },
  components: {
    tabbar
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0
}
html{
  height: 100%
}
li{
  list-style: none
}
section{
  margin-bottom: 50px;
}
</style>
