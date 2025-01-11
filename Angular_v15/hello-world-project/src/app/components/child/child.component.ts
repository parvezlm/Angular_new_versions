import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, Signal, SimpleChanges, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() isUserLoggedIn: boolean = false;
  @Output() isUserLoggedInChange = new EventEmitter<boolean>();
  users: any = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 2,
      "id": 2,
      "title": "lorem ipsum dolor sit amet",
      "completed": false
    }
  ]

  name: WritableSignal<any> = signal([]);


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isUserLoggedIn) {
      this.isUserLoggedInChange.emit(true);
    } else {
      this.isUserLoggedInChange.emit(false);
    }
  }

  ngOnInit(): void {
  }

  updateName() {
    this.name.set(this.users);
  }

}
