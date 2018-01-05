<template>
  <div class="tab">
    <div class="table-item">
      <span class="tab-link tab-link-active">首页</span>
    </div>
    <div class="table-item">
      <span class="tab-link">时政</span>
    </div>
    <div class="table-item">
      <span class="tab-link">思想理论</span>
    </div>
    <div class="table-item">
      <span class="tab-link">党建经验</span>
    </div>
    <div class="table-item">
      <span class="tab-link">最新动态</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/base"

  .tab
    width: 100%
    ptor('height', 110)
    ptor('line-height', 110)
    ptor('font-size', 32)
    .table-item
      ptor('padding-left', 20)
      ptor('padding-right', 20)
      display: inline-block
      .tab-link
        ptor('height', 37)
        color: #222222
        ptor('padding-bottom', 30)
      .tab-link-active
        color: #bf0000
        border-bottom: 3px solid #bf0000
</style>
