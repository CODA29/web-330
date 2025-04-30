/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Dagmawi Megra
  Date: 04/29/2025
  Filename: script.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  {
    name: "Brian Doug",
    specialty: "Italian food",
    weakness: "Making soups",
    restaurantLocation: "Boston"

  },
  {
    name: "Danny Cruz",
    specialty: "Seafood",
    weakness: "Baking",
    restaurantLocation: "Brazil"
  },
  {
    name: "Shanti Patel",
    specialty: "Indian food",
    weakness: "Making Desserts",
    restaurantLocation: "Bangladesh"
  }
];
let dashboard = document.getElementById("dashboard");
let dashTitle = document.getElementById("dashTitle");

// Simulate the loading of the dashboard
dashTitle.innerHTML = `<h1> Loading... </h1>`;
setTimeout(()=>{
  dashTitle.innerHTML = "<h1> Chefs' Dashboard </h1>";
}, 4000);


// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve(chefs[0]);
    }, 2000);
  });
}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chefs[1]);
    }, 3000);
  });
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chefs[2]);
    }, 4000);
  });
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
.then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      const chef = result.value;

      document.getElementById(`chef${index + 1}`).innerHTML =
      `
        <h2>${chef.name}</h2>
        <ul>
          <li> <b> Specialty: </b> ${chef.specialty}</li>
          <li> <b> Weakness: </b> ${chef.weakness}</li>
          <li> <b> Restaurant Location: </b> ${chef.restaurantLocation}</li>
        </ul>

      `;
    } else {
      document.getElementById("error").innerHTML = `<h2>An error occurred: ${result.reason} </h2>`;
    }
  });
  // Change the background color of the dashboard
  dashboard.style.backgroundColor = "#aa4c05";
})