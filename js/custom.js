(function($){
    $(document).ready(function(){
         $(".header-area .menu ul ul li").hover(function(){
             $(".header-area .menu ul ul li ul").show();
         });
    });
})(jQuery)