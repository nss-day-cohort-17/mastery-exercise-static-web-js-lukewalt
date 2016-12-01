

var userHeight = document.getElementById('inputHeight');
var userCharacter = document.getElementById('inputCharacter');

// Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console.
var tree = function(num1, num2) {
    num1 = userHeight.value;
    num2 = userCharacter.value;
    if (userHeight.value === '' || userCharacter.value === '') {
        alert("Both inputs must have a value");
    } else if (isNaN(userHeight.value)) {
        alert("First value must be a number");
    }
    console.log(num1)
    console.log(num2)

}


var growButton = document.getElementById('grow');

growButton.addEventListener("click", tree);
userHeight.addEventListener("keypress", function(e){
    var key = e.keyCode;
    if (key === 13) {
        tree();
    }
});
userCharacter.addEventListener("keypress", function(e){
    var key = e.keyCode;
    if (key === 13) {
        tree();
    }
});
