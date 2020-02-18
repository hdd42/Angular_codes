import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHomeMetaComponent } from './product-home-meta.component';

describe('ProductHomeMetaComponent', () => {
  let component: ProductHomeMetaComponent;
  let fixture: ComponentFixture<ProductHomeMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHomeMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHomeMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
