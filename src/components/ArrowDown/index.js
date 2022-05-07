import '../ArrowDown/style.css'

function ArrowDown (currentPlayer){
    return/*html*/`
        <img class="arrow-down" src="images/IconArrowDown.png" 
        alt="Icone de uma seta para baixo"
        data-currentPlayer="${currentPlayer}">
    
    `
}
export default ArrowDown;