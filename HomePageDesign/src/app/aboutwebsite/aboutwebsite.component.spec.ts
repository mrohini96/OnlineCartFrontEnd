import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutwebsiteComponent } from './aboutwebsite.component';

describe('AboutwebsiteComponent', () => {
  let component: AboutwebsiteComponent;
  let fixture: ComponentFixture<AboutwebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutwebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutwebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
