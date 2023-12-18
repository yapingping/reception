<template>
    <div id="app">
        <main-header></main-header>
        <router-link to="/main"></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import mainHeader from 'components/common/mainHeader'
export default {
    name: 'app',
    components: {
        mainHeader
    }
}
</script>

<style>
@import "assets/css/base.css";
</style>