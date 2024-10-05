// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Check for division by zero
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Function to update the result display
function updateResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Function to retrieve input values with validation
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

// Adding event listeners to the buttons
document.getElementById('add').addEventListener('click', function() {
    const [number1, number2] = getInputValues();
    const result = add(number1, number2);
    updateResult(result);
});

document.getElementById('subtract').addEventListener('click', function() {
    const [number1, number2] = getInputValues();
    const result = subtract(number1, number2);
    updateResult(result);
});

document.getElementById('multiply').addEventListener('click', function() {
    const [number1, number2] = getInputValues();
    const result = multiply(number1, number2);
    updateResult(result);
});

document.getElementById('divide').addEventListener('click', function() {
    const [number1, number2] = getInputValues();
    const result = divide(number1, number2);
    updateResult(result);
});
