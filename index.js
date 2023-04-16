

const buttonPlus = document.getElementById("plus-sign");
buttonPlus.addEventListener("click", () => {
    var input1 = document.getElementById("id1").value;
    input1 = +input1;
    var input2 = document.getElementById("id2").value;
    input2 = +input2;
    var sum = input1 + input2;
    document.getElementById("result").innerHTML = sum;
})

const buttonMinus = document.getElementById("minus-sign");
buttonMinus.addEventListener("click", () => {
    var input1 = document.getElementById("id1").value;
    input1 = +input1;
    var input2 = document.getElementById("id2").value;
    input2 = +input2;
    var total = input1 - input2;
    document.getElementById("result").innerHTML = total;
})