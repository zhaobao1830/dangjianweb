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
      <div class="switch" @click="operationShow">
        <img src="./switch.png"/>
      </div>
    </div>
    <operation v-show="operationIsShow" @operationHide="operationHide"></operation>
  </div>
</template>

<script type="text/ecmascript-6">
//  import axios from 'axios'
  import Operation from 'components/operation/operation'

  export default {
    data () {
      return {
        serachShow: false, // 搜索输入框是否显示
        searchVal: '', // 搜搜输入内容
        operationIsShow: false // 操作列表页面
      }
    },
    methods: {
//      点击搜索按钮，出现搜索输入框
      showSearch () {
        this.serachShow = true
      },
//      搜索方法
      search () {},
//      显示操作页面
      operationShow () {
        this.operationIsShow = true
      },
      // 隐藏操作页面
      operationHide () {
        this.operationIsShow = false
      }
    },
    components: {
      Operation
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/base"

  .mheader
    width: 100%
    ptor('height', 100)
    background-color: #bf0000
    overflow: hidden
    .mheaderCon
      ptor('height', 100)
      ptor('margin-right', 40)
      ptor('margin-left', 30)
      position: relative
      display: flex
      text-align: center
      align-items: center
      .username
        display: inline-block
        ptor('width', 36)
        ptor('height', 36)
        ptor('margin-right', 40)
        flex-shrink: 0
        ptor('flex-basis', 36)
        img
          ptor('width', 36)
          ptor('height', 36)
          float: left
      .webname
        ptor('height', 55)
        ptor('line-height', 55)
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
        img
          ptor('width', 70)
          ptor('height', 55)
          display: inline-block
          float: left
        p
          margin: 0
          float: left
          ptor('margin-left', 20)
          ptor('font-size', 32)
          color: #fff
      .search
         position: absolute
         ptor('width', 36)
         ptor('height', 36)
         ptor('right', 30)
         flex-shrink: 0
         ptor('flex-basis', 36)
         i
          display: block
          ptor('width', 36)
          ptor('height', 36)
          background-image: url("./search.png")
          background-size: 100% 100%
      .searchVal
         flex: 1
         ptor('height', 60)
         ptor('margin-left', 50)
         ptor('margin-right', 20)
         position: relative
         input
           width: 100%
           ptor('height', 60)
           border: none
           border-radius: 29.5px
           display: block
         i
           position: absolute
           ptor('width', 36)
           ptor('height', 36)
           display: block
           background-image: url("./searchVal.png")
           background-size: 100% 100%
           ptor('top', 12)
           ptor('right', 20)
      .switch
        position: absolute
        right: 0
        ptor('width', 8)
        ptor('height', 40)
        flex-shrink: 0
        ptor('flex-basis', 8)
        img
          ptor('width', 8)
          ptor('height', 40)
          float: left
</style>
