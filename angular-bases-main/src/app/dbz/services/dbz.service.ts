import { Injectable } from '@angular/core';
import { Charater } from '../interfaces/charater.interface';
import { v4 as uuid} from 'uuid';


@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Charater[] = [{
    id:uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id:uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id:uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(charater: Charater): void {
    const newCharater: Charater={id:uuid(),...charater};

    this.characters.push(newCharater);
  }

  //onDeleteCharacter(index: number) {
  //  this.characters.splice(index, 1);
  //}

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(charater => charater.id !== id);

  }

}
