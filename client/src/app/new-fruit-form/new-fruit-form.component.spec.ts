import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFruitFormComponent } from './new-fruit-form.component';

describe('NewFruitFormComponent', () => {
  let component: NewFruitFormComponent;
  let fixture: ComponentFixture<NewFruitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFruitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFruitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
