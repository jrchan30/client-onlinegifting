function moveActive() {
  var tabsNewAnim = $('#navbarSupportedContent')
  var activeItemNewAnim = tabsNewAnim.find('.active')
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight()
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth()
  var itemPosNewAnimTop = activeItemNewAnim.position()
  var itemPosNewAnimLeft = activeItemNewAnim.position()

  if($('#navbarSupportedContent').find('li').hasClass('active')){
    $('.hori-selector').css({
      display: 'inline-block',
      top: itemPosNewAnimTop.top + 'px',
      left: itemPosNewAnimLeft.left + 'px',
      height: activeWidthNewAnimHeight + 'px',
      width: activeWidthNewAnimWidth + 'px',
    })
  }else{
    // $('#selector').fadeOut()
    $('.hori-selector').css({
      display: 'none'
  })
}
  $('#navbarSupportedContent').on('click', 'li', function (e) {
    var activeWidthNewAnimHeight = $(this).innerHeight()
    var activeWidthNewAnimWidth = $(this).innerWidth()
    var itemPosNewAnimTop = $(this).position()
    var itemPosNewAnimLeft = $(this).position()
    $('.hori-selector').css({
      top: itemPosNewAnimTop.top + 'px',
      left: itemPosNewAnimLeft.left + 'px',
      height: activeWidthNewAnimHeight + 'px',
      width: activeWidthNewAnimWidth + 'px',
    })
  })
}
$(document).ready(function () {
  setTimeout(function () {
    moveActive()
  })
})
$(window).on('resize', function () {
  setTimeout(function () {
    moveActive()
  }, 500)
})
$('.navbar-toggler').click(function () {
  setTimeout(function () {
    moveActive()
  })
})