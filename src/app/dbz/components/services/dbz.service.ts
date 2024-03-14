
import { Injectable } from '@angular/core';
import { character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

    public characters: character[] = [
                                    {id: uuid(),
                                    name: "fabian",
                                    power: 23},
                                    {
                                    id: uuid(),
                                    name: "michekk",
                                    power: 22}
                                    ];


    addCharacter(character: character){

        const newCharacter: character = {id: uuid(), ...character}
        this.characters.push(newCharacter);
    }

/*     onDeleteCharacer(index: number){
        this.characters.splice(index,1);
    } */
    
    deleteCharacterById(id: string){
       this.characters = this.characters.filter(character => character.id !== id);
    } 

}