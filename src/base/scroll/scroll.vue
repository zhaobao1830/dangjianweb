<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: null
      }
    },
    mounted () {
      setTimeout(() => {
        this._initScrolll()
      }, 20)
    },
    methods: {
      _initScrolll () {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollX: true,
          scrollY: false,
          probeType: this.probeType,
          click: this.click
        })
        console.log(this.scroll)
      }
    },
    watch: {
      data () {
        console.log('yyyyyyyyy')
        setTimeout(() => {
          console.log('ppppppp')
          this.refresh()
        }, 20)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">

</style>
