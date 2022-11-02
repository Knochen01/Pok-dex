import React from 'react';
import Pokedex from './Pokedex';

let Pokemon = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ];

function sumExperience(hand) {
  return hand.reduce((exp, Pokemon) => exp + Pokemon.base_experience, 0)
}


function Pokegame() {
    const hand1 = [];
    const hand2 = [...Pokemon]
      // move random cards from hand2 until the hands have the same number of cards
      while (hand1.length < hand2.length) {
        const idx = Math.floor(Math.random() * hand2.length)
        const randomPokemon = hand2.splice(idx, 1)[0]
        hand1.push(randomPokemon)
      }
    
    const exp1 = sumExperience(hand1);
    const exp2 = sumExperience(hand2)

    return (
        <>
        <Pokedex experience={exp1} />
        <Pokedex experience={exp2} />
        </>
    )
}

export default Pokegame;