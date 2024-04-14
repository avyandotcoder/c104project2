// generation of random value
var y = Math.floor(Math.random()* 10 +1)
// count of attempts
var guess=1
// until hit

// function for the number sent by the user
function submit() {
    var x = document.getElementById("guessField").value
}

if (x == y) {
    alert("CONGRATUALTIONS!!!"+playername+" YOU GUESSED IT RIGHT IN"
+ guess + " GUESS ");
guess=1
}

else if (x>y) {
    guess++;
    alert("OOPS SORRY WRONG NUMBER!! TRY A SMALLER NUMBER")
}
else
{
    guess++;
    alert("OOPS SORRY WRONG NUMBER!! TRY A BIGGER NUMBER")
}

function playAgain() {
    y = Math.floor(Math.random()* 10 +1)
}