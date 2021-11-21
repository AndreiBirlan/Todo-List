import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChild('todo', { static: true }) todoContentInput: ElementRef;

  tasks: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(item: String) {
    if (item.length > 0) {
      this.tasks.push({ id: this.tasks.length, name: item });
      this.todoContentInput.nativeElement.value = '';
    }
  }

  removeTask(id: Number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
