import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',  // es el nombre del componente
  template : `
          <h3>Counter: {{ counter }}</h3>
          <button (click)= "incrementBy(1)" > +1</button>
          <button (click)= "decrementBy(-1)">-1 </button>
          <button (click)="reset(10)"> Reset </button>
  `
})

export class CounterComponent{

    public counter:number = 10;

    public incrementBy(increment:number){
      this.counter += increment;
    }

    public reset(counter: number){
      this.counter = counter;
    }

    public decrementBy(decrement:number){
      this.counter += decrement;
    }


}


