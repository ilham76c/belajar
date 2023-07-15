describe('Hello', function() {
    it('Should print Hello', function() {
        const name = 'Moh. Ilham B.';
        const sayHello = `Hello, ${name}`;
        expect(sayHello).toBe('Hello, Moh. Ilham B.');
    });
});