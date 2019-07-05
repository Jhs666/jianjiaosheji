<template>
    <div v-if="filminfo">
        <img :src="filminfo.poster" class="poster">
        <h2>{{filminfo.name}}</h2>
        <span>{{filminfo.grade}}</span>
        <p>{{filminfo.category}}</p>
        <p>{{filminfo.nation}} | {{filminfo.runtime}}分钟</p>

        <!-- <p>{{filminfo.synopsis}}</p> -->
        <h3>演职人员</h3>
        <swiper perview="4" class="actorswiper" myclassname="actorswiper">
            <div class="swiper-slide" v-for="data in filminfo.actors" :key="data.name">
                <img :src="data.avatarAddress" alt="">
                <p>{{data.name}}</p>
            </div>
        </swiper>
        <h3>剧照</h3>
        <swiper perview="3" class="photoswiper" myclassname="photoswiper" >
            <div class="swiper-slide" v-for="(data,index) in filminfo.photos" :key="index">
                <img :src="data"/>
            </div>
        </swiper>
    </div>
</template>
<script>
import axios from 'axios'
import swiper from './Detail/DetailSwiper'
export default {
  data () {
    return {
      filminfo: null
    }
  },
  props: ['id'],
  beforeMount () {
    this.$store.commit('HideMaizuoTabbar', false)
  },
  mounted () {
    // console.log("要id获取详情信息",this.$route.params.id,this.id);
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.id}&k=2705682`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1562028126111669149721"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data)
      this.filminfo = res.data.data.film
    })
  },
  beforeDestroy () {
    console.log('showtabbar')
    this.$store.commit('ShowMaizuoTabbar', true)
  },
  components: {
    swiper
  }
}
</script>

<style lang="scss" scoped>
    .poster{
        width: 100%
    }
</style>
