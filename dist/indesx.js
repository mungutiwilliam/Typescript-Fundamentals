"use strict";
let sales = 1234567891022;
let course = 'yellowwwww';
let is_pubished = false;
let door;
let numbers;
numbers = [2, 3, 5, 7, 8, 0, 3];
let user = [1, 'William Munguti', '0724551906'];
console.log(user);
numbers.forEach(number => {
    console.log(number);
});
numbers.forEach(number1 => number1.toString());
let selected_fruit = "Plums";
console.log(selected_fruit);
function calculateTax(selected_fruit) {
    let tax_amount;
    if (selected_fruit.length <= 5) {
        tax_amount = selected_fruit.length * 20;
        return tax_amount;
    }
    else {
        tax_amount = selected_fruit.length * 40;
        return tax_amount;
    }
}
let house = {
    id: 3,
    name: 'Uganda_house',
    bedrooms: 4,
    retire: (date) => {
        console.log(date);
    }
};
house;
function kgToPounds(weight) {
    if (typeof weight === "number")
        return weight * 20;
    else
        return parseInt(weight) * 0.3;
}
kgToPounds("20kg");
let textBox = {
    drag: () => { },
    resize: () => { }
};
//# sourceMappingURL=indesx.js.map