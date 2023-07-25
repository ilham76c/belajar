describe('IF Statement', function() {
    it('should support in typescript', function() {
        function examStatus(value: number): string {
            if (value > 80) {
                return 'Good';
            } else if (value > 60) {
                return 'Not Bad';
            } else {
                return 'Try Again';
            }
        }
        
        expect(examStatus(100)).toBe('Good');
        expect(examStatus(65)).toBe('Not Bad');
        expect(examStatus(40)).toBe('Try Again');
    });

    it('should support ternary operator', function() {
        const isOdd = (value: number) => { 
            return value % 2 === 1 ? true : false 
        };
        const isEven = (value: number) => { 
            return value % 2 === 0 ? true : false 
        };

        expect(isOdd(7)).toBe(true);
        expect(isOdd(6)).toBe(false);

        expect(isEven(10)).toBe(true);
        expect(isEven(9)).toBe(false);
    });
});