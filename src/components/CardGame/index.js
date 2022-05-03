import '../CardGame/style.css';


//JSX
function CardGame(icon='alura-pixel', alt='logo do alura'){
    return `   
        <article class="card-game">        
        <img src="/images/${icon}.png" alt="${alt}">        
        </article>
    `;   
    
}

//Serve para exportar a função
export default CardGame;

