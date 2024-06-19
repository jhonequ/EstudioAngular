import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Charater } from '../../interfaces/charater.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input()
  public charaterList: Charater[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharater(id: string): void {
    this.onDeleteId.emit(id);
  }
}
