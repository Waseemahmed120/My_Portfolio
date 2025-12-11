
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About} from './about/about';
import { Skills} from './skills/skills';
import { Projects} from './projects/projects';
import { Contact} from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About},
  { path: 'skills', component: Skills},
  { path: 'projects', component: Projects},
  { path: 'contact', component: Contact},
];
