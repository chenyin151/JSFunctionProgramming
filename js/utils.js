function fail(thing) {
    throw new Error(thing);
}
function warn(thing) {
    console.log(['WARNING:', thing].join(' '));
}
function note(thing) {
    console.log(['NOTE:', thing].join(' '));
}