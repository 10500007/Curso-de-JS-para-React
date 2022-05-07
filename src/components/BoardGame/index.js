
import CardFrontBack from "../CardFrontBack";
import CardGame from "../CardGame";
import '../BoardGame/style.css'

function BoardGame(amountCards){

    const cardsList = [{icon:"javascript" , altIcon:"Logo do java"} ,
                       {icon:"javascript" , altIcon:"Logo do java"} ,
                       {icon:"html" , altIcon:"Logo Html"} ,
                       {icon:"html" , altIcon:"Logo Html"} ,
                       {icon:"css" , altIcon:"Logo do CSS"},
                       {icon:"css" , altIcon:"Logo do CSS"}  
    ];

 
        
         
     /*     const $htmlCardFrontBack = CardFrontBack(card[0].icon, card[0].altIcon); */
            
         /*    const $teste = card.map(function perc(elem1, elem2){
                return  CardFrontBack(elem1.icon, elem2.altIcon);
            }); */
           
            const Map_cardList = cardsList.map((elemen1) => CardFrontBack(elemen1.icon))

            //Transformando a lista em apenas string, serve para tirar a virgula
            const $htmlCards = Map_cardList.join('')
            return /*html*/`    
            <section class="game-area"> 
            ${$htmlCards}                      
            </section>   
            `

   /*  const $htmlCardFrontBack = CardFrontBack(card[2].icon, card[2].altIcon); */
   /*  const $htmlContent = $htmlCardFrontBack.repeat(amountCards) */

  
   
}

export default BoardGame;

 /* ${CardGame('alura-pixel').repeat(cartoes)}   */    