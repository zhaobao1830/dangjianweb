<template>
  <div class="level-detail">
     <div class="title">
       筑起国家网络安全的“防火墙”
     </div>
     <div class="level-detail-division"></div>
     <div class="detail-top">
       <div class="topLeft">
         <div class="headPortrait">
           <img src="./headerPortrait.png"/>
         </div>
         <div class="nameAndSee">
           <div class="name">陈一桥</div>
           <div class="see">
             <span>查看</span>
             <p>10</p>
           </div>
         </div>
       </div>
       <div class="topRight">
         评论
       </div>
     </div>
     <div class="detail-content">
       我国是网民大国，网络安全和信息化工作是“十三五”时期的重头戏，据中国互联网信息中心发布的最新统计报告显示，截至2016年下半年，我国网民规模达7.10亿，当属世界第一。19岁以下网民占比达23%，其中10岁以下网民就超过了2059万，网络大国只有同时成为网络强国，大国优势才能发挥出来，而网络强国要素之一，就是网络安全。因此，这是一项长期的艰巨的任务。
       2016年4月，习近平总书记在网络安全和信息化工作座谈会上的重要论述，9月，又以“网络安全为人民，网络安全靠人民”为主题，开展了国家网络安全的宣传，网络安全和信息化工作是“十三五”时期的重头戏。
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/base"

  .level-detail
    width: 100%
    height: 100%
    .title
      ptor('font-size', 40)
      ptor('margin', 40)
      color: #000000
    .level-detail-division
      ptor('height', 20)
      background-color: #dddddd
    .detail-top
      overflow: hidden
      ptor('padding', 35)
      border-bottom: 1px solid #dddddd
      .topLeft
        float: left
        .headPortrait
          display: inline-block
          ptor('width', 86)
          ptor('height', 86)
          ptor('margin-right', 30)
          float: left
          img
            ptor('width', 86)
            ptor('height', 86)
        .nameAndSee
          display: inline-block
          float: left
          .name
            ptor('margin-top', 5)
            ptor('font-size', 30)
          .see
            ptor('font-size', 26)
            ptor('margin-top', 20)
            color: #888888
            span
              ptor('margin-right', 10)
            p
              display: inline-block
      .topRight
         float: right
         border-radius: 6px
         border: 2px solid #398fd1
         ptor('font-size', 30)
         ptor('width', 120)
         ptor('height', 60)
         ptor('line-height', 60)
         color: #398fd1
         text-align: center
    .detail-content
      ptor('padding-left', 30)
      ptor('padding-right', 30)
      ptor('margin-top', 10)
      ptor('font-size', 26)
      ptor('line-height', 50)
      color: #222222
</style>
