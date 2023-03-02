import {useState,useEffect} from 'react'
import CardPokemon from './CardPokemon'


function Main(){
    const [pokemon,setpokemon]=useState([])

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=50',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data.results)
            setpokemon(data.results)
            })
            .catch((err)=> console.log(err))
            
        },[])

        return(
            <div>{pokemon.map(({name, url})=>(
                <CardPokemon
                name={name}
                url={url}
                />
                ))}
            </div>
            
    )}

export default Main