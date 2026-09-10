import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'sobre', pathMatch: 'full' },
  { 
    path: 'sobre', 
    loadComponent: () => import('./features/sobre/sobre').then(m => m.Sobre) 
  },
  { 
    path: 'formacao-academica', 
    loadComponent: () => import('./features/formacao-academica/formacao-academica').then(m => m.FormacaoAcademica) 
  },
  { 
    path: 'contato', 
    loadComponent: () => import('./features/contato/contato').then(m => m.contato) 
  },
  { 
    path: 'projetos', 
    loadComponent: () => import('./features/projetos/projetos').then(m => m.Projetos) 
  },
  { path: '**', redirectTo: 'sobre' }
];