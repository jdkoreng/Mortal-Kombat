$(document).ready(function() {
  var counter = 0;
  var wins = 0;
  var losses = 0;
  var randomNumber;
  var MkOne;
  var MkTwo;
  var MkThree;
  var MkFour;




 
  function resetGame(){

    counter = 0;

    randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $("#number-to-guess").text(randomNumber);

    MkOne = Math.floor (Math.random() * (12-1) + 1);
    console.log("Quan Chi value is " + MkOne)

     MkTwo = Math.floor (Math.random() * (12-1) + 1);
     console.log("Scorpion value is " + MkTwo)

     MkThree = Math.floor (Math.random() * (12-1) + 1);
    console.log("Noob Saibot value is " + MkThree)

     MkFour = Math.floor (Math.random() * (12-1) + 1);
     console.log("Raiden value is " + MkFour)

    $("#one").attr("MKvalue",MkOne)
    $("#two").attr("MKvalue",MkTwo)
    $("#three").attr("MKvalue",MkThree)
    $("#four").attr("MKvalue", MkFour)
  
   }



 
 
 
   resetGame();






  
  $(".mk-image").on("click", function() {


    var MkVal = ($(this).attr("MKvalue"));


   counter = counter + (parseInt(MkVal));
    $("#counter").text(counter);
    
    
  
    if (counter === randomNumber) {
      alert("FLAWLESS VICTORY! YOU WIN!")
      wins ++;
      $("#wins").text("You have won " + wins + " time(s)");
      $("#losses").text("You have lost " + losses + " time(s)");
      resetGame();

    }
    else if (counter > randomNumber) {
      losses++;
      alert("FATALITY! YOU LOSE!");
      $("#wins").text("You have won " + wins + " time(s)");
      $("#losses").text("You have lost " + losses + " time(s)");
      resetGame();

    }



    
    
  });
});