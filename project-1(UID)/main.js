function generatorOfUid(alphabet,n) {
    let alphabetArray=alphabet.split('');
    let fullUid=[];
    for(let i=0;i<n;i++){
        fullUid.push(alphabetArray[Math.floor(Math.random()*alphabetArray.length)]);
    }
    return fullUid.join('')
}

console.log(generatorOfUid('ader21421fdsfsdggd',10));
console.log(generatorOfUid('abcdefghij123435645234',16));




