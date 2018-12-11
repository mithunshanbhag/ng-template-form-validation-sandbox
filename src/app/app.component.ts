import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox';

  input1: string;
  input2: string;
  input3: string;
  input4: string;

  onFormSubmit() {
    console.log('form submitted');
  }
}
