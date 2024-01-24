import Calculator from './calculator.js'

let calculator = new Calculator();

test('1 + 2 = 3', () => {
    expect(calculator.add(10, 2)).toBe(12);
})

test('1 - 2 = -1', () => {
    expect(calculator.sub(1, 2)).toBe(-1);
})

test('10 * 2 = 20', () => {
    expect(calculator.multiply(10, 2)).toBe(20);
})

test('10 / 2 = 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
})