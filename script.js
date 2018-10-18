// Code by Xavier Alexis-Leon
// 
$(function() {
//elements
var $menu = $(".menu");
var $pages = $(".page");
var $menuLi = $menu.find("li").not(".clear-back");
var $toback = $menu.find(".clear-back");
//interna vars
var currentPage = "";
        
$toback.on("click", function() {
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

document.getElementById("footing").innerHTML = formatAMPM();
function formatAMPM() {
var d = new Date(),
    months = ['January','Febuary','March','April','May','June','July','Aughust','September','October','November','December'],
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+'th '+d.getFullYear();
}


