<template>
  <div class="homepage">
    <mheader></mheader>
    <tab></tab>

  </div>
</template>

<script type="text/ecmascript-6">
  import Mheader from 'components/m-header/mheader'
  import Tab from 'components/tab/tab'
  import Scroll from 'base/scroll/scroll'

  export default {
    components: {
      Mheader,
      Tab,
      Scroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .homepage
    width: 100%
    height: 100%
</style>
