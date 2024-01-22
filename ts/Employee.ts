interface Person {
    name: string
    age : number
}

interface AddressLine {
    street : string
    houseNumber : number
}

interface Address {
    addressLine1 : AddressLine,
    addressLine2 : AddressLine    
}

interface ContactDetails {
    email: string;
    phoneNumber: string;
}

export class Employee implements Person, Address, ContactDetails {
    email: string
    phoneNumber: string
    addressLine1: AddressLine
    addressLine2: AddressLine
    name: string
    age: number

   constructor(name: string, age: number, email: string, phoneNumber: string, addressLine1: AddressLine, addressLine2: AddressLine) {
        this.name = name
        this.age = age
        this.email = email
        this.phoneNumber = phoneNumber
        this.addressLine1 = addressLine1
        this.addressLine2 = addressLine2
    }
}

