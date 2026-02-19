function applySalesTax(taxRate, price) {
    return price + price * taxRate;
}

const applyCASalesTax = applySalesTax.bind(null, 0.075);