describe('Object', function() {
    it('should support in typescript', function() {
        const person: { id: string, name: string } = {
            id: '1',
            name: 'ilham'
        };
        
        person.id = '2';
        person.name = 'jos';
        
        expect(person).toStrictEqual({
            id: '2',
            name: 'jos'
        });
    });
});