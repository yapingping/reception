<template>
    <div>
        <div class="header">
            <div slot="title" class="title">学术晚茶</div>
            <div class="right">
                <div><a href="#">基本版</a></div>
                <div><span>|</span></div>
                <div><a href="#">English</a></div>
                <div><span>|</span></div>
                <div><a href="#">企业版</a></div>
                <div><span>|</span></div>
                <div><a href="#">手机版</a></div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'loginTopbar'
}
</script>

<style scoped>
.header{
    width:100%;
    height:80px;
    background-color: rgb(185, 224, 226,.6);
}
.title{
    margin-top:15px;
    float: left;
    font-size: 45px;
    font-weight: 600;
    margin-left: 50px;
}
.right{
    float: right;
    line-height: 60px;
    margin-right: 80px;
}
.right div{
    display: inline-block;
    margin:10px;
}
</style>