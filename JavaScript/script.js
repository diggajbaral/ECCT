$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    // nav:true,
    autoplay:true,
    autoplaySpeed:1000,
    // autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

var OpenSideNav = document.getElementById("Side-Nav-Open")
var CloseSideNav = document.getElementById("Side-Nav-Close")
var SideMenu = document.getElementById("SideMenu")

OpenSideNav.addEventListener("click", function () {
    SideMenu.classList.add("Open")
})
CloseSideNav.addEventListener("click", function(){
    SideMenu.classList.remove("Open")
})