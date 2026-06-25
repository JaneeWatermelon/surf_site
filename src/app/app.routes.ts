import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./components/pages/main-page").then(m => m.MainPage),
    },
    {
        path: "registration",
        loadComponent: () => import("./components/pages/registration").then(m => m.Registration),
    },
];
