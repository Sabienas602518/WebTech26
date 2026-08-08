import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Footer } from "../app/footer/footer";

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, Footer],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

vornameControl = new FormControl('');
nachnameControl = new FormControl('');
emailControl = new FormControl('');
ipAdresseControl = new FormControl('');

isVaild(): boolean 
{
  return this.vornameControl.value != '' &&
  this.nachnameControl.value != '' && 
  this.emailControl.value != '' && 
  this.ipAdresseControl.value != '';
}

create() : void{

  
  const vorname = this.vornameControl.value;
  const nachname = this.nachnameControl.value;
  const email = this.emailControl.value;
  const ipAdresse = this.ipAdresseControl.value;

  console.log('Creating entry:', {vorname, nachname,email,ipAdresse});



}
}
