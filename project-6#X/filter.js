let reduce = function (reduceFn, z, xs) {
    for (let x of xs) {
        z = reduceFn(z, x);
    }
    return z;
};

Array.prototype.filter = function (filterFn) {
    return this.reduce( (z, x) => {
        return filterFn(x) ? z.concat([z]) : z
    }, [])
};

Array.prototype.map = function(mapFn) {
    return this.reduce( (z, x) => z.concat([mapFn(x)]), [])
};

let filter = (filterFn, xs) => {
    return reduce((z, x) => { return filterFn(x) ? z.concat([z]) : z }, [], xs);
}

