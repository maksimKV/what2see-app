import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true }
    ]
})
export class EqualValidatorDirective implements Validator {
    constructor(@Attribute('validateEqual') public validateEqual: string,
    @Attribute('reverse') public reverse: string) {
    }

    private get isReverse() {
        if (!this.reverse) return false;
        return this.reverse === 'true' ? true: false;
    }

    validate(c: AbstractControl): { [key: string]: any } {
        // self value
        let matchValue = c.value;

        // control value
        let password = c.root.get(this.validateEqual);

        // value not equal
        if (password && matchValue !== password.value && !this.isReverse) {
            return {
                validateEqual: false
            }
        }

        // value equal and reverse
        if (password && matchValue === password.value && this.isReverse) {
            delete password.errors['validateEqual'];
            if (!Object.keys(password.errors).length) password.setErrors(null);
        }

        // value not equal and reverse
        if (password && matchValue !== password.value && this.isReverse) {
            password.setErrors({ validateEqual: false });
        }

        return null;
    }
}