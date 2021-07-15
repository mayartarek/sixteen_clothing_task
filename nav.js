$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".navbar").addClass("bg-white ");
            $(".title .ss ,.nav-item a").addClass("scroll-color");   
        }
        else{
            $(".navbar").removeClass("bg-white ");
            $(" .title .ss ,.nav-item a").removeClass("scroll-color ");   

        }

    })

})