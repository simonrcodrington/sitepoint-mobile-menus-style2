/*Script functionality*/
$(document).ready(function() {

  //GLOBALS
  var nav_menu = $('.nav-menu');
  var nav_menu_wrap = $('.nav-menu-wrap');
  var nav_menu_background = $('.nav-menu-background');

  //toggle the active states
  function toggle_menu() {
    nav_menu_wrap.toggleClass('active');
    nav_menu_background.toggleClass('active');
  }

  //toggling activate state when interacting with elements
  $('.nav-menu-toggle, .nav-menu-background, .nav-menu .close').on('click', function() {
    toggle_menu();
  });

  //sets the height of the menu to be the same height as the body
  function set_menu_height() {
    var body_height = $('body').height();
    nav_menu.height(body_height);
  }
  set_menu_height();

  //if we change orientation or resize, reculate menu
  $(window).resize(function() {
    set_menu_height();
  })

  //INDENTING
  //go through the menu and add indenting 
  function add_menu_depth() {

    var menus = $('.menu');
    //set depth width to be 5% of the nav menu
    var pad_depth = (nav_menu.outerWidth() / 20);

    //if we have menus
    if (menus.length != 0) {
      $.each(menus, function() {
        var depth_count = $(this).parents('.menu').length + 1;
        var child_elements = $(this).find('li > a');

        $.each(child_elements, function() {
          $(this).css('padding-left', depth_count * pad_depth);
        });
      })
    }
  }
  add_menu_depth();
});