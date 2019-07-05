<template>
    <div>
        <ul>
            <router-link to="/film/nowplaying" tag="li" activeClass="active">正在热映</router-link>
            <router-link to="/film/comingsoon" tag="li" activeClass="active">即将上映</router-link>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
ul{
    display: flex;
    li{
        flex: 1;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: white
    }
}
.active{
    color: yellowgreen;
    border-bottom: 2px solid yellowgreen;

}

.fixed{
    position: fixed;
    left: 0;
    top: 0;
    height: 40px;
    width: 100%;
    background: white;
}
</style>
