import { Component } from '@angular/core';
import { character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainComponent  {


    constructor(private dbzSerice: DbzService ){}


    get characters(): character[]{
        return [...this.dbzSerice.characters];
    }
        
    onDeleteCharacter(id: string):void{
        this.dbzSerice.deleteCharacterById(id);
    }

    onNewCharacter(character: character):void{
        this.dbzSerice.addCharacter(character);
    }
}