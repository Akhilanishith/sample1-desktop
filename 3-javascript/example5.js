
var tweetstring="";

var tweets=["hii everyone","i love mom","good night:)"]

for(var i=0; i<tweets.length; i++){
    tweetstring=tweetstring+"<p>"+tweets[i]+"<p>";

    // alert(tweets[i]);
}
document.getElementById("tweetDiv").innerHTML=tweetstring;





