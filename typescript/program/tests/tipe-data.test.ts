describe('Data Type', function() {
    it('should must declare', function() {
        const name: string = "Moh. Ilham B.";
        const balance : number = 6000000;
        const isVip: boolean = true;

        console.log(name);
        console.log(balance);
        console.log(isVip);
    });

    it('should throw error', function() {
        let name: string = "Moh. Ilham B.";
        let balance : number = 6000000;
        let isVip: boolean = true;

        console.log(name);
        console.log(balance);
        console.log(isVip);

        name = 1; // error
        balance = "5000000"; // error
        isVip = 7; // error
    });
});