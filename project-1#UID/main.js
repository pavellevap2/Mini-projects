function makeUid(alphabet, n) {
    return alphabet.split("")
        .map(function (item, index, arr) {
            arr.length = n;
            return index = arr[Math.floor(Math.random() * arr.length)];
        }).join("");
}
