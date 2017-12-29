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
      <div class="logusernameandpassword">
        <div class="logusernameandpasswordDiv">
          <span class="logusernameImg"></span>
        </div>
        <div class="logusernameandpasswordInput">
          <input class="loguserInput" v-model="logusername" placeholder="用户名"/>
        </div>
        <div class="prompt" v-show="logusernameCheck">
          <img src="./prompt.png"/>
          <p>用户名未填写</p>
        </div>
      </div>
      <div class="logusernameandpassword">
        <div class="logusernameandpasswordDiv">
          <span class="logpasswordImg"></span>
        </div>
        <div class="logusernameandpasswordInput">
          <input class="logpasswordInput" type="password" v-model="logpassword" placeholder="密码"/>
        </div>
        <div class="prompt" v-show="logpasswordCheck">
          <img src="./prompt.png"/>
          <p>密码未填写</p>
        </div>
      </div>
      <div class="loginSubmit" @click="login">登录</div>
      <div class="forgetPassword">找回密码？</div>
    </div>
    <div class="registerContent" v-show="registerChecked">
      <div class="registerCon">
        <input class="regusernameInput" v-model="reusername" placeholder="用户名"/>
        <div class="prompt" v-show="reusernameCheck">
          <img src="./prompt.png"/>
          <p>用户名未填写</p>
        </div>
      </div>
      <div class="registerCon">
        <input class="regpasswordInput" type="password" v-model="regpassword" placeholder="密码"/>
        <div class="prompt" v-show="regpasswordCheck">
          <img src="./prompt.png"/>
          <p>密码未填写</p>
        </div>
      </div>
      <div class="registerCon">
        <input class="regconregpasswordInput" type="password" v-model="conregpassword" placeholder="确认密码"/>
        <div class="prompt" v-show="conregpasswordCheck">
          <img src="./prompt.png"/>
          <p v-show="conregpasswordCheckHave">确认密码未填写</p>
          <p v-show="conregpasswordCheckError">密码不一致</p>
        </div>
      </div>
      <div class="registerCon">
        <input class="regmailboxInput" type="email" v-model="mailbox" placeholder="邮箱"/>
        <div class="prompt" v-show="mailboxCheck">
          <img src="./prompt.png"/>
          <p v-show="mailboxCheckHave">邮箱未填写</p>
          <p v-show="mailboxCheckError">邮箱不正确</p>
        </div>
      </div>
      <div class="registerSubmit" @click="register">注册</div>
    </div>
    <transition name="confirm">
      <confirm @hideConfrim="hideConfrim" v-show="confirmShow" :confirmShow="confirmShow" :text="text"></confirm>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import Confirm from 'base/confirm/confirm'

  export default {
    data () {
      return {
        loginChecked: true,
        registerChecked: false,
        logusername: '',
        logusernameCheck: false,
        logpassword: '',
        logpasswordCheck: false,
        reusername: '',
        reusernameCheck: false,
        regpassword: '',
        regpasswordCheck: false,
        conregpassword: '',
        conregpasswordCheck: false,
        conregpasswordCheckHave: false,
        conregpasswordCheckError: false,
        mailbox: '',
        mailboxCheck: false,
        mailboxCheckHave: false,
        mailboxCheckError: false,
        text: '', // 传给提示组件的内容
        confirmShow: false
      }
    },
    methods: {
//      切换登录和注册界面
      chechkLogRegis (str) {
        if (str === 'login') {
          this.loginChecked = true
          this.registerChecked = false
        } else {
          this.registerChecked = true
          this.loginChecked = false
        }
      },
//      登录
      login () {
        if (this.logusername) {
          this.logusernameCheck = false
        } else {
          this.logusernameCheck = true
        }
        if (this.logpassword) {
          this.logpasswordCheck = false
        } else {
          this.logpasswordCheck = true
        }
        if (this.logusernameCheck && this.logpasswordCheck) {
          this.text = '我是'
          this.confirmShow = true
          let data = {
            'username': this.logusername.trim(),
            'password': this.logpassword.trim()
          }
          axios({
            url: '',
            method: 'POST',
            data: data,
            transformRequest: [function (data) {
              // Do whatever you want to transform the data
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }],
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
            .then(function () {
            })
            .catch(function (err) {
              console.log(err)
            })
        }
      },
//      注册
      register () {
        if (this.reusername) {
          this.reusernameCheck = false
        } else {
          this.reusernameCheck = true
        }
        if (this.regpassword) {
          this.regpasswordCheck = false
        } else {
          this.regpasswordCheck = true
        }
        if (this.conregpassword) {
          this.conregpasswordCheck = false
          this.conregpasswordCheckHave = false
          if (this.regpassword.trim() === this.conregpassword.trim()) {
            this.conregpasswordCheck = false
            this.conregpasswordCheckError = false
          } else {
            this.conregpasswordCheck = true
            this.conregpasswordCheckError = true
          }
        } else {
          this.conregpasswordCheck = true
          this.conregpasswordCheckHave = true
        }
        if (this.mailbox) {
          this.mailboxCheck = false
          this.mailboxCheckHave = false
          let myreg = new RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
          if (myreg.test(this.mailbox)) {
            this.mailboxCheck = false
            this.mailboxCheckError = false
          } else {
            this.mailboxCheck = true
            this.mailboxCheckError = true
          }
        } else {
          this.mailboxCheck = true
          this.mailboxCheckHave = true
        }
      },
      hideConfrim () {
        this.confirmShow = false
      }
    },
    components: {
      Confirm
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
      .logusernameandpassword
        margin-left: 95px
        margin-right: 95px
        height: 110px
        border-bottom: 1px solid #dddddd
        display: flex
        align-items: center
        position: relative
        .logusernameandpasswordDiv
          flex: 0 0 36px
          margin-right: 20px
          span
            background-size: 36px 40px
            width: 36px
            height: 40px
            display: inline-block
          .logusernameImg
            background-image: url("./username.png")
          .logpasswordImg
            background-image: url("./password.png")
        .logusernameandpasswordInput
          width: 100%
          input
            width: 100%
            height: 40px
            line-height: 40px
            font-size: 3rem
            outline: 0
            border: 0
            color: #777777
        .prompt
          position: absolute
          top: 110px
          height: 28px
          line-height: 28px
          img
            width: 29px
            height: 28px
            display: block
            float: left
          p
            color: #fd7b01
            font-size: 2.2rem
            display: block
            float: left
            margin: 0 0 0 10px
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
      .registerCon
        margin-left: 95px
        margin-right: 95px
        height: 110px
        border-bottom: 1px solid #dddddd
        display: flex
        align-items: center
        position: relative
        input
          width: 100%
          height: 40px
          line-height: 40px
          font-size: 3rem
          outline: 0
          border: 0
          color: #777777
        .prompt
          position: absolute
          top: 110px
          height: 28px
          line-height: 28px
          img
            width: 29px
            height: 28px
            display: block
            float: left
          p
            color: #fd7b01
            font-size: 2.2rem
            display: block
            float: left
            margin: 0 0 0 10px
      .registerSubmit
        text-align: center
        line-height: 94px
        margin: 100px 95px 40px
        border: 1px solid #dddddd
        height: 94px
        border-radius: 47.5px
        font-size: 3.6rem
        color: #777777
    .confirm-enter-active,.confirm-leave-active
      transition: opacity  .3s
    .confirm-enter,.confirm-leave-to
      opacity: 0
</style>
