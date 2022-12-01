test('test toBe', () => {
  const name = 'Moh. Ilham B.';
  const sayHello = `Hello, ${name}`;

  expect(sayHello).toBe('Hello, Moh. Ilham B.');
});

test('test toEqual', () => {
  const person = { id: 1 };

  Object.assign(person, { name: 'Moh. Ilham B.' });

  expect(person).toEqual({ id: 1, name: 'Moh. Ilham B.' });
});