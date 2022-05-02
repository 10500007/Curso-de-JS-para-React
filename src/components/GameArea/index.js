import CardGame from "../CardGame";
import '../GameArea/style.css'

function GameArea(cartoes){
    return`    
    <section class="game-area">   
       ${CardGame().repeat(cartoes)}      
    </section>
    
    `
}

export default GameArea;