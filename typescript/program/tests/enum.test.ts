import { Customer, CustomerType } from '../src/enum';

describe('Enum', function() {
    it('should support in typescript', function() {
        const customer: Customer = {
            id: 1,
            name: 'ilham',
            type: CustomerType.GOLD
        }
        
        expect(customer).toStrictEqual({
            id: 1,
            name: 'ilham',
            type: 'GOLD'
        });
    });
});