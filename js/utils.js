function fail(thing) {
    throw new Error(thing);
}
function warn(thing) {
    console.log(['WARNING:', thing].join(' '));
}
function note(thing) {
    console.log(['NOTE:', thing].join(' '));
}
function existy(x) {
    console.log('existy', x)
    return x != null;
}
function truthy(x) {
    return (x !== false) && existy(x);
}