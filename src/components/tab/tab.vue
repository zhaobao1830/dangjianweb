<template>
  <div class="tab">
     <div class="table-item" v-for="(tabItem, index) in tabList">
        <span class="tab-link">{{tabItem}}</span>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    data () {
      return {
        tabList: ['首页', '时政', '思想理论', '党建经验', '最新动态', '中铁鲁班商务网']
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~common/stylus/base"

  .tab
    white-space: nowrap;
    ptor('height', 110)
    ptor('line-height', 110)
    ptor('font-size', 32)
    overflow-y: hidden;
    .table-item
      ptor('padding-left', 10)
      ptor('padding-right', 10)
      display: inline-block
      .tab-link
        ptor('height', 37)
        color: #222222
        ptor('padding-bottom', 30)
      .tab-link-active
        color: #bf0000
        border-bottom: 3px solid #bf0000
</style>
