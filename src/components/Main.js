import { useEffect, useState } from "react";
import styled from "styled-components";
import Grid from "./cards/Grid";
import ScoreBoard from "./scoreboard/ScoreBoard";
import {shuffle, capitalizeFirstLetter} from '../utils/Utility'

const Main =()=>{
    const [pokemons, setPokemons] = useState([])
    const [highScore, setHighScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [clickedPokemons, setClickedPokemons] = useState([]);


    useEffect(() =>{
        const loadCards = async () =>{
             setPokemons(shuffle(await fetchPokemons()));
        }
        loadCards();
    }, [currentScore])

    const onClickCard =(pokemonName)=>{
        console.log(pokemonName);

        if(clickedPokemons.includes(pokemonName)){
            reset();
        }
        else {
            setClickedPokemons(prevState => [...prevState, pokemonName])
            const newScore = currentScore + 1;
            setHighScore(Math.max(newScore, highScore));
            setCurrentScore(newScore); 
        }
    }

    const reset =()=>{
        setClickedPokemons([]);
        setCurrentScore(0);
    }

    const fetchPokemons = async ()=>{
        const pokemons = [];
        
        for(let i = 1; i <= 12; i++){
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`
            
            const response = await fetch(url);
            const pokemon = await response.json();
            const id = pokemon.id;
            const name = capitalizeFirstLetter(pokemon.name);
            const avatar = pokemon.sprites.front_default;

            pokemons.push({id, name, avatar});
        }
        return pokemons;
    }

    return(
        <MainWrapper>
            <ScoreBoard
            currentScore={currentScore}
            highScore={highScore}
            />
            <Grid 
            onClickCard={onClickCard}
            cards ={pokemons}
            />
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
    min-height: 90vh;
    display: flex;
    flex-direction: column;

`;
export default Main;