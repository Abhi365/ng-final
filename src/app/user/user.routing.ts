import { Router , RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NotfoundComponent }    from '../notfound/notfound.component';
import { PreventUnsavedChangesGuardService } from './new-user/prevent-unsaved-changes-guard.service';

export const UserRouting = RouterModule.forChild([
    {path:'user',  component: UserComponent},
    {path:'user/add',  component: NewUserComponent,
    canDeactivate: [ PreventUnsavedChangesGuardService]},
    {path:'**', component: NotfoundComponent},
]);