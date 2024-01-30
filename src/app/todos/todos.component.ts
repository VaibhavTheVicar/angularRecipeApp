import {Component, OnInit} from '@angular/core';
import {Todo} from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [new Todo(1, 'title1', 'Desc1'), new Todo(2, 'title1', 'Desc1'), new Todo(3, 'title1', 'Desc1')];

  constructor() {
  }

  ngOnInit() {
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

}
