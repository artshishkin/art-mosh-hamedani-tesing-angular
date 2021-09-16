/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {Todos2Component} from './todos2.component';
import {TodoService} from "./todo.service";
import {HttpClientModule} from "@angular/common/http";
import {from} from "rxjs";

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.
//
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below.

describe('Todos2Component', () => {
  let component: Todos2Component;
  let fixture: ComponentFixture<Todos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [Todos2Component],
      providers: [TodoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todos2Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should load todos from the server', () => {

    let todoService = TestBed.inject(TodoService);

    spyOn(todoService, "getTodos").and.returnValue(from([[1, 2, 3]]));
    fixture.detectChanges();

    expect(component.todos).toEqual([1, 2, 3]);
  });

  it('should load todos from the server - async', async(() => {

    let todoService = TestBed.inject(TodoService);

    spyOn(todoService, "getTodosPromise").and.returnValue(Promise.resolve([1, 2, 3]));
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.todos).toEqual([1, 2, 3]);
      console.log('`expect` was called ');
    });
  }));

  it('should load todos from the server - fakeAsync', fakeAsync(() => {

    let todoService = TestBed.inject(TodoService);

    spyOn(todoService, "getTodosPromise").and.returnValue(Promise.resolve([1, 2, 3]));
    fixture.detectChanges();

    tick();
    expect(component.todos).toEqual([1, 2, 3]);
    console.log('`expect` was called ');
  }));

});
