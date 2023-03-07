// LEFT CONTENT

const bill = document.getElementById("bill");
const num = document.getElementById("num");

// RIGHT CONTENT

const amount = document.getElementById("tip-amount");
const total = document.getElementById("total");
const reset = document.getElementById("reset-button");

// BUTTON

const five = document.getElementById("five");
const ten = document.getElementById("ten");
const fifteen = document.getElementById("fifteen");
const twentyfive = document.getElementById("twenty-five");
const fifty = document.getElementById("fifty");
const custom = document.getElementById("custom");

five.onclick = function(){

    five.style.backgroundColor = "var(--strong-cyan)";
    five.style.color = "var( --very-dark-cyan)";

    let number = 5/100;
    let percent = number * bill.value;
    let tip =  percent / num.value ;
    let totalpay = (bill.value / num.value) + tip;

    amount.value += "$" + tip.toFixed(2);
    total.value += "$" + totalpay.toFixed(2);
}

ten.onclick = function(){

    ten.style.backgroundColor = "var(--strong-cyan)";
    ten.style.color = "var( --very-dark-cyan)";

    let number = 10/100;
    let percent = number * bill.value;
    let tip = percent  / num.value;
    let totalpay = (bill.value / num.value) + tip;

    amount.value += "$" + tip.toFixed(2);
    total.value += "$" + totalpay.toFixed(2);
}

fifteen.onclick = function(){

    fifteen.style.backgroundColor = "var(--strong-cyan)";
    fifteen.style.color = "var( --very-dark-cyan)";

    let number = 15/100;
    let percent = number * bill.value;
    let tip = percent  / num.value;
    let totalpay = (bill.value / num.value) + tip;

    amount.value += "$" + tip.toFixed(2);
    total.value += "$" + totalpay.toFixed(2);
}

twentyfive.onclick = function(){

    twentyfive.style.backgroundColor = "var(--strong-cyan)";
    twentyfive.style.color = "var( --very-dark-cyan)";

    let number = 25/100;
    let percent = number * bill.value;
    let tip = percent  / num.value;
    let totalpay = (bill.value / num.value) + tip;

    amount.value += "$" + tip.toFixed(2);
    total.value += "$" + totalpay.toFixed(2);
}

fifty.onclick = function(){

    fifty.style.backgroundColor = "var(--strong-cyan)";
    fifty.style.color = "var( --very-dark-cyan)";

    let number = 50/100;
    let percent = number * bill.value;
    let tip = percent  / num.value;
    let totalpay = (bill.value / num.value) + tip;

    amount.value += "$" + tip.toFixed(2);
    total.value += "$" + totalpay.toFixed(2);
}

custom.oninput = function(){

    let number = custom.value/100;
    let percent = number * bill.value;
    let tip = percent  / num.value;
    let totalpay = (bill.value / num.value) + tip;

    amount.value += "$" + tip.toFixed(2);
    total.value += "$" + totalpay.toFixed(2);
}

// NUMBER OF PEOPLE 

const error = document.getElementById("error");
const textpeople = document.getElementById("num");

textpeople.addEventListener("input", () =>{
    if(textpeople.value.length === 0){
        error.style.display = "block";
        textpeople.style.outline = "2px solid rgba(255, 0, 0, 0.712)";
    } else {
        error.style.display = null;
        textpeople.style.outline = null;
    }
})

reset.onclick = function(){
    amount.value = '';
    bill.value = '';
    num.value = '';
    total.value = '';
    custom.value = '';
    five.style = '';
    ten.style = '';
    fifteen.style = '';
    twentyfive.style = '';
    fifty.style = '';
}