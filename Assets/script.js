// use moment js to display current date
var today = moment().format("MMMM Do, YYYY");
$("#currentDay").text(today);

$("button").click(function(){
console.log(this);
console.log($('.input-group span').first())

})