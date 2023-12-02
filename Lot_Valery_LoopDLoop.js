//We need to create a loop because there's a start and stopping point of a repetitive action
/*The starting point of the loop should start at mile 0 and stop at mile 6, 
under the condition that candy is given starting at mile 2*/
//Variable needed is mile
var mile = 0;
//The loop will know when to stop once the variable is less than 7
//Each iteration of the loop will increment by 2
for (var mile = 0; mile < 7; mile += 2) {
    if (mile >= 2) {
        console.log("You get a candy!");
    }
}
/*I thought about setting i=2, incrementing by 1 but using the condition if(i%2==0) to indicate the even numbers ran,
not sure what's more efficient thought*/
//NINJA BONUS
//Runner gets a candy for every 2 miles AND if they were going faster than 5.5mph
//This means we need 2 variables
var mile = 2;
var speed = 6;
for (var i = 2; i < 7; i += 2) {
    if (mile >= 2 && speed > 5.5) {
        console.log("You get a candy!");
    }
}
