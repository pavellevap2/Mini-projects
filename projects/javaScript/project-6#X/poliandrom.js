let {deepStrictEqual: eq} = require("assert");

function isPaliandrom(str) {
    let reverseStr = str.split("").reverse("").join("");
    return (reverseStr === str) ? true : false;
}

eq(isPaliandrom("шалаш"), true);
eq(isPaliandrom("шалагши"), false);
eq(isPaliandrom("AAAAV"), false);

