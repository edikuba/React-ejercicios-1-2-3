export class Contact {
    firtsName = '';
    lastName = '';
    email = '';
    status = false;

    constructor(firtsName, lastName, email, status) {
        this.firtsName = firtsName;
        this.lastName = lastName;
        this.email = email;
        this.status = status;
    }

}