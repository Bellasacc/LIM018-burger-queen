export default interface Order {
    id?: string;
    client: string;
    listOrder: Array<{}>;
    dateCreation: number;
    dateFinally: number;
    status: string;
    total: number;
}