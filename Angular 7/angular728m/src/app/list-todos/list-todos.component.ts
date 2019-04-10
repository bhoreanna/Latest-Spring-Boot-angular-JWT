import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../shared/todo.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
todos: Todo[] = [];
  constructor(private todoService: TodoService) { }

  ngOnInit() {

this.todos = this.todoService.getTodosList();
console.log( 'this.todos ', this.todos);
  }
  onDelete(id: number) {
console.log('ID: ', id);
  }
}
