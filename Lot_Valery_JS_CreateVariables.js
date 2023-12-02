//variables for the minimum height and age for a rider to ride
var minimumHeight=42;
var minimumAge=10;
if(minimumHeight>=42){
    console.log("Get on that ride, kiddo!");
}
    else(console.log("Sorry kiddo. Maybe next year."));

//Stretch Feature 1, adjusting the conditional statement to include both height and age
if(minimumHeight>=42 && minimumAge>=10){
    console.log("Get on that ride, kiddo!")
}
    else(console.log("Sorry kiddo. Maybe next year."));

//Stretch Feature 2, adjusting the conditional statement to require either the height or the age 
if(minimumHeight>=42 || minimumAge>=10){
    console.log("Get on that ride, kiddo!")
}
    else(console.log("Sorry kiddo. Maybe next year."));
    