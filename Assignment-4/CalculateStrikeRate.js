function calculateStrikeRate(runs,balls_played){
    return (runs/balls_played)*100;
  }

var runs=14;
var balls_played=21;
var result=calculateStrikeRate(runs, balls_played)
console.log(result)