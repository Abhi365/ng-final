import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { NewUserComponent } from './new-user.component';
import { FormGroup } from '@angular/forms';

export interface FormComponent {
   form: FormGroup;
  // hasUnsavedChanges() : Boolean;
}

@Injectable()
export class PreventUnsavedChangesGuardService implements CanDeactivate<FormComponent> {

  canDeactivate(component:FormComponent){
    if(component.form.dirty)
    return confirm("Are you sure you don't want to save changes?");

    return true;
  }
  constructor() { }

}
