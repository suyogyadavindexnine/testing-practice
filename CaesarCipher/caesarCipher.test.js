const caesar = require("./caesarCipher");

test("works with single letters", () => {
    expect(caesar("A", 1)).toEqual("B");
});
test("works with words", () => {
    expect(caesar("Aaa", 1)).toEqual("Bbb");
});
test("works with phrases", () => {
    expect(caesar("Hello, World!", 5)).toEqual("Mjqqt, Btwqi!");
});
test("works with large key", () => {
    expect(caesar("Hello, World!", 75)).toEqual("Ebiil, Tloia!");
});