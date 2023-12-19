<template>
    <div class="splendidmonent">
        <h2>splendidmonent</h2>
        <div class="main">
            <div class="img">
                <a href="#">
                    <div class="hide">点击查看详情</div>
                </a>
            </div>
            <div class="info">
                <div class="title">文章标题：{}</div>
                <div class="intro">文章简介：{}</div>
                <div class="time">发布时间：{}</div>
                <div class="like">点赞数{}</div>
                <div class="view">浏览量{}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'splendidmonent',
}
</script>

<style scoped>
.splendidmonent{
    width:1200px;
    margin:0 auto;
}
.main .img a {
    display: inline-block;
    width: 200px;
    height: 200px;
    background-color: antiquewhite;
}

.main .img .hide {
    display: none;
}

.main .img a:hover .hide {
    display: block;
    margin-top: 170px;
    padding: 15px 30px;
}

.main .img a:hover {
    /* 设置动画 */
    transition-duration: 0.7s;
    background-color: rgba(16, 16, 16, 0.2);
}
</style>