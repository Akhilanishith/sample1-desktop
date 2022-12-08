
var myArray=new Array();
myArray[0]="pizza";
myArray[1]="chocolate";
var tweets=["Morning everybody","i love cofee!"];
tweets.push("back to work!");
tweets.splice(1,1,"roti for breakfirst","num num");
console.log(tweets);
// alert(tweets[1]);
// document.write(tweets[1]);
var x=2;
if(x==1){
    alert("x is 1!!");
}
    else{
        alert("x is not 1!!");
    }   

    document.getElementById("checkmagicword").onclick =function(){
        var magicwordEntered = document.getElementById("magicword").value;
       
        var magicword="akhila";
       
        if(magicwordEntered == magicword) 
        {
        alert("you got it");

        }
        else
        {
        alert("nope, try again");

    }

    }
    



