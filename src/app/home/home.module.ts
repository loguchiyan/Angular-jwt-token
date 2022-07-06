import { NgModule } from "@angular/core";
import { HomeRouteModule } from "./home.route.module";
import { HomeComponent } from "./home.component";
@NgModule({
    imports:[HomeRouteModule],
    declarations:[
        HomeComponent
    ]
})
export class HomeModule{}