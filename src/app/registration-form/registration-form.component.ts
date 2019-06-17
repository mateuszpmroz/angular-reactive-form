import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisteredUser} from '../model/registered-user.model';
import {RegistrationForm} from './registration-form';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
    registeredUser: RegisteredUser;
    registrationForm: RegistrationForm;
    public formData = this.fb.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.pattern('^[0-9\\+\\-()]*')]],
        passwords: this.fb.group({
            password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[@#$%^&]).+')]],
            repeatPassword: ['', Validators.required]
        }, {validator: this.matchValidator('password', 'repeatPassword')}),
        pet: ['', Validators.required],
        address: this.fb.group({
            city: ['', Validators.required],
            street: ['', Validators.required],
            building: ['', Validators.required],
            flatNo: [''],
        }),
        consents: this.fb.group({
            newsletter: [false, Validators.required],
            sms: [false]
        })
    });

    constructor(private fb: FormBuilder) {
        this.registrationForm = new RegistrationForm(this.formData);
    }

    ngOnInit() {
    }

    onSubmit() {
        this.registeredUser = this.formData.value;
        console.table(this.registeredUser);
    }

    matchValidator(password: string, repeatPassword: string) {
        return (group: FormGroup) => {
            const passwordInput = group.controls[password];
            const passwordConfirmationInput = group.controls[repeatPassword];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({notEquivalent: true});
            }
        };
    }
}
