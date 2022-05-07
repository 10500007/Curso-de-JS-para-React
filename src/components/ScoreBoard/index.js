import ArrowDown from "../ArrowDown";
import PlayerName from "../PlayerName";
import PlayerScore from "../PlayerScore";
import './style.css';

function ScoreBoard(){
    return /*html*/`
    <header class="score-board">
        ${ArrowDown(2)}
        ${PlayerName('Player 1')}
        ${PlayerScore('p1',1)}
        <span class="vs-player">VS</span>
        ${PlayerScore('p2',2)}
        ${PlayerName('Player 2')}
        
    </header>
    `
}

export default ScoreBoard;