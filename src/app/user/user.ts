export class Address {
    street: string;
    suite: string;
    city: string;
    zip: number;    
}

export class User {
    id?: number;
    name: string;
    phone: number;
    email: string; 
    address = new Address();
}