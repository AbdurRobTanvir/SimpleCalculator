// function getValue(id) {
//     var input = document.getElementById(id).value;
//     input = parseFloat(input);
//     return input;
// }

// function plusFunction() {
//     var input1 = getValue("id1");
//     var input2 = getValue("id2");
//     var total = input1 + input2;

//     document.getElementById("result").innerHTML = total;
// }

// function minusFunction() {
//     var input1 = getValue("id1");
//     var input2 = getValue("id2");
//     var total = input1 - input2;

//     document.getElementById("result").innerHTML = total;
// }

// function multiplyFunction() {
//     var input1 = getValue("id1");
//     var input2 = getValue("id2");
//     var total = input1 * input2;

//     document.getElementById("result").innerHTML = total;
// }

// function divideFunction() {
//     var input1 = getValue("id1");
//     var input2 = getValue("id2");
//     var total = input1 / input2;

//     document.getElementById("result").innerHTML = total;
// }
function getValue(id) {
    var input = document.getElementById(id).value;
    input = parseFloat(input);
    return input;
}
function calFunction(sign) {
    var input1 = getValue("id1");
    var input2 = getValue("id2");
    
    if (sign === '+') {
        var total = input1 + input2;
    }

    else if (sign === '-') {
        var total = input1 - input2;
    }

    else if (sign === '*') {
        var total = input1 * input2;
    }

    else if (sign === '/') {
        var total = input1 / input2;
    }

    document.getElementById("result").innerHTML = total;
}

function resetAll() {
    document.getElementById("id1").value = "";
    document.getElementById("id2").value = "";
    document.getElementById("result").innerHTML = "";
}