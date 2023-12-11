import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {CardType} from "credit-card-type";
import {Luhn} from "luhn-js";

@Component({
  selector: 'app-card-validation',
  standalone: true,
  imports: [ CommonModule ],
  providers: [Luhn, CardType],
  templateUrl: './card-validation.component.html',
  styleUrl: './card-validation.component.css'
})
export class CardValidationComponent {
  cardNumber: string = '';
  isValid: boolean | null = null;
  cardBrand: string | null = null;

  constructor(private luhn: Luhn, private cardType: CardType) {}

  validate(): void {
    this.isValid = this.luhn.validate(this.cardNumber);
    const cardTypeDetails = this.cardType.getType(this.cardNumber);
    this.cardBrand = cardTypeDetails ? cardTypeDetails.name.replace(/_/g, ' ').toUpperCase() : 'UNKNOWN';
  }
}
