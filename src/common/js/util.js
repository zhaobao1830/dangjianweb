//计算font-size
export function computedFontSize() {
  console.log('iii')
  var docWidth = document.documentElement.getBoundingClientRect().width
  var  rem = docWidth / 10
  document.documentElement.style.fontSize = rem + "px"
}
