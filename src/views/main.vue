<template>
    <div id="main">
        <div class="nav">
            <router-link to="/main/home" class="item">首页</router-link>
            <router-link to="/main/activity" class="item">所有活动</router-link>
            <router-link to="/main/column" class="item">精彩专栏</router-link>
            <router-link to="/main/user" class="item">个人中心</router-link>
        </div>
        <div class="detail">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// import {getMainData} from 'network/home.js'
export default {
    name: 'main',
    path:'/main/home',
    components: {

    },
    // 生命周期函数，组件被创建即发送网络请求
    // created(){
    //     // 请求数据
    //     getMainData().then(res=>{
    //         console.log(res);
    //     })
    // }
}
</script>
<style scoped>
.nav {
    width: 1200px;
    height: 60px;
    /* background-color: pink; */
    margin: 0 auto;
}

.nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.nav .item {
    padding: 15px 30px;
    font-size: 20px;
}
.detail{
    width:100%;
    height:500px;
    background-color: pink;
    margin:0 auto;
    /* 设置渐变 */
    background-image: linear-gradient(rgb(244, 241, 241),white);
}
</style>