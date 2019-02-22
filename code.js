alert('Guess the answer in 3 attempts.....')

var correctanswer = ('siberian husky');
var guess = prompt("What's the name of the puppy in the behind background image");
for (i=0;i<3;i++){
    if (correctanswer === guess) {
        alert("Yayyy You are Right!");
        break;
    }
    else {
        guess = prompt("Please try again ");
    }
   
}
alert('Thanks for the game')
