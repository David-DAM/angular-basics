import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name: String = "David";
  age: number = 24;
  @Output() incrementAgeEvent = new EventEmitter<number>()
  @Input() isLogged: boolean = false;
  hobbies: String[] = ["Programming","Video-games","Reading","Movies"];

  changeLoggedStatus(): void {
    this.isLogged = !this.isLogged;
  }

  changeUsername(username: string): void {
    this.name = username;
  }

  incrementAge(): void {
    this.age = this.age + 1;
    this.incrementAgeEvent.emit(this.age);
  }

  removeHobbie(hobbie: String): void{
    let indexOf = this.hobbies.indexOf(hobbie);
    this.hobbies.splice(indexOf, 1);
  }


}
