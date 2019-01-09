$(function() {
  function t(t) {
    return this.children.length > 1 && (this.children[1].style.height = "auto", this.children[1].style.overflow = "visible", this.children[1].style.opacity = "1", void 0)
  }

  function e(t) {
    return this.children.length > 1 && (this.children[1].style.height = "0px", this.children[1].style.overflow = "hidden", this.children[1].style.opacity = "0", void 0)
  }
  $("ul.tabs__caption").on("click", "li:not(.active)", function() {
    $(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq($(this).index()).addClass("active")
  });
  var i = window.location.hash.replace("#tab", "") - 1;
  i != -1 && $("ul.tabs__caption li").eq(i).click(), $("a[href*=#tab]").click(function() {
    var t = $(this).attr("href").replace(/(.*)#tab/, "") - 1;
    $("ul.tabs__caption li").eq(t).click()
  }), $("#menu-tabs li").click(function() {
    var t = this.className.slice(0, 2);
    return $("div.t1").hide(), $("div.t2").hide(), $("div.t3").hide(), $("div." + t).fadeIn(500), $("#menu-tabs li").removeClass("active"), $(this).addClass("active"), !1
  }), $("li.t1").click(), $("#menu-tabsDesk li").click(function() {
    var t = this.className.slice(0, 2);
    return $("div.t1").hide(), $("div.t2").hide(), $("div.t3").hide(), $("div." + t).fadeIn(500), $("#menu-tabsDesk li").removeClass("active"), $(this).addClass("active"), !1
  }), $("li.t1").click();
  for (var a = document.getElementsByClassName("menuDdm"), n = 0; n < a.length; n++) a[n].addEventListener("mouseenter", t, !1), a[n].addEventListener("mouseleave", e, !1);

  $("body").on("click", "a.anchor", function() {
    var t = $($(this).attr("href")).offset().top;
    return $("html,body").animate({
      scrollTop: t
    }, 2222), !1
  })

});
