import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //inyeccion de dependencias
  constructor(private dbzService: dbzServices ){}
  public get character() : Character[] {
    return [...this.dbzService.characters];
  }
  public onDeleteCharacter(id: number){
    this.dbzService.onDelete(id);
  }
  public onNewCharacter(character : Character){
    this.dbzService.onNewCharacter(character);
  }

}
