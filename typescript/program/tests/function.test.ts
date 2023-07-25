describe('Function', function() {
    it('should support in typescript', function() {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }
        
        expect(sayHello('Ilham')).toBe('Hello Ilham');
        
        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }
        
        // printHello('Ilham');
    });

    it('should support default value', function() {
        function sayHello(name: string = 'Guest'): string {
            return `Hello ${name}`;
        }
        
        expect(sayHello('Ilham')).toBe('Hello Ilham');
        expect(sayHello()).toBe('Hello Guest');
    });

    it('should support rest parameter', function() {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
        
            return total;
        }
        
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it('should support optional parameter', function() {
        function sayHello(firstName: string, lastName?: string): string {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }

            return `Hello ${firstName}`;
        }

        expect(sayHello('Joy')).toBe('Hello Joy');
        expect(sayHello('Mas', 'Ilham')).toBe('Hello Mas Ilham');
    });

    it('should support function overloading', function() {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any) {
            if (typeof value === 'string') {
                return `${value} is string`;
            } else if (typeof value === 'number') {
                return `${value} is number`;
            }
        }

        expect(callMe(100)).toBe('100 is number');
        expect(callMe('Joy')).toBe('Joy is string');
    });
});