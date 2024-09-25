import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    public heroNames : string[] = ['Spider-Man', 'Hulk', 'Thor',  'Iron-Man', 'American Captain'];
    public deletedHero? :string;

    public removeLastHero(): void{
    this.deletedHero =  this.heroNames.pop();
    }

}
