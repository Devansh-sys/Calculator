document.addEventListener('DOMContentLoaded',() =>{

    /*  functions to be made
    *   updatedisplay()
    *   operate() //this will  be executed when equals is clicked or operator is clicked once again
    *   cleardisplay() this  is for all clear
    *
    * Varibles to be defined are below
    * firstoperand
    * secondoperand
    * displaynumber
    * firstOperator
    * secondOperator
    * result
    * */

  //defined all variables below
    let firstOperand = null;
    let secondOperand = null;
    let firstOperator = null;
    let secondOperator = null;
    let displayedNumber = '0';
    let result =null;
    const buttons  =  document.querySelectorAll('.calcKeysBtn');

    //updating the display as per the clicked button
    function changeDisplay(){
        const screen = document.querySelector('#screenDisplay');
        screen.textContent = displayedNumber;
    }
    changeDisplay();
    function clickButton(){
        buttons.forEach((button)=>{
            button.addEventListener('click',(event)=>{
                const clickedButton = event.target;

                if (clickedButton.classList.contains('number')){
                   inputOperand(clickedButton.value);
                    changeDisplay();
                }
                else if(clickedButton.classList.contains('operator')){
                    console.log(clickedButton.value);
                    inputOperator(clickedButton.value);
                    changeDisplay();
                }else if(clickedButton.classList.contains('equals')){
                    console.log(clickedButton.value);
                    equals();
                    changeDisplay();
                }else if(clickedButton.classList.contains('percent')){
                    inputPercent(displayedNumber);
                    changeDisplay();
                }else if(clickedButton.classList.contains('sign')){
                    inputSign(displayedNumber);
                    changeDisplay();
                }else if(clickedButton.classList.contains('clear')){
                    clearDisplay();
                    changeDisplay();
                }else if(clickedButton.classList.contains('decimal')){
                    inputDecimal(clickedButton.value);
                    changeDisplay();
                }
            })
        })

    }
    clickButton();

    function inputOperand(operand){
        if (firstOperator === null ){
            if(displayedNumber === '0' || displayedNumber === 0 || displayedNumber === firstOperand){
                displayedNumber = operand;
            }else {
                displayedNumber += operand;
            }
        }else{
            //3th /5th click - inputs to second operand
            if(displayedNumber === firstOperand){
                displayedNumber = operand;
            }else{
                displayedNumber += operand;
            }
        }
    }

    function inputOperator(operator){
        if(firstOperator != null  && secondOperator === null ){
            //this is the 4th click operation
            secondOperator = operator;
            secondOperand =  displayedNumber;
            result = operate(Number(firstOperand),Number(secondOperand),firstOperator);
            displayedNumber = result.toString();
            firstOperand = displayedNumber;
            result = null;

        }else if(firstOperator !=  null && secondOperator != null ){
            //this is the 6th click operation to be performed
            secondOperand =  displayedNumber;
            result = operate(Number(firstOperand),Number(secondOperand),secondOperator);
            secondOperator = operator;
            displayedNumber = result.toString();
            firstOperand = displayedNumber;
            result = null;
        }else{
            firstOperator = operator;
            firstOperand =  displayedNumber;
        }
    }

    // function operate(firstOperand,secondOperand,operator){
    //     if(operator === 'add'){
    //         return firstOperand + secondOperand;
    //     }
    //     else if(operator === 'subtract'){
    //         return firstOperand - secondOperand;
    //     }
    //     else if(operator === 'multiply'){
    //         return firstOperand * secondOperand;
    //     }
    //     else if(operator === 'divide') {
    //         if(secondOperand === 0) return 'dumbass';
    //         else{
    //              return firstOperand / secondOperand;
    //         }
    //     }
    // }

    function operate(firstOperand, secondOperand, operator) {
        switch (operator) {
            case 'add':
            case '+':
                return firstOperand + secondOperand;
            case 'subtract':
            case '-':
                return firstOperand - secondOperand;
            case 'multiply':
            case '*':
                return firstOperand * secondOperand;
            case 'divide':
            case '/':
                if (secondOperand === 0) return 'Error';
                return firstOperand / secondOperand;
            default:
                return null;
        }
    }


    function equals(){
        if(firstOperator === null){
            displayedNumber = displayedNumber;

        }else if(secondOperator != null){
            //handling the final result
            secondOperand = displayedNumber;
            result = operate(Number(firstOperand),Number(secondOperand),secondOperator);
            console.log(result.toString());
            if(result === 'dumbass'){

                displayedNumber = result.toString();
            }else{
                displayedNumber = result.toString();
                firstOperand = displayedNumber;
                secondOperand = null;
                firstOperator = null;
                secondOperator = null;
                result = null;
            }
        }else{
            //handling the first operation
             secondOperand = displayedNumber ;
             result = operate(Number(firstOperand),Number(secondOperand),firstOperator);
             if(result === 'dumbass'){
                displayedNumber = result.toString();
             }else{
                displayedNumber = result.toString();
                firstOperand = displayedNumber;
                secondOperand = null;
                firstOperator = null;
                secondOperator = null;
                result = null;
             }
        }
    }


    function inputDecimal(dot) {
        if(displayedNumber === firstOperand || displayedNumber === secondOperand) {
            displayedNumber = '0';
            displayedNumber += dot;
        } else if(!displayedNumber.includes(dot)) {
            displayedNumber += dot;
        }
    }

    function inputBackspace() {
        if(firstOperand != null) {
            firstOperand = null;
            changeDisplay()
        }
    }

    function clearDisplay() {
        displayedNumber = '0';
        firstOperand = null;
        secondOperand = null;
        firstOperator = null;
        secondOperator = null;
        result = null;
    }
    function inputPercent(operand){
        displayedNumber = (Number(displayedNumber) / 100).toString();
    }


    function inputSign(operand){
        displayedNumber = (-Number(displayedNumber)).toString();
    }

})