import { CommonModule } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  loginForm!: FormGroup;
  isUserLoggedIn: WritableSignal<boolean> = signal(false);
  userStatus: WritableSignal<boolean> = signal(false);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { 
    this.loginForm = this.fb.group({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  onSubmit(data: any) {
    if (data.username === 'admin' && data.password === 'admin@123') {
      this.isUserLoggedIn.set(true);
      this.loginForm.reset();
    } else {
      this.isUserLoggedIn.set(false);
    }
  }

  isUserLoggedInChange(event: boolean) {
    this.userStatus.set(event);
  }

}
