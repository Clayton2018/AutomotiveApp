import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMechanicComponent } from './update-mechanic.component';

describe('UpdateMechanicComponent', () => {
  let component: UpdateMechanicComponent;
  let fixture: ComponentFixture<UpdateMechanicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMechanicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
