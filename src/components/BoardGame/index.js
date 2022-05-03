
import CardFrontBack from "../CardFrontBack";
import CardGame from "../CardGame";
import '../BoardGame/style.css'

function BoardGame(amountCards){
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards)
    
    return /*html*/`    
    <section class="game-area">   
    ${$htmlContent}
    </section>
    
    `
}

export default BoardGame;

 /* ${CardGame('alura-pixel').repeat(cartoes)}   */    