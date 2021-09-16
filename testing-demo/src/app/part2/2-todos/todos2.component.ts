import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-todos2',
  templateUrl: './todos2.component.html',
  styleUrls: ['./todos2.component.css']
})
export class Todos2Component implements OnInit {
  todos: any[] = [];
  message: any;

  constructor(private service: TodoService) {
  }

  ngOnInit() {
    // this.service.getTodos().subscribe(t => this.todos = t);
    this.service.getTodosPromise().then(t => {
      console.log('`then` was called');
      this.todos = t;

    });
  }

  add() {
    const newTodo = {title: '... '};
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id: any) {
    if (confirm('Are you sure?')) {
      this.service.delete(id).subscribe();
    }
  }
}
