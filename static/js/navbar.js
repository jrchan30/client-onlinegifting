function moveActive() {
  const tabsNewAnim = $('#navbarSupportedContent')
  const activeItemNewAnim = tabsNewAnim.find('.active')
  const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight()
  const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth()
  const itemPosNewAnimTop = activeItemNewAnim.position()
  const itemPosNewAnimLeft = activeItemNewAnim.position()

  if ($('#navbarSupportedContent').find('li').hasClass('active')) {
    $('.hori-selector').css({
      display: 'inline-block',
      top: itemPosNewAnimTop.top + 'px',
      left: itemPosNewAnimLeft.left + 'px',
      height: activeWidthNewAnimHeight + 'px',
      width: activeWidthNewAnimWidth + 'px',
    })
  } else {
    // $('#selector').fadeOut()
    $('.hori-selector').css({
      display: 'none',
    })
  }
  $('#navbarSupportedContent').on('click', 'li', function (e) {
    const activeWidthNewAnimHeight = $(this).innerHeight()
    const activeWidthNewAnimWidth = $(this).innerWidth()
    const itemPosNewAnimTop = $(this).position()
    const itemPosNewAnimLeft = $(this).position()
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
