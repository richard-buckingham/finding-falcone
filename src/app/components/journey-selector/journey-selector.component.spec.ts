import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";

import { JourneySelectorComponent } from "./journey-selector.component";
import { SelectedDestination } from "../../models/SelectedDestination";

describe("JourneySelectorComponent", () => {
  let component: JourneySelectorComponent;
  let fixture: ComponentFixture<JourneySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JourneySelectorComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit a new selected destination", () => {
    spyOn(component.selectedDestination, "emit").and.callThrough();

    const selectedDest = new SelectedDestination(1, "saturn", "falcon heavy");
    component.emitSelectedDestination(selectedDest);

    expect(component.selectedDestination.emit).toHaveBeenCalledWith(
      selectedDest
    );
  });
});
