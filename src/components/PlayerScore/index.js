import '../PlayerScore/style.css'


function PlayerScore(points){
    if(points =='1'){
        return/*html*/`
        <ul class="p1">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        `
    }else{
        return/*html*/`
        <ul class="p2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        `
    }
   
}

export default PlayerScore;