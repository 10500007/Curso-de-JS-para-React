import CardGame from "../CardGame";
import '../CardFrontBack/style.css';
import ArrowDown from "../ArrowDown";




function CardFrontBack(icon, altIcon){

   
    window.cardfrontback = {}
       
            window.cardfrontback.handleclick = (event) =>{   
                
     
                const $origin =  event.target.closest('.card-front-back')
                const $virarcarta = $origin.classList.toggle('active')  
                
                const class_active = document.querySelectorAll('.active')

                const arrow = document.querySelector('.arrow-down')
                console.log(arrow)

                if(class_active.length == 2){

 
                    setTimeout(function(){       
                     //Pegando valor de dentro do data-current   
                     const currentPlayer = arrow.getAttribute('data-currentplayer')
                     //setando valor de atributo utilizando o ternario, se valor for 1 ele muda pra 2, se for 2 muda pra 1
                     arrow.setAttribute('data-currentplayer',currentPlayer == 1?2:1)                 
                     class_active.forEach(function(nome){
                     const remov_all_act = nome.classList.remove('active')
                          
                        })                   
                    },1000)
                   
                                    
                }else if(class_active.length >2){
                    return class_active.forEach((rem)=>{
                        rem.classList.remove('active')
                    })                    
                }           
               }

    return /*html*/`
    <article class="card-front-back" onclick="cardfrontback.handleclick(event)">   
        <div class="front">
        ${CardGame()}
        </div>        
        <div class="back">
        ${CardGame(icon, altIcon)}
        </div>       
    </article>
    `
}

export default CardFrontBack;