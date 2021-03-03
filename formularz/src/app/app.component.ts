import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public form!: FormGroup;
  public users: User[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  public buildForm(): FormGroup {
    return this.formBuilder.group({
      id: ['', Validators.required],
      name: '',
      surname: '',
      pesel: '',
      phone: ''
    });
  }

  addUser(): void {
    this.users.push(this.form.value);
    this.form.reset();
  }
}
