import { Router, RouterModule } from '@angular/router';
import { HomeComponent }        from './home/home.component';
import { PostsComponent }       from './posts/posts.component';
import { NotfoundComponent }    from './notfound/notfound.component';

export const Routing = RouterModule.forRoot([
    {path:'',  component: HomeComponent},
    {path:'posts', component: PostsComponent},
    { path: 'not-found', component: NotfoundComponent },
	{ path: '**', redirectTo: 'not-found' }
]);
