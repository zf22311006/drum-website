  
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomimagesource1 = "images/" + randomDiceImage1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomimagesource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomimagesource1);
image2.setAttribute("src", randomimagesource2);


if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player2 Wins!!!";
  }else if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "Player1 Wins!!!";
  }else{
    document.querySelector('h1').innerHTML = "There is no winner. One more round!";
  }
