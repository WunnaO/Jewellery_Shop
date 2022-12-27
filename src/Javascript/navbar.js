const mobile = window.matchMedia("(max-width:992px)"),
  laptop = window.matchMedia("(min-width:992px)"),
  menubar = $("#home-header");
function mobilemenu(a) {
  if (a.matches) {
    menubar.attr("class");
    menubar.addClass("shadow");
  }
}
function onScroll(a) {
  var o = $(window).scrollTop();
  $("#navbarNav a").each(function () {
    var a = $(this);
    console.log(a);
    var e = $(a.attr("href"));
    console.log(e);
    var l = e.position().top;
    e.height();
    l - 10 <= o && e.position().top + e.height() > o
      ? ($("#navbarNav ul li a").removeClass("active"), a.addClass("active"))
      : a.removeClass("active");
  });
}
function laptopmenu(a) {
  var o = $(document).scrollTop();
  if (a.matches)
    if (o > 75) {
      menubar.attr("class");
      menubar.addClass("shadow");
    } else {
      menubar.removeClass("shadow");
      menubar.attr("class");
    }
}
mobilemenu(mobile),
  mobile.addListener(mobilemenu),
  laptopmenu(laptop),
  laptop.addListener(laptopmenu),
  $("ul#menu li a").click(function () {
    $("ul#menu li a").removeClass("active"),
      $(this).toggleClass("active"),
      console.log(window.location.href);
  }),
  $(document).ready(function () {
    $(window).scroll(function () {
      laptopmenu(laptop);
    }),
      $(document).on("scroll", onScroll);
  });
