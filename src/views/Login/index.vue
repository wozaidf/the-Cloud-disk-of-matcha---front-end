<template>
    <div class="login">
        <div class="login-logo">
            <svg t="1666587056057" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4929" width="50" height="50">
                <path
                    d="M909.4656 695.2448H855.04V432.9472a15.36 15.36 0 0 0-15.36-15.36h-233.6768a95.3344 95.3344 0 0 0-161.7408-96.3584 138.7008 138.7008 0 0 0-130.2528-91.392H249.3952a15.36 15.36 0 0 0-15.36 15.36v64.6144A138.24 138.24 0 0 0 285.696 417.5872H184.32a15.36 15.36 0 0 0-15.36 15.36v262.2976H114.5344a49.4592 49.4592 0 1 0 0 98.9184h794.9312a49.4592 49.4592 0 1 0 0-98.9184zM517.12 317.8496a64.8192 64.8192 0 0 1 64.768 64.768 64.0512 64.0512 0 0 1-10.24 34.9696H462.7968a63.6928 63.6928 0 0 1-10.24-34.9696A64.8704 64.8704 0 0 1 517.12 317.8496z m-252.3648-8.0384v-49.2544h49.2544a107.8784 107.8784 0 0 1 107.52 107.52v27.5456L335.7696 309.8112a15.36 15.36 0 0 0-21.76 21.76l86.0672 86.016h-27.5456a107.8784 107.8784 0 0 1-107.776-107.776zM199.68 448.3072h624.64v34.2528H199.68z m0 195.84h453.632a15.36 15.36 0 0 0 0-30.72H199.68v-100.1472h624.64v38.2976H370.5856a15.36 15.36 0 0 0 0 30.72H824.32v31.1296h-93.4912a15.36 15.36 0 0 0 0 30.72H824.32v51.2H199.68z m709.6832 119.296H114.5344a18.7392 18.7392 0 1 1 0-37.4784h794.9312a18.7392 18.7392 0 0 1 0 37.4784z"
                    fill="#58920f" p-id="4930"></path>
                <path d="M318.6176 551.5776H249.3952a15.36 15.36 0 1 0 0 30.72h69.2224a15.36 15.36 0 1 0 0-30.72z"
                    fill="#58920f" p-id="4931"></path>
            </svg>
            <h1 style="color:#000000; margin-left: 30px; font-size: 18px;">抹茶云盘</h1>
        </div>
        <div class="login-form">
            <el-form label-position="right" :model="user">
                <el-form-item>
                    <el-input v-model="user.username" placeholder="请输入用户名" style="border: 2px solid #dcdfe6"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="user.password" type="password" placeholder="请输入密码"
                        style="border: 2px solid #dcdfe6"></el-input>
                </el-form-item>
                <el-form-item class="login-button">
                    <el-button class="loginButton" @click="login">登录</el-button>
                </el-form-item>
                <el-checkbox v-model="checked"></el-checkbox>
                <span style="font-size:12px;color:#b0b1b3; margin-left:10px ;">我已阅读并同意服务协议</span>
            </el-form>
        </div>
    </div>
</template>

<script>
import {Login} from '@/api/user'
export default {
    name: '',
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            // 是否选择条例
            checked: true
        }
    },
    components: {},
    methods: {
        async login() {
            console.log(this.user);
            let result = await Login(this.user);
            console.log(result);
            this.$router.push('/home/file')
        }
    }
}
</script>

<style scoped>
.login {
    display: flex;
    flex-direction: column;
    height: 100vh;
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */

    background: url(~@/assets/2.jpeg);
    background-size: 100% 100%;
    background-attachment: fixed;
}

.login-logo {
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
}

.login-form {
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    width: 100%;
    height: 100%;
    border: 2px solid rgb(247 226 215 / 46%);
    border-radius: 20px;
    background: rgb(247 226 215 / 46%);
    width: 260px;
    height: 260px;
    margin: 35px auto;
    padding: 30px;
    flex-direction: column;
}

.login-button {

    display: flex;
    justify-content: center;
    /* 水平居中 */

}

.loginButton {
    background-color: #7ec1d7;
    color: #ffffff;
    border: 2px solid #ecefff;
    border-radius: 10px;
    width: 220px;
}
</style>
