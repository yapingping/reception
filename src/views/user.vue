<template>
    <div class="user">
        <div class="myinfo">
            <div class="title">基本信息</div>
            <div class="change">
                <button>编辑资料</button>
                <button>修改密码</button>
            </div>
            <div class="info">

                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="username">用户名：{{ username }}</div>
                <div class="name">姓名：{{ name }}</div>
                <div class="college">学院：{{ college }}</div>
                <div class="id">学号：{{ id }}</div>
                <div class="tel">电话：{{ telephone }}</div>
            </div>
        </div>
        <div class="myactivity">
            <div class="title">我的活动</div>
            <button>点击查看更多</button>
            <div class="img">
                <a href="#">
                    <div class="hide">点击查看详情</div>
                </a>
            </div>
            <div class="info">
                <div class="name">主题：{}</div>
                <div class="college">发起学院：{}</div>
                <div class="time">举办时间：{}</div>
                <div class="place">举办地点：{}</div>
                <div class="max-number">活动最多人数{}</div>
                <div class="signup-number">报名人数：{}</div>
                <div class="status">举办状态：{}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'user',
}
</script>

<style scoped>
.user {
    width: 1200px;
    margin: 0 auto;
    padding-top: 20px;
}

.myinfo {
    height: 150px;
}

.myinfo .img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: blueviolet;
}

.myinfo .info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.myinfo .info div {
    margin: 20px;
}

.myinfo .change {
    float: right;
}

.title {
    font-size: 25px;
    font-weight: 700;
    display: inline-block;
}

.myactivity .img a {
    display: inline-block;
    width: 200px;
    height: 200px;
    background-color: antiquewhite;
}

.myactivity .img .hide {
    display: none;
}

.myactivity .img a:hover .hide {
    display: block;
    margin-top: 170px;
    padding: 15px 30px;
}

.myactivity .img a:hover {
    /* 设置动画 */
    transition-duration: 0.7s;
    background-color: rgba(16, 16, 16, 0.2);
}
</style>