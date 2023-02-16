function printDigits(num) {
    while (num) {
        let reverseDigitPrint = num % 10;
        console.log(reverseDigitPrint)
        num = (num - reverseDigitPrint) / 10
    }
}

printDigits(123456789)