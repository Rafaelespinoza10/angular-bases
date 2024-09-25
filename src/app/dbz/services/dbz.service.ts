import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class dbzServices {
  public characters: Character[] = [{
    name: 'Krilin',
    power: 1000
  },
  {
    name: 'Goku',
    power: 9000,
  },
  {
    name: 'vegeta',
    power: 10000,
  },
  {
    name: 'Nappa',
    power: 5000,
  }
];


  public onNewCharacter(character : Character):void{
    this.characters.push(character);
  }

  public onDelete(index: number):void{

    for(let i = 0; i < this.characters.length; i++){
        if(index === i){
          this.characters.splice(index, 1);
        }
    }
  }

}
