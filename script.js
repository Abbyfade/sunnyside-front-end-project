var  menu_icon = document.getElementById("menu-icon")
var menu = document.getElementById("menu-items")
var first_point = document.getElementById("first-point")

menu_icon.onclick = function(){
    menu.style.display = "block"
}

window.onclick = function(event){
    if(!event.target.matches("#menu-icon")){
        menu.style.display = "none"
    }
}