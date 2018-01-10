<template>
  <div class="homepage">
    <mheader></mheader>
    <tab></tab>
    <div class="slider-content">
      <img src="./slide.png"/>
      <!--<slider>-->
      <!--</slider>-->
      <div class="slider-content-bottom"></div>
    </div>
    <div class="homepage-content">
      <div class="homepage-content-table">
        <div class="hct-item item-hct item-hct-active">
          <span>精华主题</span>
        </div>
        <div class="hct-item item-hct item-hct-leave">
          <span>最新帖子</span>
        </div>
        <div class="hct-item item-hct item-hct-leave">
          <span>最新回复</span>
        </div>
      </div>
      <div class="homepage-conList">
        <ul class="itemUl">
          <li class="item">
            <div class="icon">
              <img src="./con1.png"/>
            </div>
            <div class="text">
              <div class="name">鲁班一届一次民主管理大会
开幕唱国歌</div>
              <div class="desc">
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
                <p class="publisher">陈一桥</p>
                <p class="pubdata">2017-3-15  15:00:22</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Mheader from 'components/m-header/mheader'
  import Tab from 'components/tab/tab'
  import Scroll from 'base/scroll/scroll'
//  import Slider from 'base/slider/slider'

  export default {
    data () {
      return {
        sliders: []
      }
    },
    components: {
      Mheader,
      Tab,
      Scroll
//      Slider
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/base"

  .homepage
    width: 100%
    height: 100%
    .slider-content
      width: 100%
      ptor('height', 310)
      font-size: 0
      img
        width: 100%
        ptor('height', 310)
      .slider-content-bottom
        ptor('height', 20)
        background-color: #dddddd
    .homepage-content
       .homepage-content-table
          width: 100%
          ptor('height', 105)
          ptor('line-height', 105)
          ptor('font-size', 36)
          display: flex
          .hct-item
            flex: 1
            text-align: center
          .item-hct
            border-bottom: 2px solid
            border-color:  #bbbbbb
            span
              ptor('height', 37)
              ptor('padding-bottom', 30)
          .item-hct-leave
            span
              color: #222222
          .item-hct-active
            border-bottom-color: #bf0000
            span
              color: #bf0000
       .homepage-conList
         .itemUl
           .item
             ptor('margin-top', 30)
             ptor('padding-bottom', 30)
             border-bottom: 1px solid #dddddd
             display: flex
             box-sizing: border-box
             align-items: center
             ptor('padding-left', 30)
             ptor('padding-right', 30)
             ptor('height', 150)
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
               /*justify-content: center*/
               /*display: flex*/
               /*flex-direction: column*/
               .name
                 width: 100%
                 color: #000000
                 ptor('font-size', 36)
                 ptor('line-height', 40)
               .desc
                 position: absolute
                 bottom: 0
                 ptor('font-size', 26)
                 color: #777777
                 ptor('line-height', 36)
                 .publisher
                   ptor('margin-right', 20)
                   display: inline-block
                 .pubdata
                   display: inline-block
</style>
