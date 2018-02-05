<template>
  <div class="djwlogin">
    <div class="djwloginTop">
      <p>中铁电商党工青</p>
    </div>
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
        if (this.logusernameCheck === false && this.logpasswordCheck === false) {
          this.$router.push({
            path: `/homepage`
          })
//          this.text = '我是'
//          this.confirmShow = true
//          let data = {
//            'username': this.logusername.trim(),
//            'password': this.logpassword.trim()
//          }
//          axios({
//            url: '',
//            method: 'POST',
//            data: data,
//            transformRequest: [function (data) {
//              // Do whatever you want to transform the data
//              let ret = ''
//              for (let it in data) {
//                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//              }
//              return ret
//            }],
//            headers: {
//              'Content-Type': 'application/x-www-form-urlencoded'
//            }
//          })
//            .then(function () {
//            })
//            .catch(function (err) {
//              console.log(err)
//            })
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
      ptor('height', 400)
      background-image: url("./loginBg.png")
      background-repeat: no-repeat
      background-position: center
      background-size: cover
      overflow: hidden
      p
        ptor('font-size', 38)
        color: #fff
        text-align: center
        margin-top: 40px
    .chechkLogRegis
      ptor('height', 110)
      display: flex
      background-color: #eeeeee
      div
        flex: 1
        text-align: center
        align-items: center
        span
          ptor('line-height', 110)
          ptor('font-size', 30)
          display: block
      .activeSpan
        position: relative
        span
          color: red
        em
          position: absolute
          font-size: 0
          line-height: 0
          ptor('top', 95)
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
      ptor('margin-top', 70)
      .logusernameandpassword
        ptor('margin-left', 95)
        ptor('margin-right', 95)
        border-bottom: 1px solid #dddddd
        display: flex
        align-items: center
        position: relative
        .logusernameandpasswordDiv
          ptor('padding-top', 40)
          ptor('padding-bottom', 30)
          flex-shrink: 0
          ptor('flex-basis', 36)
          ptor('margin-right', 20)
          span
            background-size: 100% 100%
            ptor('width', 36)
            ptor('height', 40)
            display: inline-block
          .logusernameImg
            background-image: url("./username.png")
          .logpasswordImg
            background-image: url("./password.png")
        .logusernameandpasswordInput
          width: 100%
          flex-shrink: 1
          input
            width: 100%
            ptor('height', 38)
            ptor('line-height', 38)
            ptor('font-size', 30)
            outline: 0
            border: 0
            color: #777777
        .prompt
          position: absolute
          z-index: 999
          ptor('top', 110)
          ptor('height', 28)
          ptor('line-height', 28)
          img
            ptor('width', 29)
            ptor('height', 28)
            display: block
            float: left
          p
            color: #fd7b01
            ptor('font-size', 22)
            display: block
            float: left
            margin: 0
            ptor('margin-left', 10)
      .loginSubmit
        text-align: center
        ptor('line-height', 94)
        ptor('margin-top', 100)
        ptor('margin-right', 94)
        ptor('margin-bottom', 40)
        ptor('margin-left', 50)
        ptor('height', 94)
        border: 1px solid #dddddd
        ptor('border-radius', 47.5)
        ptor('font-size', 36)
        color: #777777
      .forgetPassword
        color: #bbbbbb
        ptor('font-size', 26)
        text-align: center
        ptor('margin-bottom', 250)
    .registerContent
      ptor('margin-top', 70)
      .registerCon
        ptor('margin-left', 95)
        ptor('margin-right', 95)
        border-bottom: 1px solid #dddddd
        display: flex
        align-items: center
        position: relative
        input
          width: 100%
          ptor('height', 40)
          ptor('line-height', 40)
          ptor('font-size', 30)
          ptor('padding-top', 40)
          ptor('padding-bottom', 30)
          outline: 0
          border: 0
          color: #777777
        .prompt
          z-index: 999
          position: absolute
          ptor('top', 110)
          ptor('height', 28)
          ptor('line-height', 28)
          img
            ptor('width', 29)
            ptor('height', 28)
            display: block
            float: left
          p
            color: #fd7b01
            ptor('font-size', 22)
            display: block
            float: left
            margin: 0
            ptor('margin-left', 10)
      .registerSubmit
        text-align: center
        ptor('height', 94)
        ptor('line-height', 94)
        ptor('margin-top', 100)
        ptor('margin-left', 95)
        ptor('margin-right', 95)
        ptor('margin-bottom', 40)
        border: 1px solid #dddddd
        ptor('border-radius', 47.5)
        ptor('font-size', 36)
        color: #777777
    .confirm-enter-active,.confirm-leave-active
      transition: opacity  .3s
    .confirm-enter,.confirm-leave-to
      opacity: 0
</style>
