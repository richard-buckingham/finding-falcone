import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display the components title", () => {
    let de: DebugElement = fixture.debugElement.query(By.css("nav"));
    let el = de.nativeElement;

    expect(el.textContent).toContain(component.title);
  });

  it("should display font-awesome icon fa-space-shuttle", () => {
    const de: DebugElement = fixture.debugElement.query(By.css("nav>a>i"));
    const el = de.nativeElement;

    expect(el).toBeTruthy();
    expect(el.className).toContain("fa-space-shuttle");
  });
});
