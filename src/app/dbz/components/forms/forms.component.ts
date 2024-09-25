import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-component-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  @Output()

    public onNewCharacter: EventEmitter<Character> = new EventEmitter();
    public character: Character = {
      name: '',
      power: 0,
    }

    public emitCharacter() :void{
      console.log(this.character);
      if(this.character.name.length === 0 || this.character.power < 0) return;
      this.onNewCharacter.emit(this.character);
      this.character = { name :'', power: 0}
    }
}
