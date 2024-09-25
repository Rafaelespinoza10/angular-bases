import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = "Iron Man";
  public age:number = 30;

  public getCapitalizedName () : string {
    return this.name.toUpperCase();
  }

  public toString(): string{
    return this.name + " " + this.age;
  }

  public changeHero(): void{
    this.name = 'Spider Man';
  }

  public changeAge() : void{
    this.age = 25;
  }

  public resetForm():void {
    this.name = 'Iron Man';
    this.age = 30;

    // document.querySelectorAll('h1')!.forEach(element =>{
    //   element.innerHTML = '<h1>desde angular</h1>';
    // });
  }
}
