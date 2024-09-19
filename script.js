var b1 = "";
var b2 = "";
var b3 = "";
var b4 = "";
var b5 = "";
var b6 = "";
var b7 = "";
var b8 = "";
var b9 = "";


flag = 1;
function clk_1() {
    if (flag == 1) {
        document.getElementById("b1").innerHTML = "X";
        b1 = "X";
        document.getElementById("b1").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("b1").innerHTML = "0";
        b1 = "0";
        document.getElementById("b1").style.pointerEvents = "none";
        flag = 1;
    }
}

function clk_2() {
    if (flag == 1) {
        document.getElementById("b2").innerHTML = "X";
        b2 = "X";
        document.getElementById("b2").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("b2").innerHTML = "0";
        b2 = "0";
        document.getElementById("b2").style.pointerEvents = "none";
        flag = 1;
    }
} 2

function clk_3() {
    if (flag == 1) {
        document.getElementById("b3").innerHTML = "X";
        b3 = "X";
        document.getElementById("b3").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("b3").innerHTML = "0";
        b3 = "0";
        document.getElementById("b3").style.pointerEvents = "none";
        flag = 1;
    }
} 3

function clk_4() {
    if (flag == 1) {
        document.getElementById("b4").innerHTML = "X";
        b4 = "X";
        document.getElementById("b4").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("b4").innerHTML = "0";
        b4 = "0";
        document.getElementById("b4").style.pointerEvents = "none";
        flag = 1;
    }
}

function clk_5() {
    if (flag == 1) {
        document.getElementById("b5").innerHTML = "X";
        b5 = "X";
        document.getElementById("b5").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("b5").innerHTML = "0";
        b5 = "0";
        document.getElementById("b5").style.pointerEvents = "none";
        flag = 1;
    }
} 6
function clk_6() {
    if (flag == 1) {
        document.getElementById("b6").innerHTML = "X";
        b6 = "X";
        document.getElementById("b6").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("b6").innerHTML = "0";
        b6 = "0";
        document.getElementById("b6").style.pointerEvents = "none";
        flag = 1;
    }
}

function clk_7() {
    if (flag == 1) {
        document.getElementById("b7").innerHTML = "X";
        b7 = "X";
        document.getElementById("b7").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("b7").innerHTML = "0";
        b7 = "0";
        document.getElementById("b7").style.pointerEvents = "none";
        flag = 1;
    }
}

function clk_8() {
    if (flag == 1) {
        document.getElementById("b8").innerHTML = "X";
        b8 = "X";
        document.getElementById("b8").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("b8").innerHTML = "0";
        b8 = "0";
        document.getElementById("b8").style.pointerEvents = "none";
        flag = 1;
    }
}

function clk_9() {
    if (flag == 1) {
        document.getElementById("b9").innerHTML = "X";
        b9 = "X";
        document.getElementById("b9").style.pointerEvents = "none";
        flag = 0;
    }
    else {
        document.getElementById("b9").innerHTML = "0";
        b9 = "0";
        document.getElementById("b9").style.pointerEvents = "none";
        flag = 1;
    }
}


