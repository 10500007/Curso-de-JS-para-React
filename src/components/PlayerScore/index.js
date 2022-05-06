import '../PlayerScore/style.css'


function PlayerScore(n=0, points=0){
   
  

    if(n =='p1'){
        return/*html*/`
        <ul class="${n}" data_points=${points}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        `
    }else{
        return/*html*/`
        <ul class="${n}" data_points=${points}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        `
        
    }
    
}

export default PlayerScore;