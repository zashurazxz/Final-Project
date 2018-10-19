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


let contactinfo = [
    agentNames= ["george", "bob", "ken", "alex"],
    Phonenumbers= ["1231111111","1232222222", "1233333333", "1234444444"]
];
function makeUL(array) {
    // Create the list element:
    let list = document.createElement("ul");
    for(let i = 0; i < array.length; i++) {
        // Create the list item:
        let item = document.createElement("li");
        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));
        // Add it to the list:
        list.appendChild(item);
    }
    // Finally, return the constructed list:
    return list;
}
// Add the contents of contactinfo[0] to #agents:
document.getElementById("agents").append(makeUL(contactinfo[0]));
document.getElementById("agents").appendChild(makeUL(contactinfo[1]));



// this is the enter leave code that swaps the image

var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}
$(function() {
    $('img[data-alt-src]').each(function() { 
        new Image().src = $(this).data('alt-src'); 
    }).hover(sourceSwap, sourceSwap); 
});






// footer clock
document.getElementById("footing").innerHTML = formatAMPM();
function formatAMPM() {
var d = new Date(),
    months = ['January','Febuary','March','April','May','June','July','Aughust','September','October','November','December'],
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+'th '+d.getFullYear();
}
