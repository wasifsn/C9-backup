
// function fun(str,num1) {
    
   
//     for(var i = 1;i<=num1;i++){
//         console.log(str);
//     }
// }

// fun("wasif",4)


function average(scores){
    let sum = 0;
     let avg =0;
    scores.forEach(function(score){
        sum += score;
        
    });
    
        avg = sum/scores.length
        return  Math.round(avg);
    }

 
var scores = [10, 20, 30, 40, 50, 60];
console.log(average(scores));