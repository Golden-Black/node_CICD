const operation = require('./index');

test('two plus two is four', () => {
    expect(operation.add(2, 2)).toBe(4);
  });

const sub = require('./index');
test('nine minus one then minus three is five', () =>{
    expect(operation.sub(9, 1, 3)).toBe(5);
});
