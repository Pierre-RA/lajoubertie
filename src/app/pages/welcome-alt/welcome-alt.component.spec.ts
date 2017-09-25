import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAltComponent } from './welcome-alt.component';

describe('WelcomeAltComponent', () => {
  let component: WelcomeAltComponent;
  let fixture: ComponentFixture<WelcomeAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
