/*!

=========================================================
* Argon Dashboard - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

//
// Layout
//

'use strict'

const Layout = (function () {
  function pinSidenav() {
    $('.sidenav-toggler').addClass('active')
    $('.sidenav-toggler').data('action', 'sidenav-unpin')
    $('body')
      .removeClass('g-sidenav-hidden')
      .addClass('g-sidenav-show g-sidenav-pinned')
    $('body').append(
      '<div class="backdrop d-xl-none" data-action="sidenav-unpin" data-target=' +
        $('#sidenav-main').data('target') +
        ' />'
    )

    // Store the sidenav state in a cookie session
    Cookies.set('sidenav-state', 'pinned')
  }

  function unpinSidenav() {
    $('.sidenav-toggler').removeClass('active')
    $('.sidenav-toggler').data('action', 'sidenav-pin')
    $('body').removeClass('g-sidenav-pinned').addClass('g-sidenav-hidden')
    $('body').find('.backdrop').remove()

    // Store the sidenav state in a cookie session
    Cookies.set('sidenav-state', 'unpinned')
  }

  // Set sidenav state from cookie

  const $sidenavState = Cookies.get('sidenav-state')
    ? Cookies.get('sidenav-state')
    : 'pinned'

  if ($(window).width() > 1200) {
    if ($sidenavState == 'pinned') {
      pinSidenav()
    }

    if (Cookies.get('sidenav-state') == 'unpinned') {
      unpinSidenav()
    }

    $(window).resize(function () {
      if (
        $('body').hasClass('g-sidenav-show') &&
        !$('body').hasClass('g-sidenav-pinned')
      ) {
        $('body').removeClass('g-sidenav-show').addClass('g-sidenav-hidden')
      }
    })
  }

  if ($(window).width() < 1200) {
    $('body').removeClass('g-sidenav-hide').addClass('g-sidenav-hidden')
    $('body').removeClass('g-sidenav-show')
    $(window).resize(function () {
      if (
        $('body').hasClass('g-sidenav-show') &&
        !$('body').hasClass('g-sidenav-pinned')
      ) {
        $('body').removeClass('g-sidenav-show').addClass('g-sidenav-hidden')
      }
    })
  }

  $('body').on('click', '[data-action]', function (e) {
    e.preventDefault()

    const $this = $(this)
    const action = $this.data('action')
    let target = $this.data('target')

    // Manage actions

    switch (action) {
      case 'sidenav-pin':
        pinSidenav()
        break

      case 'sidenav-unpin':
        unpinSidenav()
        break

      case 'search-show':
        target = $this.data('target')
        $('body')
          .removeClass('g-navbar-search-show')
          .addClass('g-navbar-search-showing')

        setTimeout(function () {
          $('body')
            .removeClass('g-navbar-search-showing')
            .addClass('g-navbar-search-show')
        }, 150)

        setTimeout(function () {
          $('body').addClass('g-navbar-search-shown')
        }, 300)
        break

      case 'search-close':
        target = $this.data('target')
        $('body').removeClass('g-navbar-search-shown')

        setTimeout(function () {
          $('body')
            .removeClass('g-navbar-search-show')
            .addClass('g-navbar-search-hiding')
        }, 150)

        setTimeout(function () {
          $('body')
            .removeClass('g-navbar-search-hiding')
            .addClass('g-navbar-search-hidden')
        }, 300)

        setTimeout(function () {
          $('body').removeClass('g-navbar-search-hidden')
        }, 500)
        break
    }
  })

  // Add sidenav modifier classes on mouse events

  $('.sidenav').on('mouseenter', function () {
    if (!$('body').hasClass('g-sidenav-pinned')) {
      $('body')
        .removeClass('g-sidenav-hide')
        .removeClass('g-sidenav-hidden')
        .addClass('g-sidenav-show')
    }
  })

  $('.sidenav').on('mouseleave', function () {
    if (!$('body').hasClass('g-sidenav-pinned')) {
      $('body').removeClass('g-sidenav-show').addClass('g-sidenav-hide')

      setTimeout(function () {
        $('body').removeClass('g-sidenav-hide').addClass('g-sidenav-hidden')
      }, 300)
    }
  })

  // Make the body full screen size if it has not enough content inside
  $(window).on('load resize', function () {
    if ($('body').height() < 800) {
      $('body').css('min-height', '100vh')
      $('#footer-main').addClass('footer-auto-bottom')
    }
  })
})()

//
// Icon code copy/paste
//

;('use strict')

const CopyIcon = (function () {
  // Variables

  const $element = '.btn-icon-clipboard'
  const $btn = $($element)

  // Methods

  function init($this) {
    $this.tooltip().on('mouseleave', function () {
      // Explicitly hide tooltip, since after clicking it remains
      // focused (as it's a button), so tooltip would otherwise
      // remain visible until focus is moved away
      $this.tooltip('hide')
    })

    const clipboard = new ClipboardJS($element)

    clipboard.on('success', function (e) {
      $(e.trigger)
        .attr('title', 'Copied!')
        .tooltip('_fixTitle')
        .tooltip('show')
        .attr('title', 'Copy to clipboard')
        .tooltip('_fixTitle')

      e.clearSelection()
    })
  }

  // Events
  if ($btn.length) {
    init($btn)
  }
})()

const Navbar = (function () {
  // Variables

  const $nav = $('.navbar-nav, .navbar-nav .nav')
  const $collapse = $('.navbar .collapse')
  const $dropdown = $('.navbar .dropdown')

  // Methods

  function accordion($this) {
    $this.closest($nav).find($collapse).not($this).collapse('hide')
  }

  function closeDropdown($this) {
    const $dropdownMenu = $this.find('.dropdown-menu')

    $dropdownMenu.addClass('close')

    setTimeout(function () {
      $dropdownMenu.removeClass('close')
    }, 200)
  }

  // Events

  $collapse.on({
    'show.bs.collapse'() {
      accordion($(this))
    },
  })

  $dropdown.on({
    'hide.bs.dropdown'() {
      closeDropdown($(this))
    },
  })
})()

const Popover = (function () {
  // Variables

  const $popover = $('[data-toggle="popover"]')
  let $popoverClass = ''

  // Methods

  function init($this) {
    if ($this.data('color')) {
      $popoverClass = 'popover-' + $this.data('color')
    }

    const options = {
      trigger: 'focus',
      template:
        '<div class="popover ' +
        $popoverClass +
        '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }

    $this.popover(options)
  }

  // Events

  if ($popover.length) {
    $popover.each(function () {
      init($(this))
    })
  }
})()

const ScrollTo = (function () {
  //
  // Variables
  //

  const $scrollTo = $('.scroll-me, [data-scroll-to], .toc-entry a')

  //
  // Methods
  //

  function scrollTo($this) {
    const $el = $this.attr('href')
    const offset = $this.data('scroll-to-offset')
      ? $this.data('scroll-to-offset')
      : 0
    const options = {
      scrollTop: $($el).offset().top - offset,
    }

    // Animate scroll to the selected section
    $('html, body').stop(true, true).animate(options, 600)

    event.preventDefault()
  }

  //
  // Events
  //

  if ($scrollTo.length) {
    $scrollTo.on('click', function (event) {
      scrollTo($(this))
    })
  }
})()

const Tooltip = (function () {
  // Variables

  const $tooltip = $('[data-toggle="tooltip"]')

  // Methods

  function init() {
    $tooltip.tooltip()
  }

  // Events

  if ($tooltip.length) {
    init()
  }
})()

const FormControl = (function () {
  // Variables

  const $input = $('.form-control')

  // Methods

  function init($this) {
    $this
      .on('focus blur', function (e) {
        $(this)
          .parents('.form-group')
          .toggleClass('focused', e.type === 'focus')
      })
      .trigger('blur')
  }

  // Events

  if ($input.length) {
    init($input)
  }
})()

const Datepicker = (function () {
  // Variables

  const $datepicker = $('.datepicker')

  // Methods

  function init($this) {
    const options = {
      disableTouchKeyboard: true,
      autoclose: false,
    }

    $this.datepicker(options)
  }

  // Events

  if ($datepicker.length) {
    $datepicker.each(function () {
      init($(this))
    })
  }
})()

var noUiSlider = (function () {
  // Variables

  // var $sliderContainer = $('.input-slider-container'),
  // 		$slider = $('.input-slider'),
  // 		$sliderId = $slider.attr('id'),
  // 		$sliderMinValue = $slider.data('range-value-min');
  // 		$sliderMaxValue = $slider.data('range-value-max');;

  // // Methods
  //
  // function init($this) {
  // 	$this.on('focus blur', function(e) {
  //       $this.parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
  //   }).trigger('blur');
  // }
  //
  //
  // // Events
  //
  // if ($input.length) {
  // 	init($input);
  // }

  if ($('.input-slider-container')[0]) {
    $('.input-slider-container').each(function () {
      const slider = $(this).find('.input-slider')
      const sliderId = slider.attr('id')
      const minValue = slider.data('range-value-min')
      const maxValue = slider.data('range-value-max')

      const sliderValue = $(this).find('.range-slider-value')
      const sliderValueId = sliderValue.attr('id')
      const startValue = sliderValue.data('range-value-low')

      const c = document.getElementById(sliderId)
      const d = document.getElementById(sliderValueId)

      noUiSlider.create(c, {
        start: [parseInt(startValue)],
        connect: [true, false],
        // step: 1000,
        range: {
          min: [parseInt(minValue)],
          max: [parseInt(maxValue)],
        },
      })

      c.noUiSlider.on('update', function (a, b) {
        d.textContent = a[b]
      })
    })
  }

  if ($('#input-slider-range')[0]) {
    const c = document.getElementById('input-slider-range')
    const d = document.getElementById('input-slider-range-value-low')
    const e = document.getElementById('input-slider-range-value-high')
    const f = [d, e]

    noUiSlider.create(c, {
      start: [
        parseInt(d.getAttribute('data-range-value-low')),
        parseInt(e.getAttribute('data-range-value-high')),
      ],
      connect: !0,
      range: {
        min: parseInt(c.getAttribute('data-range-value-min')),
        max: parseInt(c.getAttribute('data-range-value-max')),
      },
    }),
      c.noUiSlider.on('update', function (a, b) {
        f[b].textContent = a[b]
      })
  }
})()

const Scrollbar = (function () {
  // Variables

  const $scrollbar = $('.scrollbar-inner')

  // Methods

  function init() {
    $scrollbar.scrollbar().scrollLock()
  }

  // Events

  if ($scrollbar.length) {
    init()
  }
})()
