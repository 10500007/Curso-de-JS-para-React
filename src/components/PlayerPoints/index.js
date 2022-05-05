import '../PlayerPoints/style.css'


function PlayerPoints(points){
    if(points =='1'){
        return/*html*/`
        <span class="player-score-${points}">${points}</span>
        `
    }else{
        return/*html*/`
        <span class="player-score-${points}">${points}</span>
        `
    }
   
}

export default PlayerPoints;