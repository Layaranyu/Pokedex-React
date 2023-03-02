import { useState, useEffect } from "react"
import styles from './CardPokemon.module.css'

function CardPokemon({name, url}){
    const [img, setimg] = useState ([])
    const [type,settype] = useState([])
    const [types,setTypes]= useState([])
    
    useEffect(()=>{
        fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data?.sprites?.other?.dream_world?.front_default)
            setimg(data?.sprites?.other?.dream_world?.front_default)
            settype(data?.types[0]?.type?.name)
            setTypes(data?.types[1]?.type?.name)
            console.log(data?.types[0]?.type?.name)
            
            })
            .catch((err)=> console.log(err))
            
        },[])
        
        return(
            
            <main className={styles.container}> 
                <div className={styles.card_pokemon}>
                    <h1>{name}</h1>
                    <img src={`${img}`}/>
                    <h2>{type}</h2>
                    <h2>{types}</h2>
                </div>
            </main>
    )
}



export default CardPokemon