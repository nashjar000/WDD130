$(document).ready(function(){
    var quoteSource=[
    {
        quote: "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
        name:"Bilbo Baggins"
    },
    {
        quote:"Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
        name:"Albus Dumbledore"
    },
    {
        quote:"Believe none of what you hear and believe half of what you see",
        name:"Edgar Allen Poe"
    },
    {
        quote:"It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts",
        name:"Sherlock Holmes"
    }

];
    

    $('#quoteButton').click(function(evt){
        //define the containers of the info we target
        var quote = $('#quoteContainer p').text();
        var quoteGenius = $('#quoteGenius').text();
        //prevent browser's default action
        evt.preventDefault();
        //getting a new random number to attach to a quote and setting a limit
        var sourceLength = quoteSource.length;
        var randomNumber= Math.floor(Math.random()*sourceLength);
        //set a new quote
        for(i=0;i<=sourceLength;i+=1){
        var newQuoteText = quoteSource[randomNumber].quote;
        var newQuoteGenius = quoteSource[randomNumber].name;
        //console.log(newQuoteText,newQuoteGenius);
  var timeAnimation = 500;
  var quoteContainer = $('#quoteContainer');
  //fade out animation with callback
  quoteContainer.fadeOut(timeAnimation, function(){
    quoteContainer.html('');
            quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
    //fadein animation.
    quoteContainer.fadeIn(timeAnimation);
  });  
        
        break;
    };//end for loop

});//end quoteButton function
    
    
});//end document ready

