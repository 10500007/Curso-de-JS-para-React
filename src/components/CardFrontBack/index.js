import CardGame from "../CardGame";
import '../CardFrontBack/style.css';



function CardFrontBack(icon, altIcon){

    
    window.cardfrontback = {}
         var arrau = [];

       

            window.cardfrontback.handleclick = (event) =>{

                
     
                const $origin =  event.target.closest('.card-front-back')
               
               if(arrau.length < 2){
                const $virarcarta = $origin.classList.toggle('active')
                
                var teste = String($virarcarta) 
        
                arrau.push(teste)  
        
               }else{
 
                const tam = $origin.offsetParent.childNodes.length    

                 for(var i = 1;tam>i;i++){
                    
                    if(i%2!==0){
                        const $remover1 = $origin.offsetParent.childNodes[i].classList.remove('active')   
                    }
                                       
                }  
                arrau.splice(0,2) 

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