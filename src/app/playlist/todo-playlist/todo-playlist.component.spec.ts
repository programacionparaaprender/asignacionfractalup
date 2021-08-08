import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPlayListComponent } from './todo-playlist.component';

describe('TodoPlayListComponent', () => {
  let component: TodoPlayListComponent;
  let fixture: ComponentFixture<TodoPlayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoPlayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
