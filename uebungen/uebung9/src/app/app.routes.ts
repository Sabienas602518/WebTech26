import { Routes } from '@angular/router';
import { Home } from './home/home';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'read', component: TableComponent },
  { path: 'create', component: FormComponent },
  { path: '**', redirectTo: '' }
];