export interface User {
    id: number;
    name : string;
    email : string;
    phone : number;
    address : [{
        street: string;
        suite : string;
        city : string;
        zip: number;
    }]
}
