import '../src/styles/generic/reset.css'
import './style.css'
import '../src/styles/settings/colors.css'
import CardGame from '../src/components/CardGame'
import '../src/styles/elements/base.css'
import GameArea from '../src/components/GameArea'
import PlayerName from '../src/components/PlayerName'
import TurnCard from '../src/components/TurnCard'


const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    "beforeend",
    `
    ${PlayerName('Player 1')}
    ${PlayerName('Player 2')}

    ${GameArea(6)}
    `
);



