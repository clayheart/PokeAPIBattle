$(document).ready(function(){

$("#leftButton").click("getRandomPokemonLeft")
//starter function to pull a random pokemon from the PokeAPI
  function getRandomPokemonLeft() {
    let randomNumber = Math.floor(Math.random() * 800) + 1;
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
      console.log("Left Pokemon Data: ", pokeData);
    });
  }



//all code here
$("#leftButton").click("getRandomPokemonRight")

function getRandomPokemonRight() {
    let randomNumber = Math.floor(Math.random() * 800) + 1;
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
      console.log("Left Pokemon Data: ", pokeData);
    });
  }


})
