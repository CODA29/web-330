"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Dagmawi Megra
      Date: 04/02/2025

      Filename: project09-02b.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");


/* Retrieving user entered information from session storage and
displaying them in a table inside the project09-02b.html file */
riderName.textContent = sessionStorage.getItem("riderName");
ageGroup.textContent = sessionStorage.getItem("ageGroup");
bikeOption.textContent = sessionStorage.getItem("bikeOption");
routeOption.textContent = sessionStorage.getItem("routeOption");
accOption.textContent = sessionStorage.getItem("accOption");
region.textContent = sessionStorage.getItem("region");
miles.textContent = sessionStorage.getItem("miles");
comments.textContent = sessionStorage.getItem("comments");