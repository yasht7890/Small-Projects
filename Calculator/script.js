
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
// console.log(buttons);

let currentInput = '';
let resetNext = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            display.textContent = '0';
        } else if (value === '=') {
            // Replace symbols with JavaScript-friendly operators
            let expression = currentInput;
            expression = expression.replaceAll('×', '*');
            expression = expression.replaceAll('÷', '/');
            expression = expression.replaceAll('−', '-');

            // Try to evaluate the expression
            try {
                let result = eval(expression);      // Calculate the result
                currentInput = result.toString();   // Convert result to string
                display.textContent = currentInput; // Show the result
                resetNext = true;                   // Mark that next input should reset
            } catch {
                display.textContent = 'Error';      // Show error if expression is invalid
                currentInput = '';
            }
        } else {
            if (resetNext) {
                currentInput = '';
                resetNext = false;
            }
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

