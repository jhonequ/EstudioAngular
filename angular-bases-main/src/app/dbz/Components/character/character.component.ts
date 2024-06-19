import { Component, EventEmitter, Output } from '@angular/core';
import { Charater } from '../../interfaces/charater.interface';

@Component({
  selector: 'dbz-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  @Output()
  public onNewCharater: EventEmitter<Charater> = new EventEmitter();

  public charater: Charater = {
    name:'',
    power:0
  };

  emitCharatecter(){
    if(this.charater.name.length === 0) return;

    this.onNewCharater.emit(this.charater)

    this.charater =  {
      name:'',
      power:0
    };
  }

}
