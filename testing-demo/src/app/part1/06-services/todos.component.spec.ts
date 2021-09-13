import {TodosComponent} from "./todos.component";
import {TodoService} from "./todo.service";
import {from, throwError} from "rxjs";

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null as any);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {

    const todos = [1, 2, 3];
    spyOn(service, "getTodos").and.callFake(() => {
      return from([todos]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos.length).toBe(3);
    expect(component.todos).toBe(todos);

  });

  it('should call a server to save the changes when a new todo item is added', () => {

    let spy = spyOn(service, "add").and.callFake((newTodo: any) => {
      return from([true]);
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo returned from the server (callFake)', () => {
    let newTodoFromServer = {id: 1, title: 'Return from server'};
    let spy = spyOn(service, "add").and.callFake((newTodo: any) => {
      return from([newTodoFromServer]);
    });

    component.add();

    console.log(component.todos);
    expect(component.todos).toContain(newTodoFromServer);
    expect(component.todos.indexOf(newTodoFromServer)).toBeGreaterThan(-1);
  });

  it('should add the new todo returned from the server (returnValue)', () => {
    let newTodoFromServer = {id: 2, title: 'Return from server 2'};
    let spy = spyOn(service, "add").and.returnValue(from([newTodoFromServer]));

    component.add();

    console.log(component.todos);
    expect(component.todos).toContain(newTodoFromServer);
    expect(component.todos.indexOf(newTodoFromServer)).toBeGreaterThan(-1);
  });

  it('should set the message property if server returns an error when adding a new todo', () => {

    let errorMsg = "Can not add todo!";
    let spy = spyOn(service, "add").and.returnValue(throwError(errorMsg));

    component.add();

    expect(component.message).toBe(errorMsg);
  });

});
