import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FindingFalconeComponent } from "./containers/finding-falcone/finding-falcone.component";

import { ApiService } from "./services/api.service";
import { JourneySelectorComponent } from "./components/journey-selector/journey-selector.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FindingFalconeComponent,
    JourneySelectorComponent
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
