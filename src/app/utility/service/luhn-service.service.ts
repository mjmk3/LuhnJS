import { Injectable } from '@angular/core';
import { Luhn } from 'luhn-js';

@Injectable({
  providedIn: 'root',
})
export class LuhnService {
  isValidCardNumber(cardNumber: string): boolean {
    return Luhn.validate(cardNumber);
  }
}
