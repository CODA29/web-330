/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Dagmawi Megra
  Date: 04/19/2025
  Filename: script.js
*/
"use strict";

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  {tableNumber: 1, capacity: 4, isReserved: null},
  {tableNumber: 2, capacity: 6, isReserved: null},
  {tableNumber: 3, capacity: 8, isReserved: null},
  {tableNumber: 4, capacity: 10, isReserved: null},
  {tableNumber: 5, capacity: 12, isReserved: null},
  {tableNumber: 6, capacity: 14, isReserved: null},
  {tableNumber: 7, capacity: 16, isReserved: null},
  {tableNumber: 8, capacity: 18, isReserved: null},
  {tableNumber: 9, capacity: 20, isReserved: null},
  {tableNumber: 10, capacity: 22, isReserved: null},
];
let msgbox = document.getElementById("message");
let tableFound;

// Create a function reserveTable
function reserveTable(tableNumber, callback, time){
  // Add your code here

  // Loop through each table object
  for(let table of tables){
    // Check if the user selected table is available
    if(table.tableNumber === tableNumber){
      tableFound = true;
      table.isReserved = true;

      setTimeout(()=>{
        callback(true);
      }, time);
    }

  }

  // If the selected table is not available in the array
  if (!tableFound){
    callback(false);
  }

}

// Callback function that handles success or error
function tableAvailable(success){

  let name = document.getElementById("name").value;

  msgbox.textContent = `Reserving table for ${name} ...`;

  if(!success){

    msgbox.textContent = "Table number not found! Please pick from 1 to 10.";

  } else {

    setInterval(()=>{
      msgbox.textContent = "Success 🎉 Your reservation is completed!";
    }, 3000);

  }
}


// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Add your code here
    e.preventDefault();

    let tableNum = parseInt(document.getElementById("tableNumber").value);
    reserveTable(tableNum, tableAvailable, 1000);
  });
