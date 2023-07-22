// interface hanya digunakan di TypeScript. Jika di compile ke JavaScript akan menjadi object kosong
export interface Seller {
    id: number,
    name: string,
    address?: string,
    readonly nib: string,
    readonly npwp: string
}