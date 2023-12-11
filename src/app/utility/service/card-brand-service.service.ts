import { Injectable } from '@angular/core';
import { CardType } from 'credit-card-type';

@Injectable({
  providedIn: 'root',
})
export class CardBrandService {
  getCardType(cardNumber: string): string {
    const cardType = CardType.getType(cardNumber);
    return cardType ? cardType.name.replace(/_/g, ' ').toUpperCase() : 'UNKNOWN';
  }
}
