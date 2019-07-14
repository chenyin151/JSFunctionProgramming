var letters = ['a', 'b', 'c'];
letters[1];

function naiveNth(a, index) {
    if (!_.isNumber(index)) fail('Expected a number as the index');
    if (!isIndexed(a)) fail('Not supported on non-indexed type');
    if (index < 0 || (index > a.length - 1)) {
        fail('Index value is out of bounds');
    } 
    return a[index];
}
function isIndexed(data) {
    return _.isArray(data) || _.isString(data);
}
function second(a) {
   return naiveNth(a, 1) 
}
console.log(naiveNth(['a','b','c'],1))