function pickRandom(array) {
    let randomOffset = Math.floor(Math.random() * array.length);
    return array[randomOffset];

}
function makeUid(alphabet, n) {
   return Array(n).fill(null).map(_ => {
       return pickRandom(alphabet);
    }).join("")
}