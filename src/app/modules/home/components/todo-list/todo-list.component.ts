import { Component, DoCheck } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{

  
  public taskList: Array<Task> = JSON.parse(localStorage.getItem("tarefas") || '[]');
  
  public deleteItem(event: number){
    return this.taskList.splice(event, 1);
  }
  
  public deleteAll() {
    const confirm = window.confirm("Tem certeza que deseja excluir tudo?");
    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitTask(event: string){
    this.taskList.push({name: event, checked: false});
  }
  
  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Tarefa está vazia, deseja deletar?");
      if (confirm) {
        this.deleteItem(index);
      }
    }
  }

  public setLocalStorage() {
    if(this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
    );
    localStorage.setItem('tarefas', JSON.stringify(this.taskList));
    }
  }
  
  ngDoCheck(): void {
    this.setLocalStorage();
  }

}
