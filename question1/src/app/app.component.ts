import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'question1';

  textInput: number = 0;
  options = ['isPrime', 'isFibonacci'];
  optionSelected = 'isPrime';

  result = false;

  onValueChanged() {
    /* check here !  */
    if (+ this.textInput < 0) {
      this.textInput = 1;
    }

    if (this.optionSelected === 'isPrime') {
      this.result = this.isPrime(+ this.textInput)
    } else {
      this.result = this.isFibonacci(this.textInput);
    }

  }

  isPrime(num: number) {
    for (var i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  isFibonacci(query: any, count = 1, last = 0): boolean {
    if (count < query) {
      return this.isFibonacci(query, count + last, count);
    };
    if (count === query) {
      return true;
    }
    return false;
  }


}
