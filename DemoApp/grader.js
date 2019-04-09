
function average(scores){
    var sum, avg = 0;
    
    scores.forEach(function(score){
        sum += score;
        
    });
    
        avg = sum/scores.length;
        return  Math.round(avg);
    }

 
var scores = [10, 20, 30, 40, 50, 60];
console.log(average(scores));