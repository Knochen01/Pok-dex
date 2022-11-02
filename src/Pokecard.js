import React from "react";
import "./Pokecard.css";

const POKE_API = "https://raw.githubusercontent.com/" +
    "PokeAPI/sprites/master/sprites/pokemon/";


function Pokecard({ id, name, type, base_experience}) {
    let imageSrc = `${POKE_API}${id}.png`;

    return (
        <>
        <div className="Pokecard">
        <div className="Pokecard-title">Name: {name}</div>
        <img src={imageSrc} alt={name}></img>
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">Exp: {base_experience}</div>
        </div>
        </>
    )
}

export default Pokecard;