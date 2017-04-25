import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public onlyOdd = false;

  public oddNumbers: number[] = [1, 3, 5];
  public evenNumbers: number[] = [2, 4, 6];

  public value= 5;

  constructor() {}


}
