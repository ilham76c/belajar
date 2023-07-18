describe('Array', function() {
    it('should same with JavaScript', function() {
        const names: string[] = ['Harimau', 'Kerbau', 'Kucing'];
        const values: number[] = [1, 2, 3];

        console.info(names);
        console.info(values);
    });

    it('should support readonly array', function() {
        const hobbies: ReadonlyArray<string> = ['Membaca', 'Menulis'];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);

        hobbies[0] = 'Olahraga';
    });

    it('should support tuple', function() {
        const person: readonly [string, string, number] = ['YRAV', '76c', 97];

        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});