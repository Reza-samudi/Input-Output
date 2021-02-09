import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  currentPerson :Person=new Person;
  Data:Person[] | undefined;
  


  ngOnInit(): void {
  }

}
export class Person {
  id:Number | undefined ;
  firstname:string | undefined;
  lastname:string | undefined;
}
