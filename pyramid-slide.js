updateTextInput(10);
//update slider number
function symbolsChange(height){
    var symbol = document.getElementById("symbols").value;
    console.log(symbol);
    return symbol;

    
}
function updateTextInput(val){
    document.getElementById('value').innerHTML = val;
    var height = val;
    drawPyramid(height);
}


//draw the pyramid
function drawPyramid(height) {
    
     // TODO 4
     // before drawing, clear the old content
     var node = document.getElementById("pyramid");
     while (node.hasChildNodes()) {
         node.removeChild(node.firstChild);
     }

     
    
     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             var spaceChar = "&nbsp"; 
             rowStr += spaceChar;
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += symbolsChange();
         }

        // create a text element with the string of characters
       rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}