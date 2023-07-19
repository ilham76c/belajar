describe('Union Type', function() {
    it('should support in typescript', function() {
        let sample: number | string | boolean = 'Moh. Ilham B.';
        expect(sample).toBe('Moh. Ilham B.');

        sample = 100;
        expect(sample).toBe(100);

        sample = true;
        expect(sample).toBe(true);
    });

    it('should support typeof operator', function() {
        function process (value: number | string | boolean) {
            if (typeof value === 'string') {
                return `Text: ${value.toUpperCase()}`;
            } else if (typeof value === 'number') {
                return `Number: ${value}`; 
            } else if (typeof value === 'boolean') {
                return `Boolean: ${value}`;
            }
        
            return 'Unknown type data';
        }
        
        expect(process(100)).toBe('Number: 100');
        expect(process('ilham')).toBe('Text: ILHAM');
        expect(process(true)).toBe('Boolean: true');
    });
});