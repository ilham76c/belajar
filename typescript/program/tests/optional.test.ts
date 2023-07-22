describe('Optional Parameter', function() {
    it('should support null and undefined', function() {
        function sayHello(name?: string | null) {
            if (name) {
                return `Hello, ${name}`;
            } else {
                return 'Hello';
            }
        }
        
        expect(sayHello('ilham')).toBe('Hello, ilham');
        
        const name: string | undefined = undefined;
        expect(sayHello(name)).toBe('Hello');

        expect(sayHello(null)).toBe('Hello');
    });
});