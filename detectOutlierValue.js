function detectOutlierValue(str) {
    let numbers = str.split(" ").map(Number);

    let evens = numbers.filter((num) => num % 2 === 0);
    let odds = numbers.filter((num) => num % 2 !== 0);

    return evens.length === 1 ? evens[0] : odds[0];
}
console.log(detectOutlierValue("2 4 7 8 10"));
console.log(detectOutlierValue("1 10 1 1"));