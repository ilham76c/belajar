// export enum CustomerType {
//     REGULER /* default value is 0 */,
//     GOLD /* default value is 1 */,
//     PLATINUM /* default value is 2 */
// }

export enum CustomerType {
    REGULER = 'REGULER',
    GOLD = 'GOLD',
    PLATINUM = 'PLATINUM'
}


export type Customer = {
    id: number,
    name: string,
    type: CustomerType
}