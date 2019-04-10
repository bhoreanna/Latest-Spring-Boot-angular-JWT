import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import {Observable, } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor() {
    this.todos.push(new Todo(1, 'Master in Angular', false, new Date()));
    this.todos.push(new Todo(2, 'Master in Spring Boot', false, new Date()));
    this.todos.push(new Todo(3, 'Master in JS', false, new Date()));

  }
  getTodosList() {
    return this.todos;
  }
}
