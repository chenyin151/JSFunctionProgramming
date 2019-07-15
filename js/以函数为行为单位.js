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
function lameCSV(str) {
    // 把str根据换行分割成项，并把这个项存入row里面，那么三次遍历，row的值是name, age, hair
    // Merber, 35, red 和Bob, 64, blonde
    return _.reduce(str.split('\n'), function(table, row) {
        console.log('reduce', table, row)
        // _.map把数组的每一项都遍历出来，并去除空白项把这个项添加到table中
        table.push(_.map(row.split(','),function(c){
            return c.trim();
        }))
        return table
    }, [])
}
var peopleTable = lameCSV('name,age,hair\nMerble,35,red\nBob, 64, blonde');
console.log(naiveNth(['a','b','c'], 1))