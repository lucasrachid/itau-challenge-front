import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    InputTextModule,
    ButtonModule,
    InputNumberModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  form!: FormGroup;
  controls!: { [key: string]: AbstractControl };
  sendDataLoading = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null],
      participation: [null, [Validators.required, Validators.min(0.01)]],
    });
    this.controls = this.form.controls;
  }

  submitData(): void {
    console.log(this.form);
    if (this.sendDataLoading) {
      return;
    }
    this.sendDataLoading = true;
    setTimeout(() => {
      console.log(this.form);
      this.sendDataLoading = false
    }, 5000)

  }

}
