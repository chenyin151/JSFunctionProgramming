_.each(['whiskey', 'tango', 'foxrtrot'], function(word) {
    console.log(word.charAt(0).toUpperCase + word.substr(1))
})

function lyricSegment(n) {
    return _.chain([])
        .push(n + ' bottles of beer on the wall')
        .push(n + ' bottles of beer')
        .push('Take one down, pass it around')
        .tap(function(lyrics) {
            if (n > 1){
                lyrics.push((n - 1) + ' bottles of beer on the wall.');
            } else {
                lyrics.push('No more bottles of beer on the wall!')
            }
        }).value()

}
console.log(lyricSegment(100))