// Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console.

var treePerameters = {
        hight: null,
        character: null
}

var userHeight = document.getElementById('inputHeight').innerHTML;
var userCharacter = document.getElementById('inputCharacter').innerHTML;
var growButton = document.getElementById('grow').innerHTML;

var tree = function(obj) {
    treePerameters.height += userHeight;
    treePerameters.character += userCharacter;
}


grow.addEventListener("click", tree);
grow.addEventListener("keypress", function(e){
    var key = e.keyCode;
    if (key === 13) {
        tree();
    }
});
