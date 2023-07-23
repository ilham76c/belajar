import { Seller } from '../src/seller';
import { Employee, Manager } from '../src/employee';

describe('Interface', function() {
    it('should support in typescript', function() {
        const seller: Seller = {
            id: 1,
            name: 'Toko Handphone',
            nib: '123',
            npwp: '12345678'
        }

        // seller.npwp = '0000'; // akan error, karena property npwp merupakan readonly
        
        expect(seller).toStrictEqual({
            id: 1,
            name: 'Toko Handphone',
            nib: '123',
            npwp: '12345678'
        });

        seller.address = 'Jl. Raya Sepulu';

        expect(seller).toStrictEqual({
            id: 1,
            name: 'Toko Handphone',
            address: 'Jl. Raya Sepulu',
            nib: '123',
            npwp: '12345678'
        });
    });

    it('should support function interface', function() {
        interface AddInterface {
            (value1: number, value2: number): number
        }
        
        const add: AddInterface = (value1: number, value2: number): number => {
            return value1 + value2;
        };
        
        expect(add(2, 5)).toBe(7);
        expect(add(8, 8)).toBe(16);
    });

    it('should support indexable interface', function() {
        interface StringArray {
            [index: number]: string
        }
        
        const names: StringArray = ['Eudora', 'Joy', 'Kagura'];

        expect(names[0]).toBe('Eudora');
        expect(names[1]).toBe('Joy');
        expect(names[2]).toBe('Kagura');
    });

    it('should support indexable interface for non number index', function() {
        interface StringDictionary {
            [key: string]: string
        }
        
        const dictionary: StringDictionary = {
            name: 'Moh. Ilham B.',
            address: 'Bangkalan'
        }

        expect(dictionary['name']).toBe('Moh. Ilham B.');
        expect(dictionary['address']).toBe('Bangkalan');
    });

    it('should support extends interface', function() {
        const employee: Employee = {
            id: '1',
            name: 'Moh. Ilham B.',
            division: 'IT'
        };
        
        const manager: Manager = {
            id: '2',
            name: 'Joy',
            division: 'IT',
            numberOfEmployees: 15
        };
    });

    it('should support function in interface', function() {
        interface Person {
            name: string;
            sayHello(name: string): string;
        }

        const person: Person = {
            name: 'Ilham',
            sayHello: function(name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };

        expect(person.sayHello('Joy')).toBe('Hello Joy, my name is Ilham');
    });

    it('should support intersection types', function() {
        interface HasName {
            name: string;
        }
        
        interface HasId {
            id: string;
        }
        
        type Domain = HasId & HasName;

        const domain: Domain = {
            id: '1',
            name: 'Ilham'
        };

        expect(domain).toStrictEqual({
            id: '1',
            name: 'Ilham'
        });
    });
});