$(document).ready(function(){
   $(".filter-button").click( function(){
      
    if($(".btn").hasClass("active")){
         $(".btn").removeClass("active");
    }
    $(this).addClass("active");
     
   });


    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
            
        }
        else
        {
  //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
  //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    $('.listitems button').click(function() {
        $(this).siblings('button').removeClass('active');
        $(this).addClass('active');
    });
  });
  
  
    