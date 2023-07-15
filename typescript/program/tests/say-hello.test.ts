import { sayHello } from '../src/say-hello';

describe('Hello', function() {
    it('Should print Hello', function() {
        const name = 'Moh. Ilham B.';
        expect(sayHello(name)).toBe('Hello, Moh. Ilham B.');
    });
});