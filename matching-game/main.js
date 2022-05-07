import '../src/styles/generic/reset.css'
import './style.css'
import '../src/styles/settings/colors.css'
import CardGame from '../src/components/CardGame'
import '../src/styles/elements/base.css'
import GameArea from '../src/components/BoardGame'
import PlayerName from '../src/components/PlayerName'
import ScoreBoard from '../src/components/ScoreBoard'
import CardFrontBack from '../src/components/CardFrontBack'
import BoardGame from '../src/components/BoardGame'





const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    "beforeend",
    `
    ${ScoreBoard()}
    ${BoardGame()} 
   
    `
);


/* ${CardFrontBack(2)} */
/*  ${GameArea(2)} */
