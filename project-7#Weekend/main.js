let reduce = function (reduceFn, z, xs) {
    for (let x of xs) {
    z = reduceFn(z, x)
   }
   return z
    }

let foldl = function (foldFn, z, xs) {
    for (let x of xs) {
        z = foldFn(z, x)
    }
    return z
}

let foldr = function (foldFn, z, xs) {
    for (let x of xs.reverse()) {
        z = foldFn(x, z)
    }
    return z
}

const reversL = (xs) => {
    return foldl( (z,x)=> [x].concat(z), [], xs);
}
const reversR = (xs) => {
    return foldl( (z,x) => [x].concat(z), [], xs );
}


const idsr = (xs) => {
    return foldr( (z,x)=> [z].concat(x) ,[],xs) ;
}
const idsl = (xs) => {
    return foldl( (z,x) => [x].concat(z) , [] ,xs.reverse());
}

