import { Seller } from '../src/seller';

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
});