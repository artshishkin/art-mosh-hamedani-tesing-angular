import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export class TodoFormComponent {
    form: FormGroup;

    constructor(formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            name: ['', Validators.required],
            email: [''],
        });
    }
}
