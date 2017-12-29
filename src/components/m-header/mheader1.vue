<template>
  <div class="mheader">
    <div class="mheaderCon">
      <div class="username">
        <img src="./username.png"/>
      </div>
      <!--<div class="webname">-->
        <!--<img src="./logo.png"/>-->
        <!--<p>中铁电商党工青</p>-->
      <!--</div>-->
      <!--<div class="search">-->
        <!--<i></i>-->
      <!--</div>-->
      <div class="searchVal">
        <input type="text"/>
        <i></i>
      </div>
      <div class="switch">
        <img src="./switch.png"/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/base"

  .mheader
    width: 100%
    height: 130px
    background-color: #bf0000
    overflow: hidden
    .mheaderCon
      height: 55px
      line-height: 55px
      margin: 56px 30px 0 20px
      position: relative
      display: flex
      align-items: center
      .username
        width: 36px
        height: 36px
        position: absolute
      .webname
        width: 244px
        height: 55px
        position: absolute
        left: 50%
        margin-left: -122px
        img
          width: 70px
          height: 55px
          display: inline-block
          float: left
        p
         float: left
         margin: 0 0 0 20px
         font-size: 2.2rem
         color: #fff
      .search
         position: absolute
         right: 30px
         width: 36px
         height: 36px
         i
          display: block
          width: 36px
          height: 36px
          background: url("./search.png") 0 0 no-repeat
      .searchVal
         position: absolute
         left: 50px
         right: 20px
         width: 560px
         height: 60px
         input
           height: 60px
           border: none
           border-radius: 29.5px
      .switch
         position: absolute
         right: 0
         width: 8px
         height: 40px
</style>
