import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateFormsService {

  constructor() { }

  validatePrice(control: AbstractControl) {
    const value = control.value

    if (value < 0){
      return { negativeValue: true }
    }
    return null
  }

  validateQuantity(control: AbstractControl) {
    const value = control.value

    if (value <= 0) {
      return {invalidQuantity: true}
    }
    return null
  }

  validateDescription(control: AbstractControl): {[key: string]: boolean} | null {
    const value = control.value

    if (value && (value.length < 3 || value.length > 140)){
      return {invalidDescriptionLength: true}
    }
    return null
  }

  validateNormalUrl(control: AbstractControl): {[key: string]: any} | null {
    const value = control.value

    if(value instanceof File) {
      const imageType = value.type.split('/')[0]

      console.log(imageType)

      if (imageType !== 'image') {
        return {invalidUrl: true}
      }
    }

    return null
  }
}
