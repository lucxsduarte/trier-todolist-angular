import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent {
  @Output() public emiteItemTask = new EventEmitter();

  public addItemTask: string = '';

  public submitItemTask() {
    this.addItemTask = this.addItemTask.trim();
    if (this.addItemTask){
      this.emiteItemTask.emit(this.addItemTask);
      this.addItemTask = "";
    }
  }
}
