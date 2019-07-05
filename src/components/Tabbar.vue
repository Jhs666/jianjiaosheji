<template>
    <nav>
        <!-- 声明导航 -->
        <ul>
            <router-link to="/film" tag="li" activeClass="myactive">
            <i class="iconfont icon-dianying"></i>
            film
            </router-link>
            <router-link to="/cinema" tag="li" activeClass="myactive">
            <i class="iconfont icon-yingyuana"></i>
            cinema
            </router-link>
            <router-link to="/center" tag="li" activeClass="myactive">
            <i class="iconfont icon-wode"></i>
            center
            </router-link>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>

.myactive{
    color:#f60;
}
nav{
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 50px;
    background: white;
    ul{
        display: flex;
        li{
            flex: 1;
            line-height: 50px;
            text-align: center;
        }
    }

}
</style>
