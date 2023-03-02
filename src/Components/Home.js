import styles from './Home.module.css'
import Pokedex from '../img/pokedex.png'

function Home(){
    return(
        <div className={styles.home_container}>
            <img src={Pokedex} alt='pokedex'/>
        </div>
    )
}


export default Home