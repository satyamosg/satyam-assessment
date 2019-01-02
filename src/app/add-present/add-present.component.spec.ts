import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPresentComponent } from './add-present.component';

describe('AddPresentComponent', () => {
  let component: AddPresentComponent;
  let fixture: ComponentFixture<AddPresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
