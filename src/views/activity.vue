<template>
    <div class="activity">
        <form action="" method="post" :model="form">
            <td><label for="#">筛选</label></td>
            <td>
                <select name="choice">
                    <option value="all" selected="selected">全部活动</option>
                    <option value="ing">进行中</option>
                    <option value="ed">已结束</option>
                    <option value="selected">精选</option>
                </select>
            </td>
        </form>
        <div class="activity">
            <div class="item">
                <div class="img">
                    <a href="#">
                        <div class="hide">点击查看详情</div>
                    </a>
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
</template>

<script>

</script>

<style scoped>
.activity{
    width:1200px;
    margin:0 auto;
}
.activity .img a {
    display: inline-block;
    width: 200px;
    height: 200px;
    background-color: antiquewhite;
}

.activity .img .hide {
    display: none;
}

.activity .img a:hover .hide {
    display: block;
    margin-top: 170px;
    padding: 15px 30px;
}

.activity .img a:hover {
    /* 设置动画 */
    transition-duration: 0.7s;
    background-color: rgba(16, 16, 16, 0.2);
}
</style>