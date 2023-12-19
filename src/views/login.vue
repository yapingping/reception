<template>
    <div class="login">
        <div class="header">
            <loginTopbar></loginTopbar>
        </div>
        <div class="box">
            <loginBox></loginBox>
        </div>
    </div>
</template>

<script>
import loginTopbar from 'components/common/loginTopbar'
import loginBox from 'components/common/loginBox'
export default {
    name: 'login',
    components: {
        loginTopbar,
        loginBox
    }
};
</script>
<style scoped>
.login {
    background-image: url('assets/imgs/login.jpg')
}

.box {
    position: absolute;
    left: 50%;
    top: 50%;
    /* 设置登录框在页面内居中 */
    transform: translate(-50%, -50%);
}
</style>