let {deepStrictEqual: eq} = require("assert");
let {encrypt, decrypt} = require("./ceasar");
let similarText = "abcdef";

eq(encrypt(similarText, 1), encrypt(similarText, 1));
eq(encrypt(similarText, 2), "cdefgh");
eq(encrypt("qwerty", 2), "sygtva");

eq(decrypt(similarText, 3), decrypt(similarText, 3));
eq(decrypt(similarText, 5), "vwxyza");
eq(decrypt("sygtva", 2), "qwerty");


eq(encrypt(similarText, 5), decrypt(similarText, -5));

