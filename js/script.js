function addition(){
    // We declare the id variables
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    // We declare the addition operation
    let add = number1 + number2;

    document.getElementById('result').value = add;
}

function subtraction(){
   // We declare the id variables
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    // We declare the subtraction operation
    let sub = number1 - number2;

    document.getElementById('result').value = sub;
}

function multiplication(){
    // We declare the id variables
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    // We declare the multiplication operation
    let mul = number1 * number2;

    document.getElementById('result').value = mul;
}

function division(){
    // We declare the id variables
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    // We declare the division operation
    let div = number1 / number2;

    document.getElementById('result').value = div;
}

function squareRoot() {
   // We declare the id variables
    let number1 = parseFloat(document.getElementById('number1').value);

   // We declare the square root operation
    let sqrtNumber1 = Math.sqrt(number1);
   
    document.getElementById('result').value = sqrtNumber1;
    
}


