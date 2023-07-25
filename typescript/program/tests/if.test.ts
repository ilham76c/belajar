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

    it('should support switch statement', function() {
        function page(name: string): string {
            switch (name) {
                case 'home':
                    return 'Welcome to Homepage';
                case 'about':
                    return 'About, this website is...';
                default:
                    return 'Not Found!';
            }
        }
        
        expect(page('home')).toBe('Welcome to Homepage');
        expect(page('about')).toBe('About, this website is...');
        expect(page('tes')).toBe('Not Found!');
        expect(page('')).toBe('Not Found!');
    });
});