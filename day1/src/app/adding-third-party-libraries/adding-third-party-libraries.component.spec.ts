import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingThirdPartyLibrariesComponent } from './adding-third-party-libraries.component';

describe('AddingThirdPartyLibrariesComponent', () => {
  let component: AddingThirdPartyLibrariesComponent;
  let fixture: ComponentFixture<AddingThirdPartyLibrariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingThirdPartyLibrariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingThirdPartyLibrariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
