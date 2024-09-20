// funcao.test.js
const isEven = require('./funcao');

test('deve retornar true para números pares', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-2)).toBe(true);
    expect(isEven(4)).toBe(true);
});

test('deve retornar false para números ímpares', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(-1)).toBe(false);
    expect(isEven(3)).toBe(false);
    expect(isEven(5)).toBe(false);
});
