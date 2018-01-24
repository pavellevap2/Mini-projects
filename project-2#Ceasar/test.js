let assert = require("assert");
let {encrypt, decrypt} = require("./ceasar");

let test='abcdef';
let expected=encrypt(test, 2);

assert.ok( test === decrypt(expected, 2), "значения равны" );
assert.deepEqual( expected, encrypt(test, 2) );
assert( encrypt('evcdefg', 4) === "izghikl");
assert( test !== expected,"значения не равны" );
assert.equal( "bcdef", encrypt("abcde",1) );


