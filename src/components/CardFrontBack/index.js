import CardGame from "../CardGame";
import '../CardFrontBack/style.css';


function CardFrontBack(){

    window.cardfrontback = {}
    
        window.cardfrontback.handleclick = (event) =>{
        console.log(event)
        const $origin =  event.target.closest('.card-front-back')
        const $virarcarta = $origin.classList.toggle('active')
        console.log($origin) 
    
    } 
 
   /*   window.cardfrontback.handleclick = function teste(event){
        const $origin =  event.target.closest('.card-front-back')
        const $virarcarta = $origin.classList.toggle('active')
        console.log('outro test')
    }  */

    return /*html*/`
    <article class="card-front-back" onclick="cardfrontback.handleclick(event)">   
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