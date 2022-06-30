const operation = require('./index');

test('two plus two is four', () => {
    expect(operation.add(2, 2)).toBe(4);
  });

test('four times four is sixteen', ()=> {
    expect(operation.multiply(4, 4)).toBe(16);
})