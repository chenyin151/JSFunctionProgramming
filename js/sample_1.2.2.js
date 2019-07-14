function parseAge(age) {
    if (!_.isString(age)) fail('Expecting a string');
    var a;
    note('Attempting to parse an age');
    a = parseInt(age, 10);
    if (_.isNaN(a)) {
        warn(['Could not parse age:', age].join(' '));
        a = 0;
    }
    return a;
}
console.log(parseAge('s2'))


