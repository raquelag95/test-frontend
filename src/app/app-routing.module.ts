import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "./components/content/content.component";

const routes: Routes = [
    {path: 'cards/:id', component: ContentComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'cards/people'}
];


@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]

})
export class AppRoutingModule {}