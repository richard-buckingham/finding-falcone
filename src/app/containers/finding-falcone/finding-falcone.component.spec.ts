import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HttpClientModule } from "@angular/common/http";

import { FindingFalconeComponent } from "./finding-falcone.component";
import { FooterComponent } from "../../components//footer/footer.component";

describe("FindingFalconeComponent", () => {
  let component: FindingFalconeComponent;
  let fixture: ComponentFixture<FindingFalconeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FindingFalconeComponent, FooterComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindingFalconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
