import { Component } from '@angular/core';
import { DataService} from './data.service';

import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


//event binding 
// (focus)="myMethod()"  // An element has received focus
// (blur)="myMethod()"   // An element has lost focus

// (submit)="myMethod()"  // A submit button has been pressed

// (scroll)="myMethod()"

// (cut)="myMethod()"
// (copy)="myMethod()"
// (paste)="myMethod()"

// (keydown)="myMethod()"
// (keypress)="myMethod()"
// (keyup)="myMethod()"

// (mouseenter)="myMethod()"
// (mousedown)="myMethod()"
// (mouseup)="myMethod()"

// (click)="myMethod()"
// (dblclick)="myMethod()"

// (drag)="myMethod()"
// (dragover)="myMethod()"
// (drop)="myMethod()"


@Component({//everything here can be access by the template
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],// Other component properties removed
  


  styles: [`

  	p {
	    width:200px;
	    background:lightgray;
	    margin: 100px auto;
	    text-align:center;
	    padding:20px;
	    font-size:1.5em;
  	}

    h1 {
        text-decoration:underline;
    }
    .red-title {
      color:red;
    }
    .large-title {
      font-size:4em;
    }
    .red2-title{
    	color:red;
    }

    .green-title{
    	color:green;
    }

    .loong-title{
    	font-size:6em;
    }

	`],

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

// template: `
// 	<h1>Hey guys!</h1>
// 	<button [disabled]="buttonStatus">My Button</button>
//    `

 // template: `

 // <h1 [ngClass]="titleClasses2">Hello !!</h1>

 // `

 // template: ` 

 // <h1 [ngStyle]="styleBindingExample">Hello !!</h1>

 // `

 // template: ` 

 // <p>{{ someProperty }}</p>

 // `

 template: ` 

   <p [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>


 `,
 animations: [
	trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small <=> large', animate('300ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))),
        
    ]),
 ]

})
export class AppComponent {
  title = 'app2';

  constructor(private dataService:DataService){

  }


  state: string = 'small';

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }

  someProperty:string = '';

  ngOnInit(){
  	console.log(this.dataService.cars);

  	this.someProperty = this.dataService.myData();
  }
  // myObject = {
  //   gender: 'male',
  //   age: 33,
  //   location: 'USA'
  // };

  angularLogo = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
//  buttonStatus = 'enabled';
  buttonStatus = false;

  titleClass = 'red-title';

  titleClasses = {
    'red-title': true,
    'large-title': true
  }

  titleStyles = {
    'color': 'red',
    'font-size' : '4em'
  }

  titleClass2 = 'red2-title';
  titleClasses2 = {
  	'green-title':true,
  	'loong-title':true,
  }

  // styleBindingExample{
  // 	'color' : 'blue',
  // 	'font-size' : '4em'
  // }

  myArr = ['him','hers','yours','theirs'];

  myEvent(event) {
    console.log(event);
  }


}
