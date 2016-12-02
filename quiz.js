var userHeight = document.getElementById('inputHeight');
var userCharacter = document.getElementById('inputCharacter');
var growButton = document.getElementById('grow');

// Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console.
var tree = function(obj) {

    var hit = obj.hit;
    var char = obj.char;

    console.log(hit);
    console.log(char);

    if (hit === '' || char === '') {
        alert("Both inputs must have a value");
    } else if (isNaN(hit)) {
        alert("First value must be a number");
    } else {

        var final = ''; //declared empty varibale to put my finished tree

        for (var i = 0; i < hit; i++) {

            //declared var inside of the for loop so the tree can be built in conjunction with counter variable
            var row = '';

            // [i = 3] -> input'7' - [3] - 1 = 3 spaces repeated from start
            row += ' '.repeat(hit - i - 1);

            // takes charater input , repeats it 2[7] + 1 , \n tells console to make a new line
            row += char.repeat(2*i + 1) + "\n";

            //takes the tree built in prior two lines and sets it equal to a new variable
            final += row;
        }
        //prints full tree in one console line
        console.log(final)
    }
}

//event listener for button
growButton.addEventListener("click", function(){

    //object is created inside of each event listener
    //referencing the DOM elements [stored in global variables] and -->

    var inputObj = {
        hit: userHeight.value,
        char: userCharacter.value
    };
    // --> passess that object to the function called in the annonymous function in the event listener
    tree(inputObj);

});

//event listener for height input
userHeight.addEventListener("keypress", function(e){
    var key = e.keyCode;
    if (key === 13) {
        var inputObj = {
            hit: userHeight.value,
            char: userCharacter.value
        };
        tree(inputObj);
    }
});

//event listener for character input
userCharacter.addEventListener("keypress", function(e){
    var key = e.keyCode;
    if (key === 13) {
        var inputObj = {
            hit: userHeight.value,
            char: userCharacter.value
        };
        tree(inputObj);
    }
});