function main() {

    if (b1 === b2 && b2 === b3 && b1 !== "") {
        document.getElementById("b1").style.backgroundColor = "green";
        document.getElementById("b2").style.backgroundColor = "green";
        document.getElementById("b3").style.backgroundColor = "green";
        document.getElementById("b4").style.pointerEvents = "none";
        document.getElementById("b5").style.pointerEvents = "none";
        document.getElementById("b6").style.pointerEvents = "none";
        document.getElementById("b7").style.pointerEvents = "none";
        document.getElementById("b8").style.pointerEvents = "none";
        document.getElementById("b9").style.pointerEvents = "none";
        document.getElementById("win").innerHTML = " 😎 YOU WIN 😎";
        document.getElementById("win").style.backgroundColor = "green";

    } else if (b4 === b5 && b5 === b6 && b4 !== "") {
        document.getElementById("b4").style.backgroundColor = "green";
        document.getElementById("b5").style.backgroundColor = "green";
        document.getElementById("b6").style.backgroundColor = "green";
        document.getElementById("b1").style.pointerEvents = "none";
        document.getElementById("b2").style.pointerEvents = "none";
        document.getElementById("b3").style.pointerEvents = "none";
        document.getElementById("b7").style.pointerEvents = "none";
        document.getElementById("b8").style.pointerEvents = "none";
        document.getElementById("b9").style.pointerEvents = "none";
        document.getElementById("win").innerHTML = " 😎 YOU WIN 😎";
        document.getElementById("win").style.backgroundColor = "green";

    } else if (b7 === b8 && b8 === b9 && b7 !== "") {
        document.getElementById("b7").style.backgroundColor = "green";
        document.getElementById("b8").style.backgroundColor = "green";
        document.getElementById("b9").style.backgroundColor = "green";
        document.getElementById("b1").style.pointerEvents = "none";
        document.getElementById("b2").style.pointerEvents = "none";
        document.getElementById("b3").style.pointerEvents = "none";
        document.getElementById("b4").style.pointerEvents = "none";
        document.getElementById("b5").style.pointerEvents = "none";
        document.getElementById("b6").style.pointerEvents = "none";
        document.getElementById("win").innerHTML = " 😎 YOU WIN 😎";
        document.getElementById("win").style.backgroundColor = "green";

    } else if (b1 === b4 && b4 === b7 && b1 !== "") {
        document.getElementById("b1").style.backgroundColor = "green";
        document.getElementById("b4").style.backgroundColor = "green";
        document.getElementById("b7").style.backgroundColor = "green";
        document.getElementById("b2").style.pointerEvents = "none";
        document.getElementById("b5").style.pointerEvents = "none";
        document.getElementById("b8").style.pointerEvents = "none";
        document.getElementById("b3").style.pointerEvents = "none";
        document.getElementById("b6").style.pointerEvents = "none";
        document.getElementById("b9").style.pointerEvents = "none";
        document.getElementById("win").innerHTML = " 😎 YOU WIN 😎";
        document.getElementById("win").style.backgroundColor = "green";

    } else if (b2 === b5 && b5 === b8 && b2 !== "") {
        document.getElementById("b2").style.backgroundColor = "green";
        document.getElementById("b5").style.backgroundColor = "green";
        document.getElementById("b8").style.backgroundColor = "green";
        document.getElementById("b1").style.pointerEvents = "none";
        document.getElementById("b4").style.pointerEvents = "none";
        document.getElementById("b7").style.pointerEvents = "none";
        document.getElementById("b3").style.pointerEvents = "none";
        document.getElementById("b6").style.pointerEvents = "none";
        document.getElementById("b9").style.pointerEvents = "none";
        document.getElementById("win").innerHTML = " 😎 YOU WIN 😎";
        document.getElementById("win").style.backgroundColor = "green";

    } else if (b3 === b6 && b6 === b9 && b3 !== "") {
        document.getElementById("b3").style.backgroundColor = "green";
        document.getElementById("b6").style.backgroundColor = "green";
        document.getElementById("b9").style.backgroundColor = "green";
        document.getElementById("b1").style.pointerEvents = "none";
        document.getElementById("b4").style.pointerEvents = "none";
        document.getElementById("b7").style.pointerEvents = "none";
        document.getElementById("b2").style.pointerEvents = "none";
        document.getElementById("b5").style.pointerEvents = "none";
        document.getElementById("b8").style.pointerEvents = "none";
        document.getElementById("win").innerHTML = " 😎 YOU WIN 😎";
        document.getElementById("win").style.backgroundColor = "green";

    } else if (b3 === b5 && b5 === b7 && b3 !== "") {
        document.getElementById("b7").style.backgroundColor = "green";
        document.getElementById("b5").style.backgroundColor = "green";
        document.getElementById("b3").style.backgroundColor = "green";
        document.getElementById("b4").style.pointerEvents = "none";
        document.getElementById("b1").style.pointerEvents = "none";
        document.getElementById("b8").style.pointerEvents = "none";
        document.getElementById("b2").style.pointerEvents = "none";
        document.getElementById("b9").style.pointerEvents = "none";
        document.getElementById("b6").style.pointerEvents = "none";
        document.getElementById("win").innerHTML = " 😎 YOU WIN 😎";
        document.getElementById("win").style.backgroundColor = "green";

    } else if (b1 === b5 && b5 === b9 && b1 !== "") {
        document.getElementById("b1").style.backgroundColor = "green";
        document.getElementById("b5").style.backgroundColor = "green";
        document.getElementById("b9").style.backgroundColor = "green";
        document.getElementById("b7").style.pointerEvents = "none";
        document.getElementById("b4").style.pointerEvents = "none";
        document.getElementById("b8").style.pointerEvents = "none";
        document.getElementById("b2").style.pointerEvents = "none";
        document.getElementById("b3").style.pointerEvents = "none";
        document.getElementById("b6").style.pointerEvents = "none";
        document.getElementById("win").innerHTML = " 😎 YOU WIN 😎";
        document.getElementById("win").style.backgroundColor = "green";

    }else if (b1 !== "" && b2 !== "" && b3 !== "" &&
    b4 !== "" && b5 !== "" && b6 !== "" &&
    b7 !== "" && b8 !== "" && b9 !== ""){
        document.getElementById("b1").style.backgroundColor = "red";
        document.getElementById("b2").style.backgroundColor = "red";
        document.getElementById("b3").style.backgroundColor = "red";
        document.getElementById("b4").style.backgroundColor = "red";
        document.getElementById("b5").style.backgroundColor = "red";
        document.getElementById("b6").style.backgroundColor = "red";
        document.getElementById("b7").style.backgroundColor = "red";
        document.getElementById("b8").style.backgroundColor = "red";
        document.getElementById("b9").style.backgroundColor = "red";
        document.getElementById("win").innerHTML = "😒 TIE 😒";
        document.getElementById("win").style.backgroundColor = "red";
    }
}





