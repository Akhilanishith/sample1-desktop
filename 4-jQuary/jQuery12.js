$("#circle1").click(function(){
    $(this).fadeOut(2000,"swing",function(){
        $("p").fadeout();
    });

    $(this).fadeIn(5000);
    $(this).fadeIn(500,"linear");

    $(this).hide(2000,"swing");
   
    
    $(this).show(500,"linear");
    
    
});
$("#fadeout").click(function(){
    $("p").fadeOut();
    });

    $("#fadeIn").click(function(){
        $("#hiddenText").fadeIn(5000);
        });
        $("#toggle").click(function(){
            if($("#text1").css("display")=="none"){
                $("#text1").fadeIn();
            }else {
                $("#text1").fadeOut();
            }
        })

