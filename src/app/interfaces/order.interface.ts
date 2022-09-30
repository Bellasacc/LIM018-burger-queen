export default interface Order {
    id?: string;
    client: string;
    listOrder: Array<{}>;
    dateCreation: Date;
    dateFinally: Date;
    status: string;
    total: number;
}