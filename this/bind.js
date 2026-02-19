/*
function applySalesTax(taxRate, price) {
    return price + price * taxRate;
}

const applyCASalesTax = applySalesTax.bind(null, 0.075);
const applyMTSalesTax = applyCASalesTax.bind(null, 0);
*/

function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);