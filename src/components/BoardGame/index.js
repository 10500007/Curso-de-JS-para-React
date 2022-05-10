
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

  /*   window.boardgame = {}

    window.boardgame.handleclick = (event) =>{
        const $origin =  event.target.closest('.card-front-back')
        
        const valor = document.querySelectorAll('.card-front-back')
        
        console.log(valor)
       
    } */

    
            const Map_cardList = cardsList.map((elemen1) => CardFrontBack(elemen1.icon, elemen1.altIcon))

            //Transformando a lista em apenas string, serve para tirar a virgula
            const $htmlCards = Map_cardList.join('')
            return /*html*/`    
            <section class="game-area"> 
            ${$htmlCards}                      
            </section>   
            `

}

export default BoardGame;
