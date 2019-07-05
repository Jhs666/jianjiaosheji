<template>
    <div>
        center
    </div>
</template>
<script>
// 局部守卫
export default {
  beforeRouteEnter (to, from, next) {
    //    console.log("局部盘查");
    //    if(false){
    //        next()
    //    }else{
    //        next('/login')
    //    }
    next()
  }

}
</script>
