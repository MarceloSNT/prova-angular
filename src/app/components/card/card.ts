import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../shared/models/Produto';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() produto : Produto[] = [];

 
}
