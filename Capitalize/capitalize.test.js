const capitalize = require('./capitalize');

test('check hello', () => {
    expect(capitalize("hello")).toBe("Hello");
});

test('check world', () => {
    expect(capitalize("world")).toBe("World");
});

test('check Something', () => {
    expect(capitalize("Something")).toBe("Something");
});
