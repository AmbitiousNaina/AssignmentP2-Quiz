# Auto detect text files and perform LF normalization
var readlineSync = require("readline-sync")
var user = readlineSync.question("Hey! What's your name buddy? ")
var chalk = require('chalk')
console.log(chalk.redBright( "*** Hi "+ user , " , WELCOME TO THE QUIZ *** " ))
console.log(chalk.yellowBright("=> use the first letter as capital letter only eg: Hello "))
console.log("_________________________________")

var score = 0;

var highscore = [{
  name : "Snehank" ,
  score: "20" ,
  leaderboard: "Thor"
} ,
{
 name : "xyz" ,
  score: "18" ,
  leaderboard: "Capt.America"
}]

function play(question,answer)
{
  var userAns = readlineSync.question(question);
  

  if(userAns === answer)
  {
    console.log(chalk.greenBright(" PERFECT! It's the right answer.. "))
    score = score + 2;
  }
  else
  {
    console.log(chalk.red(" BETTER LUCK NEXT TIME..! :) "))
    score = score - 2;
  }
  console.log(chalk.magentaBright(" YOUR CURRENT SCORE IS " +score))
  console.log("_________________________________")
}


var next = [{
  question : chalk.blueBright("Q1. WHO IS THE PRESIDENT OF INDIA ? (last name) " ) ,
  answer   : "Kovind"
  } ,
  
 {
  question : chalk.blueBright("Q2. WHO IS THE FATHER OF INDIA ? (last name) " ) ,
  answer   : "Gandhi"
  } ,

{
  question : chalk.blueBright("Q3. WHO IS THE FATHER OF INDIAN CONSTITUTION ? (last name) " ) ,
  answer   : "Ambedkar"
  } ,
  
{
  question : chalk.blueBright("Q4. WHAT IS THE NATIONAL HERITAGE ANIMAL OF INDIA ? " ) ,
  answer   : "Elephant"
  } ,
  
{
  question : chalk.blueBright("Q5. WHAT IS THE NATIONAL AQUATIC ANIMAL OF INDIA ? " ) ,
  answer   : "Ganges Dolphin"
  } ,
  
{
  question : chalk.blueBright("Q6. WHAT IS THE NATIONAL FLOWER OF INDIA ? " ) ,
  answer   : "Lotus"
  } ,
  
{
  question : chalk.blueBright("Q7. HOW MANY NEIGHBOURING COUNTRIES DO WE HAVE WHICH BORDER WITH INDIA ? " ) ,
  answer   : "7"
  } ,
  
{
  question : chalk.blueBright("Q8. HOW MANY ARTICLES DO WE HAVE IN OUR CONSTITUTION ? ") ,
  answer   : "465"
  } ,
  
{
  question : chalk.blueBright("Q9. NATIONAL VEGETABLE OF INDIA ? ") ,
  answer   : "Pumpkin"
  } ,

{
  question : chalk.blueBright("Q10. THERE ARE HOW MANY TOTAL NUMBER OF NATIONAL HERITAGE SITES IN INDIA ? ") ,
  answer   : "38"
  }]
    
  for(var i = 0 ; i < next.length ; i++)
  {
    var currQ = next[i] ;
    play(currQ.question,currQ.answer)
  }
console.log("WELL PLAYED " +user + ",YOUR FINAL SCORE IS = " +score)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("THE HIGHSCORES ARE : ")
for(var j = 0 ; j < highscore.length; j++)
{
  var result = highscore[j];
  console.log(result.name + " = " + result.score)
  console.log("----------------------------------")
}
