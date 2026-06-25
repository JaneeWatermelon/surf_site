import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./components/main-page").then(m => m.MainPage),
    },
    {
        path: "registration",
        loadComponent: () => import("./components/registration").then(m => m.Registration),
    },
];
