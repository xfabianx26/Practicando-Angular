import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

public name: string = 'iron Man';
public age: number = 45;


get capitalizedName():string {
    return this.name.toUpperCase();
}

getHeroDescription():string {
    return `${this.name} - ${this.age}`;
}


changenHero():void{

    this.name = 'Fabian';
}

changeAge():void{
    this.age = 30;
}

resetFrom():void{
    this.name = 'iron Man';
    this.age = 30
}
}
