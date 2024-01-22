interface AddressLine {
    houseno: number;
    street: string;
    city: string;
    country: string;
}

interface Address {
    addressLine1 : AddressLine;
    addressLine2 : AddressLine;
}

interface ContactDetails {
    contact: number;
    email: string;
    address: Address;
}

interface Person {
    name: string;
    age: number;
    contactDetails: ContactDetails;
}

class Employee implements Person {
    name: string;
    age: number;
    contactDetails: ContactDetails;
    constructor(name: string, age: number, contactDetails: ContactDetails){
        this.name = name;
        this.age = age;
        this.contactDetails = contactDetails;
    }

    getFirstAddress() : string {
        const addressLine : AddressLine = this.contactDetails.address.addressLine1;
        return `${addressLine.houseno}, ${addressLine.street}, ${addressLine.city}, ${addressLine.country}`;
    }
    
    getSecondAddress() : string {
        const addressLine: AddressLine =  this.contactDetails.address.addressLine2;
        return `${addressLine.houseno}, ${addressLine.street}, ${addressLine.city}, ${addressLine.country}`;
    }
}

const employee1ContactDetails = {
    contact: 9876543210,
    email: "john@gmail.com",
    address: {
        addressLine1: {
            houseno: 20,
            street: "Rampur",
            city: "Surat",
            country: "India"
        },
        addressLine2: {
            houseno: 21,
            street: "Rampur",
            city: "Rajkot",
            country: "India"
        },
    }
};
const employee1 = new Employee("John", 21,  employee1ContactDetails);

console.log(employee1.getFirstAddress());
console.log(employee1.getSecondAddress());