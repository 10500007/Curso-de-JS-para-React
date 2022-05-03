import CardGame from "../CardGame";
import '../CardFrontBack/style.css';


function CardFrontBack(){
    return /*html*/`
    <article class="card-front-back">   
        <div class="front">
        ${CardGame()}
        </div>        
        <div class="back">
        ${CardGame('javascript','logo do java')}
        </div>       
    </article>
    `
}

export default CardFrontBack;