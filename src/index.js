module.exports = function reverse(n) {
    let stringNumber = new String(n);
    let reverseStringNumber = '';

    for (let i = stringNumber.length - 1; i >= 0; i--) {
        reverseStringNumber += stringNumber[i];
    }

    let reverseNumber = parseInt(reverseStringNumber);

    return reverseNumber;
}