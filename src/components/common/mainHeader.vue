<template>
    <div>
        <div class="mainheader">
            <div slot="title" class="title">学术晚茶</div>
            <div class="right">
                <div>欢迎：name</div>
                <div><span>|</span></div>
                <div><a href="#">退出登录</a></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mainHeader'
}
</script>

<style scoped>
.mainheader {
    width: 1200px;
    height: 80px;
    background-color:#f5f9f9;
    margin: 0 auto;
    border-bottom: 1px black solid;
}
.title{
    float: left;
    margin-top:20px;
    font-size: 40px;
    font-weight: 600;
    color:black;
    margin-left: 30px;
}
.right{
    float: right;
    margin-right: 70px;
    /* 垂直居中 */
    line-height: 80px;
}
.right div{
    float: left;
    /* margin-right:10px; */
    margin-left:30px;
}
</style>