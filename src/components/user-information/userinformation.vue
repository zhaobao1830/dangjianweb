<template>
  <div class="userinformation">
    <div class="conInfor">
      <div class="uInforContent">
        <div class="uInforTop">
          <div class="goBackZb">
            <img src="./goBack.png"/>
          </div>
          <div class="userLogo">
            <img src="./userLogo.png"/>
          </div>
          <div class="username">
            <p>admin</p>
          </div>
          <div class="loginLastDate">
            <p>上次登录时间：</p>
            <span>2018-01-01</span>
          </div>
        </div>
        <div class="uInfor-content-division"></div>
        <div class="uInforCon">
          <div class="topicses uInforConLlist">
            <p class="left">主题数量</p>
            <p class="right">300</p>
          </div>
          <div class="topicses uInforConLlist">
            <p class="left">帖子发布数量</p>
            <p class="right">300</p>
          </div>
          <div class="topicses uInforConLlist">
            <p class="left">论坛积分</p>
            <p class="right">300</p>
          </div>
        </div>
      </div>
     </div>
    <div class="loginOut">
      <a href="#">退出</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/base"

  .userinformation
    position: fixed
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto
    .conInfor
      min-height: 100%
      .uInforContent
        ptor('padding-bottom', 90)
        .uInforTop
          width: 100%
          ptor('height', 430)
          background-image: url("./uInforTop.png")
          background-repeat: no-repeat
          background-position: center
          background-size: cover
          overflow: hidden
          .goBackZb
            ptor('margin-top', 30)
            ptor('margin-left', 30)
            ptor('width', 22)
            ptor('height', 39)
            img
              ptor('width', 22)
              ptor('height', 39)
              float: left
          .userLogo
            ptor('margin-top', 10)
            ptor('height', 206)
            text-align: center
            img
              ptor('width', 206)
              ptor('height', 206)
          .username
            ptor('margin-top', 20)
            text-align: center
            p
              ptor('font-size', 30)
              color: #fff
          .loginLastDate
            ptor('margin-top', 40)
            text-align: center
            ptor('font-size', 30)
            color: #fff
            p
              display: inline-block
        .uInfor-content-division
          ptor('height', 20)
          background-color: #ddd;
        .uInforCon
          .uInforConLlist
            overflow: hidden
            ptor('padding-left', 30)
            ptor('padding-right', 30)
            ptor('padding-top', 40)
            ptor('padding-bottom', 40)
            border-bottom: 1px solid #ddd
            ptor('font-size', 30)
            .left
              float: left
              color: #322222
            .right
              float: right
              color: #777777
    .loginOut
      width: 100%
      ptor('margin-top', -90)
      background-color: #dddddd
      ptor('height', 90)
      ptor('line-height', 90)
      text-align: center
      a
        ptor('font-size', 36)
        color: #222222
</style>
