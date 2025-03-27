/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Dagmawi Megra
  Date: 03/26/2025
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return{
    getName: function(){ // closure
      return ('Your hero name is ' + capitalize(name));
    },
    getGender: function(){ // closure
      return ("It's a " + capitalize(gender));
    },
    getClass: function(){ // closure
      return ("And a " + capitalize(characterClass) + "!");
    }

  }
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
  let heroName = document.getElementById("heroName").value;
  let heroGender = document.getElementById("heroGender").value;
  let heroClass = document.getElementById("heroClass").value;

  // TODO: Create character
  let character = createCharacter(heroName, heroGender, heroClass);
  let characterName = character.getName();
  let characterGender = character.getGender();
  let characterClass = character.getClass();

  // TODO: Display character information
  let displayHero = document.getElementById("characterOutput");

  displayHero.innerHTML = `<p>${characterName}</p>  <p>${characterGender}</p>  <p>${characterClass}</p>`;

});



// Function to capitalize just the first letter of a string
function capitalize(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
