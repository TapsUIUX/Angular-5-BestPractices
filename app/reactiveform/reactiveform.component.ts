import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
  styles: [
    `
    input.ng-invalid {border-left: 5px red solid  ;}
    input.ng-valid {border-left :5px green solid}
    `
    ]

// U can use these clases as wanted
//Other Classes ng-touched ng-dirty ng-invalid ng-valid ng-untouched ng-pristine

})

export class ReactiveformComponent implements OnInit {

//userForm:FormGroup;

constructor( ){  }


// formGroup repica of HTML forms

 userForm = new FormGroup({

        formDetails:new FormGroup({

        userName : new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
        userEmail : new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,3}$/)]),
        confirmEmail : new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,3}$/)])

      }),

        formArray: new FormArray([])

      });

//
onSubmit(){
  console.log("userForm : ",this.userForm);
  // console.log( this.userForm.controls['formDetails'].controls['userEmail'].value )
//  console.log("formArray : ",this.userForm)
}

//console.log(userForm.controls)
//Using FormBuilder to replicate the above code.

ngOnInit() {}// Will go into Onint as a service.

// this.userForm = this._formBuilder.group({
//      formDetails:this._formBuilder.group({
//      userName : ['',Validators.required,Validators.minLength(4),Validators.maxLength(10)],
//      userEmail : ['',Validators.required,Validators.minLength(4),Validators.pattern(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,3}$/)],
//      confirmEmail : ['',Validators.required,Validators.minLength(4),Validators.pattern(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,3}$/)]
//    }//,{ validator : emailMatcher}
//   ),
//      formArray : this._formBuilder.array([])
//    });
//



// checkIfMatchingPasswords(control: AbstractControl): ValidationErrors | null {
//     return control.root.get('userEmail').value === control.root.get('confirmEmail').value ? null : { notSame: true };
// }

// this.emailMatcher = (control : AbstractControl)=>{
//   const userEmail = control.get('userEmail');
//   const confirmEmail= control.get('confirmEmail');
//   return (!userEmail || !confirmEmail)? null : (userEmail.value===confirmEmail.value) : null : {nomatch :true} ;
// }



}
