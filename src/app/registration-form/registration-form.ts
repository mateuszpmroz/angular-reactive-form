import {FormGroup} from '@angular/forms';

export class RegistrationForm {
    constructor(public formData: FormGroup) {
    }


    get phone() {
        return this.formData.get('phone');
    }

    get name() {
        return this.formData.get('name');
    }

    get surname() {
        return this.formData.get('surname');
    }

    get email() {
        return this.formData.get('email');
    }

    get passwords() {
        return this.formData.get('passwords');
    }

    get password() {
        return this.passwords.get('password');
    }

    get repeatPassword() {
        return this.passwords.get('repeatPassword');
    }

    get pet() {
        return this.formData.get('pet');
    }

    get address() {
        return this.formData.get('address');
    }

    get city() {
        return this.address.get('city');
    }

    get street() {
        return this.address.get('street');
    }

    get building() {
        return this.address.get('building');
    }

    get consents() {
        return this.formData.get('consents');
    }

    get newsletter() {
        return this.consents.get('newsletter');
    }
}