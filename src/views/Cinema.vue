<template>
    <div class="cinema" :style="mystyle">
        <div class="headercinema">
            <h2>影院</h2>
            <span>全城</span>
            <span>APP订购</span>
            <span>最近去过</span>
        </div>

        <ul>
            <li v-for="data in datalist" :key="data.cinemaId">
                {{data.name}}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      datalist: [],
      mystyle: {
        height: '0px'
      }
    }
  },
  mounted () {
    this.mystyle.height = document.documentElement.clientHeight - 50 + 'px'
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3143537',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1562028126111669149721"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.cinemas

      // this.$nextTick(()=>{
      //     new BetterScroll('.cinema',{
      //         scrollbar:{
      //             fade:true,
      //             interactive:false
      //         }
      //     })
      // })
    })
  }
}
</script>
<style lang="scss" scoped>
.headercinema{
    position: fixed;
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    h2{
        text-align: center;
        height: 20px;
        line-height: 20px;
    };
    span{
        display: flex;
        float: left;
        flex: 1;
        margin: 25px;
    }
}
  ul{
      margin-top: 75px;
      overflow: hidden;
    li{

        height: 50px;
    }
    }
// .cinema{
//     height: 200px;
//     overflow: hidden;
//     position: relative;
// }
</style>
