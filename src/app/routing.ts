import { Router, RouterModule } from '@angular/router';
import { HomeComponent }        from './home/home.component';
import { UserComponent }        from './user/user.component';
import { PostsComponent }       from './posts/posts.component';
import { NotfoundComponent }    from './notfound/notfound.component';

export const Routing = RouterModule.forRoot([
    {path:'',  component: HomeComponent},
    {path:'user',  component: UserComponent},
    {path:'posts', component: PostsComponent},
    {path:'**', component: NotfoundComponent},
]);
