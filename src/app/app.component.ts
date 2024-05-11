import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserComponent} from "./user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = 'Ciudad real';

  handleIncrementAgeEvent(event: number): void{
    alert("The new age is "+ event)
  }

}
