<template>
    <div>
            <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data)">
                <img :src="data.poster" alt="">
                <h3>{{data.name}} {{data.filmType.name}}</h3>
                <p v-if="data.grade">观众评分{{data.grade}}</p>
                <p v-else><br></p>
                <p class="cont">主演:{{data.actors | actorfilter}}</p>
                <p v-if="data.language">{{data.language}} | {{data.runtime}}分钟</p>
                <p v-else>{{data.nation}}</p>

            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
Vue.filter('actorfilter', function (data) {
  var newlist = data.map(item => item.name)
  return newlist.join(' ')
})
export default {
  data () {
    return {
      datalist: []
    }
  },

  mounted () {
    // axios.get("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8982871").then(res=>{
    //     console.log(res.data);
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8982871',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1562028126111669149721"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.films
    })
  },
  methods: {
    handleChangePage (id) {
      // console.log(id);
      // b编程式导航
      this.$router.push({ name: 'ss', params: { id: id.filmId } })
    }
  }
}
</script>
<style lang="scss" scoped>
 ul{
     li{
         padding: 20px;
         overflow: hidden;
         border-bottom:1px solid #ccc;
         img{
             float: left;
             width: 100px;
         };
         p.cont{
             overflow: hidden;
             white-space: nowrap;
             text-overflow: ellipsis;
         }
     }
 }
</style>
