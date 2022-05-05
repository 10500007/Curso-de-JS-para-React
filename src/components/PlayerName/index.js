import '../PlayerName/style.css'
import PlayerPoints from '../PlayerPoints';

function PlayerName(n1){

    if(n1== 'Player 1'){
        return/*html*/ `
        <h1>${n1}</h1>
      
        ${PlayerPoints('1')}
        `
    }else{
        return/*html*/ `
        <h1>${n1}</h1>
      
        ${PlayerPoints('2')}
        `    }
    }

    

export default PlayerName;

