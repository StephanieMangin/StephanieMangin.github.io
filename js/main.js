function validateField() {
    if (!document.getElementById('letter').checkValidity()) {
        document.getElementById('validationError').innerHTML = "Input must be alpha B-Z";
        document.getElementById('btnDrawDiamond').disabled = true;
    }
    else {
        document.getElementById('validationError').innerHTML = "";
        document.getElementById('btnDrawDiamond').disabled = false;
    }
}

function clkDrawDiamond()
{
    dLetter = document.getElementById('letter').value;
    document.getElementById('diamond').innerHTML = drawDiamond(dLetter);
    document.getElementById('btnClearDiamond').disabled = false;
}

function clkClearDiamond() {
    document.getElementById('diamond').innerHTML = "";
    document.getElementById('btnClearDiamond').disabled = true;
}

function createAlphaArray(first, last) {
    var arr = [], i = first.charCodeAt(0), n = last.charCodeAt(0);
    for (; i <= n; ++i) {
        arr.push(String.fromCharCode(i));
    }
    return arr;
}

function drawDiamond(letter) {
    arr = createAlphaArray('A', letter.toUpperCase()); // Create array of letters to use
    strDiamond = "";

    var maxRowLength = (arr.length * 2) - 1; 
    
    for (i = 0; i <= (arr.length - 1); i++) {
        strDiamond = strDiamond + getLine(maxRowLength, arr[i]) + "<br>";
    }
    for (i = (arr.length - 2); i >= 0; i--) {
        strDiamond = strDiamond + getLine(maxRowLength, arr[i]) + "<br>";
    }

    return strDiamond;
}

function getLine(maxRowLength, letter) {
    var line = "";
    lrPadding = (maxRowLength - (2 * i + 1)) / 2;
    midPadding = maxRowLength - (lrPadding * 2) - 2;

    line = Array(lrPadding + 1).join('&nbsp;') + letter
        + (midPadding > 0 ? (Array(midPadding + 1).join('&nbsp;') + letter) : "")
        + Array(lrPadding + 1).join('&nbsp;');

    return line;
}
