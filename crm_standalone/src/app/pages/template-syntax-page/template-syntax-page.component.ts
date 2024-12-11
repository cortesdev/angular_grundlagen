import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, NgStyle, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-syntax-page',
  imports: [
  DecimalPipe, 
  CurrencyPipe,
  PercentPipe, 
  UpperCasePipe,
  DatePipe,
  NgStyle,
  CommonModule,
  FormsModule
  ],
  templateUrl: './template-syntax-page.component.html',
  styleUrl: './template-syntax-page.component.sass'
})
export class TemplateSyntaxPageComponent {

  valueNum = 2000.534;
  valueStr = 'Das ist ein text'
  dateObject = new Date();
  htmlSnippet = 'Was ist <strong>text</strong> mit html';

  flag = true;

  list = ['a', 'b', 'c']


  clickHandler(): void {
    this.flag = !this.flag;
  }

  addToList(v: string): void {
    this.list.push(v)
  }

  formSubmitHandler(e: Event) {
    e.preventDefault();
    console.log('formular abgesendet');
    console.log(this.email);

  }

  email = 'example@example.com';

}