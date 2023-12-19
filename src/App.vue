<template>
    <div id="app">
        <router-link to="/main"></router-link>
        <!-- 路由占位符 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {
    }
}
</script>

<style>
@import "assets/css/base.css";
</style>