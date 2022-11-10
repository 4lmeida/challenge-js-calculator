const inputNumber1 = document.getElementById("number1");
inputNumber1.addEventListener('keyup', handleInputNumber1Keyup);

const inputNumber2 = document.getElementById("number2");
inputNumber2.addEventListener('keyup', handleInputNumber2Keyup);

const btnPlus = document.getElementById("btn-plus");
btnPlus.addEventListener("click", handleBtnPlusOnclick);

const btnTimes = document.getElementById("btn-times");
btnTimes.addEventListener('click', handleBtnTimesClick);

const btnClear = document.getElementById("btn-clear");
btnClear.addEventListener('click', handleBtnClearClick);

const resulBox = document.getElementById('result-box');



function handleBtnTimesClick() {
    const n1 = inputNumber1.value;
    const n2 = inputNumber2.value;

    console.log(inputNumber1.value);
    console.log(inputNumber2.value);

    if (isNumber(n1) && isNumber(n2)) {
        resulBox.innerHTML = Number(n1) * Number(n2);
        inputNumber1.classList.remove("input-error")
        inputNumber2.classList.remove("input-error")
    }
    else {
        inputNumber1.classList.add("input-error")
        inputNumber2.classList.add("input-error")
    }

    
}

function handleBtnPlusOnclick() {
    const n1 = inputNumber1.value;
    const n2 = inputNumber2.value;

    console.log(inputNumber1.value);
    console.log(inputNumber2.value);

    if (isNumber(n1) && isNumber(n2)) {
        resulBox.innerHTML = Number(n1) + Number(n2);
        inputNumber1.classList.remove("input-error")
        inputNumber2.classList.remove("input-error")
    }
    else {
        inputNumber1.classList.add("input-error")
        inputNumber2.classList.add("input-error")
    }
   
}

function handleBtnClearClick() {
    inputNumber1.value = "";
    inputNumber2.value = "";
    resulBox.innerHTML = 0;
    inputNumber1.classList.remove("input-error")
    inputNumber2.classList.remove("input-error")

    inputNumber1.focus();

}

function handleInputNumber1Keyup(event) {
    if(isNumber(event.target.value)) {
        event.target.classList.remove("input-error")
    }
    else {
        event.target.classList.add("input-error")
    }
}

function handleInputNumber2Keyup(event) {
    if(isNumber(event.target.value)) {
        event.target.classList.remove("input-error")
    }
    else {
        event.target.classList.add("input-error")
    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
