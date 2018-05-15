import {Component} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor() {

    //////////////////// Observable /////////////////////////////////
    const observableOne = new Observable(observer => {
      observer.next(Math.random());
    });

    observableOne.subscribe(value => console.log('Subscriber ONE A: ', value));
    observableOne.subscribe(value => console.log('Subscriber ONE B: ', value));


    ////////////////////////// Subject ///////////////////////////////
    const observableTwo = new Observable(observer => observer.next(Math.random()));

    const subject = new Subject();
    subject.subscribe(value => console.log('Subscriber TWO A:', value));
    subject.subscribe(value => console.log('Subscriber TWO B:', value));

    subject.next('My Personal Pre Data !!!');

    observableTwo.subscribe(subject);

    subject.next('My Personal Post Data !!!');


    ////////////////////////// Promise //////////////////////////////
    const promise = new Promise((resolve, reject) => {
      resolve(42);
    });

    promise.then(result => console.log('Promise : ', result));

  }

}
