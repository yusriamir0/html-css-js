function multiple(number) {
    return number * (9 / 5);
}

function getFahrenheit(celcius) {
    return multiple(celcius) + 32;
}

console.log(getFahrenheit(15));
