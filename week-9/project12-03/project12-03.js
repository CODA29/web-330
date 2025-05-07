"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Dagmawi Megra
      Date:   05/07/2025

      Filename: project12-03.js
*/

// Apply the click() method to the article > h2 selector
$("article > h2").click(e => {
  // Declare the heading variable referencing the target of the click event
  let heading = $(e.target);

  // Declare the list variable referencing the next sibling element of the heading variable.
  let list = $(heading.next());

  /* Declare the headingImage
     variable referencing the children of the heading variable
     whose tag name is “img”. */
  let headingImage = $(heading).children("img");

  // Apply the slideToggle() method to the list variable over a half-second interval
  $(list).slideToggle(500);

  /* Apply the attr() method to headingImage variable
     to get the value of the src attribute */
  if ($(headingImage).attr("src") === "plus.png") {
    $(headingImage).attr("src", "minus.png");
  } else {
    $(headingImage).attr("src", "plus.png");
  }
});


