<template>
  <div class="djwlogin">
    <div class="djwloginTop"></div>
    <div class="chechkLogRegis">
      <div :class="{activeSpan: loginChecked}" class="checkLogin" @click="chechkLogRegis('login')">
        <span>登录</span>
        <em></em>
      </div>
      <div :class="{activeSpan: registerChecked}" class="checkRegister" @click="chechkLogRegis('register')">
        <span>注册</span>
        <em></em>
      </div>
    </div>
    <div class="loginContent" v-show="loginChecked">
      <div class="logusername">
        <div class="logusernameImgDiv">
          <span class="logusernameImg"></span>
        </div>
        <div class="loguserInputDiv">
          <input class="loguserInput" v-model="logusername" placeholder="用户名"/>
        </div>
      </div>
      <div class="logpassword">
        <div class="logpasswordImgDiv">
          <span class="logpasswordImg"></span>
        </div>
        <div class="logpasswordInputDiv">
          <input class="logpasswordInput" v-model="logpassword" placeholder="密码"/>
        </div>
      </div>
      <div class="loginSubmit">登录</div>
      <div class="forgetPassword">找回密码？</div>
    </div>
    <div class="registerContent" v-show="registerChecked">
      <div class="regusername">
        <input class="regusernameInput" v-model="reusername" placeholder="用户名"/>
      </div>
      <div class="regpassword">
        <input class="regpasswordInput" v-model="regpassword" placeholder="密码"/>
      </div>
      <div class="regconregpassword">
        <input class="regconregpasswordInput" v-model="conregpassword" placeholder="确认密码"/>
      </div>
      <div class="regmailbox">
        <input class="regmailboxInput" v-model="mailbox" placeholder="邮箱"/>
      </div>
      <div class="registerSubmit">注册</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        loginChecked: true,
        registerChecked: false,
        logusername: '',
        logpassword: '',
        reusername: '',
        regpassword: '',
        conregpassword: '',
        mailbox: ''
      }
    },
    methods: {
      chechkLogRegis (str) {
        if (str === 'login') {
          this.loginChecked = true
          this.registerChecked = false
        } else {
          this.registerChecked = true
          this.loginChecked = false
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/base"

  .djwlogin
    width: 100%
    height: 100%
    .djwloginTop
      width: 100%
      height: 430px
      background-image: url("./loginBg.png")
      background-repeat: no-repeat
      background-position: center
      background-size: cover
    .chechkLogRegis
      height: 110px
      display: flex
      background-color: #eeeeee
      div
        flex: 1
        text-align: center
        align-items: center
        span
          height: 110px
          line-height: 110px
          font-size: 3rem
          display: block
      .activeSpan
        position: relative
        span
          color: red
        em
          position: absolute
          font-size: 0
          line-height: 0
          top: 95px
          text-align: center
          left: 0
          right: 0
          margin: auto
          width: 0
          height: 0
          border-left: 12px solid transparent
          border-right: 12px solid transparent
          border-bottom: 15px solid #fff
    .loginContent
      margin-top: 70px
      .logusername
        margin-left: 95px
        margin-right: 95px
        height: 110px
        border-bottom: 1px solid #dddddd
        display: flex
        align-items: center
        box-sizing: border-box
        .logusernameImgDiv
          flex: 0 0 36px
          margin-right: 20px
          .logusernameImg
            background-image: url("./username.png")
            background-size: 36px 40px
            width: 36px
            height: 40px
            display: inline-block
        .loguserInputDiv
          width: 100%
          .loguserInput
            width: 100%
            height: 40px
            line-height: 40px
            font-size: 3rem
            outline: 0
            border: 0
            color: #777777
      .logpassword
        margin-left: 95px
        margin-right: 95px
        height: 110px
        border-bottom: 1px solid #dddddd
        display: flex
        align-items: center
        .logpasswordImgDiv
          flex: 0 0 36px
          margin-right: 20px
          .logpasswordImg
            background: url("./password.png") 0 0 no-repeat
            width: 36px
            height: 40px
            display: inline-block
        .logpasswordInputDiv
          width: 100%
          .logpasswordInput
            width: 100%
            height: 40px
            line-height: 40px
            font-size: 3rem
            outline: 0
            border: 0
            color: #777777
      .loginSubmit
        text-align: center
        line-height: 94px
        margin: 100px 95px 40px
        border: 1px solid #dddddd
        height: 94px
        border-radius: 47.5px
        font-size: 3.6rem
        color: #777777
      .forgetPassword
        color: #bbbbbb
        font-size: 2.6rem
        text-align: center
        margin-bottom: 250px
    .registerContent
      margin-top: 70px
      .regusername
      .regpassword
      .regconregpassword
      .regmailbox
        margin-left: 95px
        margin-right: 95px
        height: 110px
        border-bottom: 1px solid #dddddd
        display: flex
        align-items: center
        input
          width: 100%
          height: 40px
          line-height: 40px
          font-size: 3rem
          outline: 0
          border: 0
          color: #777777
      .registerSubmit
        text-align: center
        line-height: 94px
        margin: 100px 95px 40px
        border: 1px solid #dddddd
        height: 94px
        border-radius: 47.5px
        font-size: 3.6rem
        color: #777777
</style>
