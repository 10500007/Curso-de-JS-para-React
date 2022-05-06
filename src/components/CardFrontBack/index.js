import CardGame from "../CardGame";
import '../CardFrontBack/style.css';



function CardFrontBack(){

    
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
                      console.log('par')                   
                }  
                arrau.splice(0,2) 

               }

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