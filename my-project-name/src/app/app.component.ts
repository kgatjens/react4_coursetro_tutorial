import { Component } from '@angular/core';

@Component({//everything here can be access by the template
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],// Other component properties removed
  // template: `
  // <h1>Hey guys!</h1>
  // <p>{{ myObject.gender }}</p>
  // `

  // template: `
  // <h1>Hey guys!</h1>
  // <ul>
  //   <li *ngFor="let arr of myArr">{{ arr }}</li>
  // </ul>
  // `,

  // template: `
  // <h1>Hey guys!</h1>
  // <ul>
  //   <li *ngIf="myArr; else otherTmpl">Yeah, I exist.</li>
  // </ul>

  // <ng-template #otherTmpl>No, I do.</ng-template>
  // `,

  //  template: `
  // <h1>Hey guys!</h1>
  // <div *ngIf="myArr; then tmpl1 else tmpl2"></div>

  // <ng-template #tmpl1>I'm here</ng-template>
  // <ng-template #tmpl2>I'm not here</ng-template>
  // `,


//property binding, 3 ways
// template: `
// 	<h1>Hey guys!</h1>
//   	<img src="{{ angularLogo }}">
//   	<img [src]="angularLogo">
//   	<img bind-src="angularLogo">
//   `

template: `
	<h1>Hey guys!</h1>
	<button [disabled]="buttonStatus">My Button</button>


   `


})
export class AppComponent {
  title = 'app2';

  // myObject = {
  //   gender: 'male',
  //   age: 33,
  //   location: 'USA'
  // };

  angularLogo = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
//  buttonStatus = 'enabled';
  buttonStatus = false;



  myArr = ['him','hers','yours','theirs'];

}
