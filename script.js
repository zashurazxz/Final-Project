// Code by Xavier Alexis-Leon
// Email notzash@live.com
// oct 19 2018
// java script, web dev course
// final project


$(window).bind("load", function() {


// side menu
$(function() {
//elements
let $menu = $(".menu");
let $pages = $(".page");
let $menuLi = $menu.find("li").not(".clear-back");
let $toback = $menu.find(".clear-back");
//interna vars
let currentPage = "";
$toback.on("click", function() {
    currentPage = "";
    TweenMax.to($pages, 0.5, {
        left: "-70%"
    });
    TweenLite.to($menuLi.filter(".active"), 0.5, {
        className: "-=active"
    });
});
//page swapper 
$menuLi.on("click", function(event) { 
    let $this = $(this);
    let thisHref = $this.find("a").attr("href");    
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


// the contact array
let contactinfo = [
    agentNames= ["george", "bob", "ken", "alex"],
    Phonenumbers= ["Number: 1231111111","Number: 1232222222", "Number: 1233333333", "Number: 1234444444"]
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
document.getElementById("agent").appendChild(makeUL(contactinfo[1]));


// this is the enter leave code that swaps the image
let image1 = document.getElementById("first")
let image2 = document.getElementById("second")
let image3 = document.getElementById("third")
let image4 = document.getElementById("fourth")
let image5 = document.getElementById("fifth")
let imageholder = document.getElementById("placeholder")
// part that swaps the image
image1.addEventListener("mouseover", () => {
    imageholder.style.backgroundImage = 'url("./travel1.jpg")'
    imageholder.style.objectFit = "contain";
});
image1.addEventListener("mouseout", () => {
    imageholder.style.backgroundImage = 'url("./travel.jpg")'
    imageholder.style.objectFit = "contain";
});
image2.addEventListener("mouseover", () => {
    imageholder.style.backgroundImage = 'url("./travel2.jpg")'
    imageholder.style.objectFit = "contain";
});
image2.addEventListener("mouseout", () => {
    imageholder.style.backgroundImage = 'url("./travel.jpg")'
    imageholder.style.objectFit = "contain";
});
image3.addEventListener("mouseover", () => {
    imageholder.style.backgroundImage = 'url("./travel3.jpg")'
    imageholder.style.objectFit = "contain";
});
image3.addEventListener("mouseout", () => {
    imageholder.style.backgroundImage = 'url("./travel.jpg")'
    imageholder.style.objectFit = "contain";
});
image4.addEventListener("mouseover", () => {
    imageholder.style.backgroundImage = 'url("./travel4.jpg")'
    imageholder.style.objectFit = "contain";
});
image4.addEventListener("mouseout", () => {
    imageholder.style.backgroundImage = 'url("./travel.jpg")'
    imageholder.style.objectFit = "contain";
});
image5.addEventListener("mouseover", () => {
    imageholder.style.backgroundImage = 'url("./travel5.jpg")'
    imageholder.style.objectFit = "contain";
});
image5.addEventListener("mouseout", () => {
    imageholder.style.backgroundImage = 'url("./travel.jpg")'
    imageholder.style.objectFit = "contain";
});
// tried to manipulate images to show ful image on lower size screens


// form code
$(document).ready(function() {
$("div#form1").append(
$("<h3/>").text("Registration Form"),
$("<p/>").text("This is my registration form. Please fill it out. You're awesome!"),
$("<form/>", {action: "bouncer.php", method: "#"}).append(
$("<input/>", {type: "text", id: "vname", name: "name", placeholder: "Your Name"}),
$("<input/>", {type: "text", id: "vadd", name: "address", placeholder: "Your address"}),
$("<input/>", {type: "text", id: "vcity", name: "city", placeholder: "City"}),
$("<input/>", {type: "text", id: "vprovince", name: "province", placeholder: "Province"}),
$("<input/>", {type: "text", id: "vpost", name: "postalcode", placeholder: "Postal code"}),
$("<input/>", {type: "email", id: "vemail", name: "email", placeholder: "Your Email"}),
$("<input/>", {type: "text", id: "vphone", name: "phonenumber", placeholder: "Your Phone Number"}),
$("<br/>"),
$("<input/>", {type: "submit", id: "submit", value: "Submit"})))
});
// tried to make a function to validate postal code but didnt have time to implement it
function isZipCode(post)
{
regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (regex.test(post))
        {
        return true;
        }
    else
        {
        return false;
        }
}
console.log(isZipCode("t2b-2d2"));
console.log(isZipCode("7892"));


// footer clock
document.getElementById("footing").innerHTML = formatAMPM();
function formatAMPM() {
let d = new Date(),
    months = ["January","Febuary","March","April","May","June","July","Aughust","September","October","November","December"],
    days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
return days[d.getDay()]+" "+months[d.getMonth()]+" "+d.getDate()+"th "+d.getFullYear();
}
});