$(document).ready(function(){

    // On scroll show the nav bar
    $(window).on('scroll', function() {
        var navbarElemetn = $("nav.navbar");
        if($(this).scrollTop() >= 100) {
            navbarElemetn.addClass("navbar-scrolled");
        } else {
            navbarElemetn.removeClass("navbar-scrolled");
        }
        
    });
});