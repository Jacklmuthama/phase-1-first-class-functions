function receivesAFunction(spy) {
    spy()
}
function returnsANamedFunction() {
    var fn = function () {}
    return fn
}
function returnsAnAnonymousFunction() {
    return (function(){})
}