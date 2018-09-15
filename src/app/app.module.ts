import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FindingFalconeComponent } from "./containers/finding-falcone/finding-falcone.component";

import { ApiService } from "./services/api.service";
import { JourneySelectorComponent } from "./components/journey-selector/journey-selector.component";
import { ResultComponent } from "./components/result/result.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FindingFalconeComponent,
    JourneySelectorComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "finding-falcone", component: FindingFalconeComponent },
      { path: "result", component: ResultComponent },
      { path: "", redirectTo: "finding-falcone", pathMatch: "full" },
      { path: "**", redirectTo: "finding-falcone", pathMatch: "full" }
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
