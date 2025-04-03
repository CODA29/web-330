"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case

      Eating Well in Season Retrieving Data from Local Storage
      Author: Dagmawi Megra
      Date:   04/01/2025

      Filename: js09c.js
 */

// Eating well preference keys
let keys = ["name", "email", "phone", "address", "city", "state", "zip", "allergies", "frequency", "size"];

for (let item of keys){
  let newRow = document.createElement("tr");

  // Display the storage key
  let keyCell = document.createElement("td");
  keyCell.textContent = item;
  newRow.appendChild(keyCell);

  // Display the key value
  let keyValue = document.createElement("td");
  keyValue.textContent = localStorage.getItem(item);
  newRow.appendChild(keyValue);

  // Append each key=name pair as a table row
  document.getElementById("prefTable").appendChild(newRow);
}

// Remove Eating Well keys when the remove preference button is clicked

document.getElementById("removePrefBtn").onclick = function(){
  for (let item of keys){
    localStorage.removeItem(item);
  }
}