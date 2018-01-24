const alphabet = "abcdefghiklmnopqrstuvwxyz".split("");
const alphLength = alphabet.length;

function encrypt(text, key) {
    text = text.toLowerCase().split("");
    let changedText = text.map(function (item) {
        return alphabet[(alphabet.indexOf(item) + key) % alphLength];
    });
    return changedText.join("");
}

function decrypt(text, key) {
    return encrypt(text, -key + alphLength);
}

exports.encrypt = encrypt;
exports.decrypt = decrypt;

