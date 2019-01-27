var itemSeparator = "\n,";

function stringify(array) {
    if (!(array instanceof Array))
        throw new Error("You can stringify only arrays with appendable JSON.");
    var string = "";
    for (var i = 0, l = array.length, item; i < l; ++i) {
        item = array[i];
        string += JSON.stringify(item) + itemSeparator;
    }
    return string;
}

function parse(string) {
    if (typeof (string) !== "string")
        throw new Error("You can parse only strings.");
    if (string === "")
        return [];
    if (string.slice(-itemSeparator.length) !== itemSeparator)
        throw new SyntaxError("Incomplete appendable JSON string.");
    var array = JSON.parse(`[${string}null]`);
    array.splice(-1, 1);
    return array;
}

module.exports = {
    stringify: stringify,
    parse: parse
};