import { Category, Product } from '../src/type-alias';

describe('Type Alias', function() {
    it('should support in typescript', function() {
        const category: Category = {
            id: 1,
            name: 'Handphone'
        };
        
        const product: Product = {
            id: '1',
            name: 'Samsung S20',
            price: 2000000,
            category: category
        };
        
        expect(category).toStrictEqual({
            id: 1,
            name: 'Handphone'
        });

        expect(product).toStrictEqual({
            id: '1',
            name: 'Samsung S20',
            price: 2000000,
            category: {
                id: 1,
                name: 'Handphone'
            }
        });
    });
});