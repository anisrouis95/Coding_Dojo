var rider_height=42;//defining the height of a rider so that the condition doesn't go below it
var min_age=10;//defining a minimum age of 10 years so that a 9 years old wouldn't be able to ride it

if (rider_height>=42||min_age>=10){
    console.log("Get on that ride, kiddo!");
}
else{
    console.log("Sorry kiddo. Maybe next year.");
}