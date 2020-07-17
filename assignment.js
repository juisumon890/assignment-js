//feetToMile

function feetToMile(feet){
    var mile = feet/0.000189;
    return mile;
}
var mile1 = feetToMile(1000);
console.log(mile1);

var mile2 = feetToMile(5000);
console.log(mile2);

var mile3 = feetToMile(50000);
console.log(mile3);



//woodCalculator

function woodCalculator(chair,table,bed){
    chair,table,bed = n;
    var total = 1;
  
    for(var i = 1; i<= n; i++){
        total = woodCalculator * i;
    }
    return total;
  
  }
  



  
  //brickCalculator

  function brickCalculator(n){

      const total = 1000;
      var result = n * total;
      
      if(n<=15){
        return result;
      }
      else if (n<=20){
        return result;  
      }
      else {
          return result;
      }
}
  


//tinyFriend

var friends = ["kolly","moly","jui"];

function tinyFriend(friends){
    var small = friends[0];

    for(var i = 0; i <friends.length; i++){
       
        var element = friends[i];
        if(element > min){
            min = element;
        }
        return min;
    }
}
