<template>
  <div class="twolevel">
    <mheader :usernameShow="usernameShow"></mheader>
    <div class="tltop">
      <div class="tltLeft">
        <div class="img">
          <img src="./tlLogo.png"/>
        </div>
        <div class="leftCon">
          <div class="title">
            热点时评
          </div>
          <div class="moderator">
            <span class="name">版主</span>
            <span class="value">陈一桥</span>
          </div>
        </div>
      </div>
      <div class="tltRight">
        <div class="publishNew">
          发表新帖
        </div>
        <div class="publishShow">
          <div class="showPublish">
            <span>今日</span>
            <p>0</p>
          </div>
          <div class="showPublish">
            <span>主题</span>
            <p>0</p>
          </div>
          <div class="showPublish">
            <span>排名</span>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
    <div class="tlinterval"></div>
    <div class="tlCon-list">
      <ul class="itemUl">
        <li class="item">
          <div class="icon">
            <img src="./con1.png"/>
          </div>
          <div class="text">
            <div class="name">
              鲁班一届一次民主管理大会开幕唱国歌<span class="top">顶</span>
            </div>
            <div class="desc">
              <p class="posting">发帖人:</p>
              <p class="publisher">陈一桥</p>
              <p class="pubdata">2017-3-15  15:00:22</p>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="icon">
            <img src="./con1.png"/>
          </div>
          <div class="text">
            <div class="name">鲁班一届一次民主管理大会
              开幕唱国歌</div>
            <div class="desc">
              <p class="posting">发帖人:</p>
              <p class="publisher">陈一桥</p>
              <p class="pubdata">2017-3-15 15:00:22</p>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="text">
            <div class="name">鲁班一届一次民主管理大会
              开幕唱国歌</div>
            <div class="desc">
              <p class="posting">发帖人:</p>
              <p class="publisher">陈一桥</p>
              <p class="pubdata">2017-3-15 15:00:22</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Mheader from 'components/m-header/mheader'

  export default {
    data () {
      return {
        usernameShow: false
      }
    },
    components: {
      Mheader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/base"

  .twolevel
    width: 100%
    height: 100%
    .tltop
      ptor('margin-top', 40)
      ptor('margin-right', 30)
      ptor('margin-bottom', 40)
      ptor('margin-left', 30)
      overflow: hidden
      .tltLeft
        float: left
        .img
          display: inline-block
          float: left
          ptor('width', 68)
          ptor('height', 68)
          ptor('margin-right', 20)
          img
            ptor('width', 68)
            ptor('height', 68)
        .leftCon
          float: left
          .title
            ptor('margin-top', 4)
            ptor('margin-bottom', 2)
            ptor('font-size', 38)
            color: #bf0000
            float: left
          .moderator
            ptor('font-size', 24)
            .name
              color: #888888
            .value
              color: #068de6
      .tltRight
        float: right
        .publishNew
          ptor('font-size', 30)
          color: #068de6
          text-align: right
          ptor('margin-top', 6)
        .publishShow
          ptor('margin-top', 10)
          ptor('font-size', 24)
          .showPublish
            display: inline-block
            span
              color: #888888
            p
             display: inline-block
             color: #068de6
    .tlinterval
      width: 100%
      ptor('height', 20)
      background-color: #dddddd
    .tlCon-list
      .itemUl
        .item
          overflow: hidden
          ptor('margin', 30)
          ptor('margin-bottom', 30)
          ptor('padding-bottom', 30)
          border-bottom: 1px solid #dddddd
          display: flex
          box-sizing: border-box
          align-items: center
          ptor('height', 180)
          .icon
            ptor('flex-basis', 230)
            ptor('width', 230)
            ptor('height', 150)
            ptor('padding-right', 30)
            img
              ptor('width', 230)
              ptor('height', 150)
          .text
            ptor('height', 150)
            flex: 1
            overflow: hidden
            position: relative
            .name
              width: 100%
              color: #000000
              ptor('font-size', 36)
              ptor('line-height', 40)
              display: inline-block
              .top
                ptor('font-size', 24)
                ptor('line-height', 36)
                ptor('border-radius', 4)
                ptor('width', 36)
                ptor('height', 36)
                ptor('margin-left', 5)
                text-align: center
                background-color: #ff0000
                color: #fff
                display: inline-block
            .desc
              position: absolute
              right: 0
              bottom: 0
              ptor('font-size', 26)
              color: #777777
              ptor('line-height', 36)
              .posting
                display: inline-block
              .publisher
                ptor('margin-right', 20)
                display: inline-block
              .pubdata
                display: inline-block
</style>
