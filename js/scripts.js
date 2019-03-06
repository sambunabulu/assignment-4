$(document).ready(function() {

var dice;
var dice1;
var score = 0;
var score2 = 0;
var total1 = 0;
var total2 = 0;
var totalscore1 = [];
var totalscore2 = [];

   $("#roll-player-1").click(function playOne () {
     dice = Math.floor(Math.random() * 6 + 1);
     document.getElementById('dice-1').innerHTML =  dice;

     if (dice == 1) {
       score = 0;
       totalscore1 = [];
       total1 += dice;
       document.getElementById('score-1').innerHTML = score;
       $(".playerone-buttons").hide();
       $(".playertwo-buttons").show();
     } else {
       totalscore1.push(dice);
     }
   });
 $("#hold-player-1").click(function() {
   totalscore1.forEach(function(totalscore) {
            score += totalscore;
   });
   document.getElementById('score-1').innerHTML = score;
   $(".playerone-buttons").hide();
   $(".playertwo-buttons").show();

 });
 $("#roll-player-2").click(function() {
   dice2 = Math.floor(Math.random() * 6 + 1);
   document.getElementById('dice-2').innerHTML =  dice2;

   if (dice2 == 1) {
     score2 = 0;
     totalscore2 = [];
     total2 += dice;
     document.getElementById('score-2').innerHTML = score2;
     $(".playerone-buttons").show();
     $(".playertwo-buttons").hide();
   } else {
     totalscore2.push(dice2);
   }
 });

 $("#hold-player-2").click(function() {
   totalscore2.forEach(function(totalscore) {
            score2 += totalscore;
   });
   document.getElementById('score-2').innerHTML = score2;
   $(".playerone-buttons").show();
   $(".playertwo-buttons").hide();


 });
});
