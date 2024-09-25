import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-component-figthers',
  templateUrl: './figthers.component.html',
  styleUrl: './figthers.component.css'
})
export class FigthersComponent {
   @Input() public characterList: Character[] =[];
   @Output() public onDelete =  new EventEmitter<number>();

    public onDeleteCharacter(index:number): void{
      //TODO emitir el ID del personaje
      this.onDelete.emit(index);
    }

}
