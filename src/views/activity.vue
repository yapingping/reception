<template>
    <div>
        <div class="activity">
            <h2>活动预览</h2>
            <div class="all">
                <div class="item">
                    <div class="img">
                        <a href="#"><div class="hide">点击查看详情</div></a>
                    </div>
                    <div class="info">
                        <div class="title">主题：{}</div>
                        <div class="college">发起学院：{}</div>
                        <div class="time">举办时间：{}</div>
                        <div class="place">举办地点：{}</div>
                        <div class="max-number">活动最多人数{}</div>
                        <div class="signup-number">报名人数：{}</div>
                        <div class="status">举办状态：{}</div>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.all .img a {
    display: inline-block;
    width: 200px;
    height: 200px;
    background-color: antiquewhite;
}

.all .img .hide {
    display: none;
}

.all .img a:hover .hide {
    display: block;
    margin-top:170px;
    padding:15px 30px;
}

.all .img a:hover {
    /* 设置动画 */
    transition-duration: 0.7s;
    background-color: rgba(16, 16, 16, 0.2);
}</style>