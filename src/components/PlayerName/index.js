import '../PlayerName/style.css'
import PlayerScore from '../PlayerScore';


function PlayerName(n1){

    if(n1== 'Player 1'){
        return/*html*/ `
        <h1>${n1}</h1>
      
        ${PlayerScore('1')}
        `
    }else{
        return/*html*/ `
        <h1>${n1}</h1>
      
        ${PlayerScore('2')}
        `    }
    }

    

export default PlayerName;

