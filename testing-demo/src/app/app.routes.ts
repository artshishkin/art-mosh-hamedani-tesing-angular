import {Todos2Component} from './part2/2-todos/todos2.component';
import {UserDetailsComponent} from './part2/3-user-details/user-details.component';
import {HomeComponent} from "./part2/home/home.component";
import {UsersComponent} from "./part2/users/users.component";

export const routes = [
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'todos', component: Todos2Component },
    { path: '', component: HomeComponent },
];
