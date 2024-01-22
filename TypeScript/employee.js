"use strict";
class Employee {
    constructor(name, age, contactDetails) {
        this.name = name;
        this.age = age;
        this.contactDetails = contactDetails;
    }
    getFirstAddress() {
        const addressLine = this.contactDetails.address.addressLine1;
        return `${addressLine.houseno}, ${addressLine.street}, ${addressLine.city}, ${addressLine.country}`;
    }
    getSecondAddress() {
        const addressLine = this.contactDetails.address.addressLine2;
        return `${addressLine.houseno}, ${addressLine.street}, ${addressLine.city}, ${addressLine.country}`;
    }
}
const employee1 = new Employee("John", 21, {
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
});
console.log(employee1.getFirstAddress());
console.log(employee1.getSecondAddress());
