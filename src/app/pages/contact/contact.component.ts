import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta } from '@angular/platform-browser';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private meta: Meta
  ) {
    this.meta.addTag({ name: 'og:type', content: 'website' });
    this.meta.addTag({ name: 'og:title', content: 'Contact - La Joubertie' });
    this.meta.addTag({ name: 'og:url', content: 'https://lajoubertie.fr/contact/' });
    this.meta.addTag({ name: 'og:image', content: environment.rootURL + 'assets/img/la_joubertie.jpg' });
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit(values: Object) {
    console.log(this.form.controls['email'].valid);
    if (this.form.valid) {
      console.log('f');
    }
  }
}
