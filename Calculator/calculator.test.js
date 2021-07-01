const calculator = require('./calculator');

test('add 1 and 2', () => {
    expect(calculator.add(1,2)).toEqual(3);
});

test('subtract 6 and 1', () => {
    expect(calculator.subtract(6,1)).toEqual(5);
});

test('divide 4 and 2', () => {
    expect(calculator.divide(4,2)).toEqual(2);
});

test('multiply 2 and 4', () => {
    expect(calculator.multiply(2,4)).toEqual(8);
});