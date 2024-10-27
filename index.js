document.addEventListener('DOMContentLoaded',function(){
    function add(a, b,) {
        return a+b;
    }

    function multiply (a,b){
        return a*b;
    }

    function subtract (a,b){
        return a-b;
    }

    function divide (a,b){
        return a/b;
    }

    function operate(a,b,operator){
        return operator(a,b);
    }
    let displayedAndClickedNumber = 0;

    const displayContent = document.getElementById("screenDisplay");
    displayContent.textContent = `${displayedAndClickedNumber}`;

    const numberKeys = document.querySelectorAll(".number");

    numberKeys.forEach((item) => {
        item.addEventListener("click",(event)=>{
            displayedAndClickedNumber = event.target.value;
            displayContent.textContent = `${displayedAndClickedNumber}`;
        })


    });



})