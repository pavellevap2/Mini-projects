const alphabet = "abcdefghiklmnopqrstuvwxyz".split("");
let newIndex;

function encrypt(text, key) {
    let cipher = [];
    let splitedText = text.toLowerCase().split("");

    if (typeof text == "string") {
        for (let i = 0; i < splitedText.length; i++) {
            newIndex=alphabet.indexOf(splitedText[i])+key ;
            cipher.push(alphabet[newIndex % alphabet.length]);
        }

        return cipher.join("")
    }
}

function decrypt(cipher, key) {
    let splitedCipher = cipher.toLowerCase().split("");
    let text=[];

    if (typeof cipher == "string") {
        for (let i = 0 ; i < splitedCipher.length ; i++) {
            newIndex=alphabet.indexOf(splitedCipher[i]) - key + alphabet.length;
            text.push(alphabet[newIndex % alphabet.length]);
        }

        return text.join('')
    }
}

module.exports.decrypt=decrypt;
module.exports.encrypt=encrypt;
