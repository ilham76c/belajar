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
});