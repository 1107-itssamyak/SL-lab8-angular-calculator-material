import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  title = 'calculator-app-material';

  public n1: number;
  public n2: number;
  public n3: string;
  public n4: string;
  public n5: number;

  AppComponent() {
    this.n1 = 0;
    this.n2 = 0;
    this.n3 = "";
    this.n4 = "";
    this.n5 = 0;
  }

  add() {
    this.n5 = 0;
    if (this.n1 == NaN && this.n2 === NaN) {
      this.n3 = `0`;
      return;
    }
    this.n3 = `${this.n1} + ${this.n2} = ${this.n1 + this.n2}`;
  }

  sub() {
    this.n5 = 0;
    if (this.n1 == NaN && this.n2 === NaN) {
      this.n3 = `0`;
      return;
    }
    this.n3 = `${this.n1} - ${this.n2} = ${this.n1 - this.n2}`
  }

  mul() {
    this.n5 = 0;
    if (this.n1 == NaN && this.n2 === NaN) {
      this.n3 = `0`;
      return;
    }
    this.n3 = `${this.n1} * ${this.n2} = ${this.n1 * this.n2}`
  }

  divi() {
    this.n5 = 0;
    if (this.n1 == NaN && this.n2 === NaN) {
      this.n3 = `0`;
      return;
    }
    this.n3 = `${this.n1} / ${this.n2} = ${this.n1 / this.n2}`
  }

  fac() {
    this.n5 = 0;
    let ans = 1;
    let n = this.n1;
    while (n != 1) {
      ans *= n;
      n--;
    }
    this.n3 = `${this.n1}! = ${ans}`;
  }

  prime(){
    let flag = true;
    this.n5 = 1;
    
    if (this.n1 === 1) {
      this.n4 = `0`;
      return;
    }
    
    for (let i = 2; i < this.n1; i++) {
        if (this.n1 % i == 0) {
            flag = false;
            break;
        }
    }

    if (flag === true) {
        this.n4 = `${this.n1} is a Prime Number`;
    } else {
      this.n4 = `${this.n1} is not a Prime Number`;
    }
  }
}
