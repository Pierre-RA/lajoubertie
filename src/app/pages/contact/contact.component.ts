import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { ContactService } from './contact.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  message;

  constructor(
    private fb: FormBuilder,
    private meta: Meta,
    private contactService: ContactService
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
    this.message = null;
    if (this.form.valid) {
      this.contactService.sendContactMail(values).subscribe(
        object => {
          this.message = {
            type: 'success',
            content: 'Votre message a été envoyé.'
          };
        },
        err => {
          this.message = {
            type: 'danger',
            content: 'Votre message n\'a pu être envoyé.'
          };
        }
      );
    }
  }

  removeAlert() {
    this.message = null;
  }
}
