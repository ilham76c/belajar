describe('Any', function() {
    it('should support in typescript', function() {
        const person: any = {
            id: 1,
            name: 'Moh. Ilham B.',
            age: 26
        };
        
        person.age = 50;
        
        expect(person.age).toBe(50);
    });
});