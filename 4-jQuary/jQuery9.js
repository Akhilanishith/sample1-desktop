$("#btn1").click(function(){
  
    for(let i=0;i<=5;i++){
        setTimeout(function(){      
            $("#circle"+i).css("display","none");
    },1000*i);
}
   });
     $("#btn2").click(function(){
   
   for(let i=0;i<=5;i++){
        setTimeout(function(){
            $("#circle"+i).css("display","block");
            
        },1000*i);
        
    }

     });
            