function playAgain() {
    document.getElementById("b1").style.pointerEvents = "auto";
    document.getElementById("b2").style.pointerEvents = "auto";
    document.getElementById("b3").style.pointerEvents = "auto";
    document.getElementById("b4").style.pointerEvents = "auto";
    document.getElementById("b5").style.pointerEvents = "auto";
    document.getElementById("b6").style.pointerEvents = "auto";
    document.getElementById("b7").style.pointerEvents = "auto";
    document.getElementById("b8").style.pointerEvents = "auto";
    document.getElementById("b9").style.pointerEvents = "auto";
    document.getElementById("win").innerHTML = "";

    document.getElementById("b1").style.backgroundColor = "#3f2c8a";
    document.getElementById("b2").style.backgroundColor = "#3f2c8a";
    document.getElementById("b3").style.backgroundColor = "#3f2c8a";
    document.getElementById("b4").style.backgroundColor = "#3f2c8a";
    document.getElementById("b5").style.backgroundColor = "#3f2c8a";
    document.getElementById("b6").style.backgroundColor = "#3f2c8a";
    document.getElementById("b7").style.backgroundColor = "#3f2c8a";
    document.getElementById("b8").style.backgroundColor = "#3f2c8a";
    document.getElementById("b9").style.backgroundColor = "#3f2c8a";
    document.getElementById("win").style.backgroundColor = "#3f2c8a";

    document.getElementById("b1").innerHTML = "";
    b1 = "";
    document.getElementById("b2").innerHTML = "";
    b2 = "";
    document.getElementById("b3").innerHTML = "";
    b3 = "";
    document.getElementById("b4").innerHTML = "";
    b4 = "";
    document.getElementById("b5").innerHTML = "";
    b5 = "";
    document.getElementById("b6").innerHTML = "";
    b6 = "";
    document.getElementById("b7").innerHTML = "";
    b7 = "";
    document.getElementById("b8").innerHTML = "";
    b8 = "";
    document.getElementById("b9").innerHTML = "";
    b9 = "";

    flag = 1;
}