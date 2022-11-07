const inputNumber1 = document.getElementById("number1");
inputNumber1.addEventListener('keyup', handleImputNumberKeyup1);

const inputNumber2 = document.getElementById("number2");
inputNumber2.addEventListener('keyup', handleImputNumberKeyup2);

const btnPlus = document.getElementById("btn-plus");
btnPlus.addEventListener("click", handleBtnPlusOnclick);

const btnTimes = document.getElementById("btn-times");


const btnClear = document.getElementById("btn-clear");

const resulBox = document.getElementById('result-box');

function handleImputNumberKeyup1(event) {
    resulBox.innerHTML =  Number(event.target.value);
}

function handleImputNumberKeyup2(event) { 
    resulBox.innerHTML = Number(event.target.value);
}

console.log(resulBox.innerHTML)


function handleBtnPlusOnclick() {
    resulBox.innerHTML = 8 + 8;

}

console.log(resulBox.innerHTML);

/*function result(event1, event2) {
    if(btnPlus === "+") {
        return event1.handleImputNameKeyup1 + event2.handleImputNameKeyup2;
    }
    else if(btnTimes === "x") {
        return event1.handleImputNameKeyup1 * event2.handleImputNameKeyup2;
    }
    else {
        return 0;
    }
}

console.log(result.value);*/
