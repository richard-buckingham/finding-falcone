import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneySelectorComponent } from './journey-selector.component';

describe('JourneySelectorComponent', () => {
  let component: JourneySelectorComponent;
  let fixture: ComponentFixture<JourneySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
