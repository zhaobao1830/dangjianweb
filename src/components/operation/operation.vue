<template>
  <div class="operation">
    <div class="operationCon">
      <ul class="operul">
        <li class="operli">
          <div class="img">
            <img src="./1.png"/>
          </div>
          <p class="title">发表新帖</p>
        </li>
        <li class="operli">
          <div class="img">
            <img src="./2.png"/>
          </div>
          <p class="title">最新回复</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/base"

  .operation
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background-color: rgba(78, 78, 78, 0.8)
    .operationCon
      position: absolute
      ptor('right', 20)
      ptor('top', 100)
      ptor('width', 230)
      background-color: #fff
      border-radius: 10px
      .operul
        ptor('margin-left', 20)
        ptor('margin-right', 20)
        .operli
          ptor('height', 65)
          ptor('line-height', 65)
          ptor('font-size', 28)
          border-bottom: 1px solid #777777
          display: flex
          align-content: center
          .img
            ptor('width', 36)
            ptor('height', 36)
            ptor('margin-right', 25)
            ptor('flex-basis', 36)
            ptor('margin-top', 10)
            img
              ptor('width', 36)
              ptor('height', 36)
          .title
            flex: 1
            ptor('font-size', 28)
</style>
