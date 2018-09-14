import { TestBed, async } from "@angular/core/testing";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { FindingFalconeComponent } from "./containers/finding-falcone/finding-falcone.component";
import { FooterComponent } from "./components/footer/footer.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, FindingFalconeComponent, FooterComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
