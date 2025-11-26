const { sumar } = require('./app');

test('Sumar 1 + 2 debe ser 3', () => {
    expect(sumar(1, 2)).toBe(3);
});

test('Sumar -1 + 1 debe lanzar error', () => {
    expect(() => sumar(-1, 1)).toThrow("No se pueden sumar números negativos.");
});
