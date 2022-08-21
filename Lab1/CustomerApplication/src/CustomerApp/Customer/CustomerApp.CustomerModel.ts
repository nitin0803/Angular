import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class CustomerModel {
    CustomerCode: string = "";
    CustomerName: string = "";
    CustomerAmount: number = 0;
    customerFormGroup: FormGroup;

    constructor() {
        let formBuilder = new FormBuilder();        
        
        let validationCollection = [];
        validationCollection.push(Validators.required);
        validationCollection.push(Validators.pattern("^[1-9]{4,4}$"));        
        let customerCodeControl = formBuilder.control('', Validators.compose(validationCollection));

        let customerNameControl = formBuilder.control('', Validators.required);
        
        this.customerFormGroup = formBuilder.group({});
        this.customerFormGroup.addControl('customerCodeControl', customerCodeControl)

        this.customerFormGroup.addControl('customerNameControl', customerNameControl);
    }

    ShowFormErrors() {
        const codeControl = this.customerFormGroup.get('customerCodeControl');

        if(codeControl?.touched && !codeControl.valid){
            if(codeControl.errors?.['required']){
                return 'Customer code is required!';
            }
        }

        if(codeControl?.touched && !codeControl.valid){
            if(codeControl.errors?.['pattern']){
                return 'Customer code should be 4 digit numeric!';
            }
        }

        const nameControl = this.customerFormGroup.get('customerNameControl');
        

        if(nameControl?.touched && !nameControl.valid){
            if(nameControl.errors?.['required']){
                return 'Customer name is required!';
            }
        }
        return null;
    }
}