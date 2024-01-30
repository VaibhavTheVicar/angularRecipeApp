import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todo: Todo;

  @Output()
  onDelete: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {


  }

  ngOnInit() {
  }

  deleteEventEmitted(deletedTodo: Todo) {
    console.log("clicked");
    this.onDelete.emit(deletedTodo);
  }
}
