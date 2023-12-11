import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CardValidationComponent} from "./comp/layer/card-validation/card-validation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardValidationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LuhnJS';
}
