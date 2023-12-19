<template>
    <div class="inputBox">
        <form name="form" action="" method="post" :model="form">
            <div class="inputText">
                <label>用户名：</label>
                <input v-model="username" class="In" type="text" name="username" autocomplete="off" placeholder="请输入用户名">
            </div>
            <div class="inputText">
                <label>&nbsp;密码：&nbsp;&nbsp;</label>
                <input v-model="password" class="In" type="password" name="password" autocomplete="off" placeholder="请输入密码">
            </div>
            <div class="recode">
                <input class="In" type="checkbox">
                <span>Remember me</span>
            </div>
            <div class="sub">
                <input class="In" type="submit" value="Sign in">
            </div>
        </form>
        <div> msg {{ form.username }}{{ form.password }}</div>
    </div>
</template>

<script>

// import getLoginData from 'network/login'
import Cookie from 'js-cookie'
export default {
    name: 'loginBox',
    data() {
        return {
            name: 'loginBox',
            form: {
                username: '',
                password: '',
            }
        }
    },
}
</script>

<style scoped>
.inputBox {
    width: 400px;
    height: 270px;
    border: 1px black solid;
    text-align: center;
    background-color: rgb(151, 115, 216, .2);
    border-radius: 15px;
}

.inputBox div {
    margin-top: 25px;
}

.In {
    background-color: rgba(235, 226, 226, 0.2);
}
</style>