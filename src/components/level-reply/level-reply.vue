<template>
  <div class="level-reply">
    <div class="level-reply-detail">
      <div class="goBack">
        <div class="img"><img src="./goBack.png"/></div>
        <div class="name">评论</div>
      </div>
      <div class="level-reply-division"></div>
      <div class="level-reply-list">
        <ul class="listItem">
          <li class="item">
            <div class="img"><img src="./headerPortrait.png"/></div>
            <div class="con">
              <div class="name">陈一桥</div>
              <div class="content">回复的内容</div>
              <div class="date">2017-3-15 15:00:22</div>
            </div>
          </li>
          <li class="item">
            <div class="img"><img src="./headerPortrait.png"/></div>
            <div class="con">
              <div class="name">陈一桥</div>
              <div class="content">回复的内容</div>
              <div class="date">2017-3-15 15:00:22</div>
            </div>
          </li>
          <li class="item">
            <div class="img"><img src="./headerPortrait.png"/></div>
            <div class="con">
              <div class="name">陈一桥</div>
              <div class="content">回复的内容</div>
              <div class="date">2017-3-15 15:00:22</div>
            </div>
          </li>
          <li class="item">
            <div class="img"><img src="./headerPortrait.png"/></div>
            <div class="con">
              <div class="name">陈一桥</div>
              <div class="content">回复的内容</div>
              <div class="date">2017-3-15 15:00:22</div>
            </div>
          </li>
          <li class="item">
            <div class="img"><img src="./headerPortrait.png"/></div>
            <div class="con">
              <div class="name">陈一桥</div>
              <div class="content">回复的内容</div>
              <div class="date">2017-3-15 15:00:22</div>
            </div>
          </li>
          <li class="item">
            <div class="img"><img src="./headerPortrait.png"/></div>
            <div class="con">
              <div class="name">陈一桥</div>
              <div class="content">回复的内容</div>
              <div class="date">2017-3-15 15:00:22</div>
            </div>
          </li>
          <li class="item">
            <div class="img"><img src="./headerPortrait.png"/></div>
            <div class="con">
              <div class="name">陈一桥</div>
              <div class="content">回复的内容</div>
              <div class="date">2017-3-15 15:00:22</div>
            </div>
          </li>
        </ul>
        <div class="level-reply-tip">
          没有更多内容
        </div>
      </div>
    </div>
    <div class="level-reply-add">
      <input class="add-reply-input" type="text" placeholder="添加评论"/>
      <div class="img">
        <img src="./replyAdd.png"/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/base"

  .level-reply
    position: fixed
    background-color: #dddddd
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
    overflow: auto
    .level-reply-detail
      height: auto
      min-height: 100%
      .goBack
        ptor('padding-top', 40)
        ptor('padding-bottom', 40)
        ptor('padding-left', 30)
        ptor('padding-right', 30)
        ptor('height', 39)
        background-color: #fff
        .img
          display: inline-block
          ptor('width', 39)
          ptor('height', 39)
          ptor('margin-right', 20)
          float: left
          img
            ptor('width', 39)
            ptor('height', 39)
            display: block
        .name
          display: inline-block
          float: left
          color: #464646
          ptor('font-size', 40)
          ptor('line-height', 39)
      .level-reply-division
        ptor('height', 20)
      .level-reply-list
        position: relative
        left: 0
        top: 0
        ptor('min-height', 990)
        ptor('padding-bottom', 120)
        border-bottom: 1px solid #bbbbbb
        .listItem
          ptor('padding-bottom', 76)
          background-color: #fff
          .item
            ptor('padding-top', 40)
            ptor('margin-left', 30)
            ptor('margin-right', 30)
            ptor('padding-bottom', 30)
            ptor('height', 130)
            display: flex
            align-items: top
            .img
              ptor('flex-basis', 86)
              ptor('width', 86)
              ptor('height', 86)
              ptor('padding-right', 30)
              img
                ptor('width', 86)
                ptor('height', 86)
            .con
              ptor('height', 130)
              flex: 1
              ptor('font-size', 30)
              ptor('line-height', 40)
              ptor('padding-bottom', 30)
              border-bottom: 1px solid #dddddd
              .name
                color: #000000
              .content
                color: #464646
              .date
                color: #888888
        .level-reply-tip
          position: absolute
          ptor('bottom', 120)
          width: 100%
          color: #888888
          text-align: center
          ptor('height', 26)
          ptor('font-size', 26)
          ptor('padding-top', 40)
          ptor('padding-bottom', 10)
          background-color: #dddddd
    .level-reply-add
      display: flex
      align-items: center
      background-color: #fff
      width: 100%
      ptor('height', 120)
      margin: 0 auto
      ptor('margin-top', -120)
      .add-reply-input
        ptor('flex-basis', 610)
        ptor('width', 610)
        ptor('height', 50)
        ptor('margin-left', 30)
        border: none
        border-bottom: 1px solid #bbbbbb
      .img
        flex: 1
        ptor('width', 56)
        ptor('height', 45)
        ptor('margin-left', 25)
        img
          display: block
          ptor('width', 56)
          ptor('height', 45)
</style>
