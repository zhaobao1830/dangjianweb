<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {computedFontSize} from 'common/js/util'
  export default {
    created () {
      computedFontSize()
    },
    mounted () {
      window.addEventListener('resize', () => {
        computedFontSize()
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  html
  body
    min-width: 320px
    min-height: 100%
    margin: 0
    padding: 0
</style>
