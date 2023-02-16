const best = priceArr => {
    let lowestYet
    let maxDiff = 0

    for (let i = 0; i < priceArr.length; i++) {
        if (lowestYet === undefined || lowestYet > priceArr[i]) {
            lowestYet = priceArr[i]
        }
        
        let diff = priceArr[i] - lowestYet

        if (diff > maxDiff) {
            maxDiff = diff
        }
    }

    return maxDiff
}

console.log(best([7, 9, 5, 6, 3, 2]))