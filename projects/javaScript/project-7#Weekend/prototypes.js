let reduce = function (reduceFn,z,xs) {
    for (x of xs ){
        z=reduceFn(z,x)
    }
    return z
}

Array.prototype.map = function(mapFn) {
    return this.reduce( (z, x) => z.concat([mapFn(x)]), [])
};

Array.prototype.filter = function (filterFn) {
    return this.reduce( (z, x) => {
        return filterFn(x) ? z.concat([x]) : z
    }, [])
};


Array.prototype.reduce = function (reduceFn, z) {
    for (x of this) {
        z=reduceFn(z, x)
    }
    return z;
}

