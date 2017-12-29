<template>
  <div class="mheader">
    <div class="mheaderCon">
      <div class="username">
        <img src="./username.png"/>
      </div>
      <div class="webname" v-show="!serachShow">
        <img src="./logo.png"/>
        <p>中铁电商党工青</p>
      </div>
      <div class="search" v-show="!serachShow" @click="showSearch">
        <i></i>
      </div>
      <div class="searchVal" v-show="serachShow">
        <input type="text"/>
        <i @click="search"></i>
      </div>
      <div class="switch">
        <img src="./switch.png"/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//  import axios from 'axios'

  export default {
    data () {
      return {
        serachShow: false, // 搜索输入框是否显示
        searchVal: '' // 搜搜输入内容
      }
    },
    methods: {
//      点击搜索按钮，出现搜索输入框
      showSearch () {
        this.serachShow = true
      },
//      搜索方法
      search () {}
    }
  }
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
      justify-content: space-between
      .username
        width: 36px
        height: 36px
        flex: 0 0 36px
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
         flex: 1
         height: 60px
         margin-left: 50px
         margin-right: 20px
         position: relative
         input
           width: 100%
           height: 60px
           border: none
           border-radius: 29.5px
         i
           position: absolute
           width: 36px
           height: 36px
           display: block
           background: url("./searchVal.png") 0 0 no-repeat
           top: 12px
           right: 20px
      .switch
         /*position: absolute*/
         /*right: 0*/
         width: 8px
         height: 40px
         flex: 0 0 8px
</style>
