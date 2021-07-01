function ceaser(string, key) {
    return string
        .split("")
        .map(char => shiftChar(char, key))
        .join("");
}

function shiftChar(char, key) {
    const code = char.charCodeAt();
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(
            doMod(code,key)
            
        );
    }
    return char;
}

function doMod(code,key) {
    let x = code + key - codeSet(code);
    let y = 26;
    return (x%y) + codeSet(code);
}

function codeSet(code) {
    if (code<97) {
        return 65;
    } else {
        return 97;
    }
}

module.exports = ceaser;