import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public familias: String[] = ['fabian', 'martha','michell','indacanguris'];
    public deletedHero?: String;

    removeLastHero():void{
      this.deletedHero =  this.familias.pop();
   
    }

}
