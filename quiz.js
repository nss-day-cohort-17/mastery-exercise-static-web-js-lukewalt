
//captured user inputs from the DOM
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
    } else {

        var final = ''; //declared empty varibale to put my finished tree

        for (var i = 0; i < num1; i++) {

            //declared var inside of the for loop so the tree can be built in conjunction with counter variable
            var row = '';

            // [i = 3] -> input'7' - [3] - 1 = 3 spaces repeated from start
            row += ' '.repeat(num1 - i - 1);

            // takes charater input , repeats it 2[7] + 1 , \n tells console to make a new line
            row += num2.repeat(2*i + 1) + "\n";

            //takes the tree built in prior two lines and sets it equal to a new variable
            final += row;
        }

        //prints full tree in one console line
        console.log(final)
    }
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
