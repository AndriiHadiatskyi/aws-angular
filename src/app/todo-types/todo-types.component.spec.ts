import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTypesComponent } from './todo-types.component';

describe('TodoTypesComponent', () => {
  let component: TodoTypesComponent;
  let fixture: ComponentFixture<TodoTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
