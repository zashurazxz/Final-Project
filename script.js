$(function() {
//Image by Ivaylo Yovchev (  http://ivayloyovchev.com/weddings )
      
//elements
var $menu = $(".menu");
var $pages = $(".page");
var $menuLi = $menu.find("li").not(".to-home");
var $toHome = $menu.find(".to-home");
        
//interna vars
var currentPage = "";
        
$toHome.on("click", function() {
    currentPage = "";
    TweenMax.to($pages, 0.5, {
        left: "-70%"
    });
    TweenLite.to($menuLi.filter(".active"), 0.5, {
        className: "-=active"
    });
});
        
$menuLi.on("click", function(event) {
            
    var $this = $(this);
    var thisHref = $this.find("a").attr("href");
            
    if (currentPage !== thisHref && $pages.filter(thisHref).length > 0) {
        currentPage = thisHref;
        TweenMax.to($pages, 0.5, {
            left: "-70%"
        });
        TweenMax.to($pages.filter(thisHref), 0.5, {
            left: 0
        });
        TweenLite.to($menuLi.filter(".active"), 0.5, {
            className: "-=active"
        });
        TweenLite.to($this, 0.5, {
            className: "+=active"
        });
    }
            
    event.preventDefault();
});});