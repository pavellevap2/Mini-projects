function pushRandomItem(array, newArray) {
    return newArray.push(array[Math.floor(Math.random()*array.length)]);
}

function makeUid(alphabet, n) {
    let alphabetArray = alphabet.split("");
    let fullUid = [];

    for (let i = 0; i < n; i++){
      pushRandomItem(alphabetArray, fullUid)
    }

    return fullUid.join("")
}

console.log( makeUid("ader21421fdsfsdggd", 10) );
console.log( makeUid("abcdefghij123435645234", 16) );




