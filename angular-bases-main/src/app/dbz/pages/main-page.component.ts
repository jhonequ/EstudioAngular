import { Component } from '@angular/core';
import { Charater } from '../interfaces/charater.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService ){}

  get charaters(): Charater[]{
    return [...this.dbzService.characters];
  }

  OnDeleteCharacter(id:string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Charater){
    this.dbzService.addCharacter(character);
  }
}
