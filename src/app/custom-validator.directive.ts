import { Directive } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appCustomValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true }]
})
export class CustomValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {

    const val = control.value as string;
    if (!val) {
      return { 'required': true, 'minlength': true };
    }

    return (val.length >= 5)
      ? null
      : { 'minlength': true };
  }
}
