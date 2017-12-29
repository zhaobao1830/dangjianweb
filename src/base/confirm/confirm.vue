<template>
  <div class="confirm">
    <div class="confirmContent">
      <img src="./confirm.png"/>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      text: '',
      confirmShow: ''
    },
    data () {
      return {
        timer: ''
      }
    },
    watch: {
      confirmShow: function () {
        let This = this
        clearTimeout(this.timer)
        this.timer = setTimeout(function () {
          This.hideConfrim()
          this.confirmShow = false
        }, 3000)
      }
    },
    methods: {
      hideConfrim () {
        this.$emit('hideConfrim')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/base"

  .confirm
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: rgba(34, 34, 34, 0.8)
    .confirmContent
      width: 400px
      height: 200px
      position: absolute
      top: 50%
      left: 50%
      margin-top: -100px
      margin-left: -200px
      background-color: #fff
      display: flex
      text-align: center
      align-items: center
      img
        width: 44px
        height: 44px
        margin-left: 65px
      p
        font-size: 3rem
        color: #222
        margin-left: 20px
</style>
