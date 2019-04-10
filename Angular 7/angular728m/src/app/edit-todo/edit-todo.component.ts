import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = + this.route.snapshot.params['id'];
    console.log('Id In Edit Component: ', this.id);
  }

}
