/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Dagmawi Megra
  Date: 05/05/2025
  Filename: script.js
*/

"use strict";

const movies = [
  // Add your movie objects here
  {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    synopsis: "A skilled thief who specializes in stealing secrets through dreams is offered a chance to erase his past if he can successfully plant an idea into a target's mind."
  },
  {
    title: "The Grand Budapest Hotel",
    director: "Wes Anderson",
    releaseYear: 2014,
    synopsis: "A quirky concierge and his loyal lobby boy become entangled in a murder mystery involving a stolen Renaissance painting and a wealthy family feud."
  },
  {
    title: "Parasite",
    director: "Bong Joon-ho",
    releaseYear: 2019,
    synopsis: "A poor family schemes to infiltrate a wealthy household by posing as unrelated, highly qualified professionals, leading to unexpected consequences."
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    releaseYear: 1999,
    synopsis: "A hacker discovers that the world he lives in is a simulated reality and joins a rebellion against the machines controlling it."
  },
  {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    releaseYear: 2001,
    synopsis: "A young girl becomes trapped in a mysterious and magical world of spirits, where she must work to free herself and her parents."
  },
  {
    title: "The Social Network",
    director: "David Fincher",
    releaseYear: 2010,
    synopsis: "The story of the founding of Facebook and the legal battles that followed, portraying the rise of a tech empire and the cost of ambition."
  }
];
const movieTitle  = document.getElementById("movie-title");
const movieDirector = document.getElementById("movie-director");
const movieYear = document.getElementById("movie-year");
const movieSynopsis = document.getElementById("movie-synopsis");
const errorMessage = document.getElementById("error-message");
const loading = document.getElementById("loading");
const movieInfo = document.getElementById("movie-info");



function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      /* Loop through the movies array and
         check if the user provided title has a match */
      let movieFound;
      for (let movie of movies){
        if(title === movie.title){
          movieFound = movie;
          resolve(movieFound);
        }
      }
      if(!movieFound){
        reject("Movie not found!");
      }
    }, 2000);
  });
}

async function displayMovie(){
  // Get the user input title value
  const titleInput = document.getElementById("title-input").value;

  // Display the movie detail on the DOM
  try{
    let movie = await fetchMovie(titleInput);
    movieInfo.style.backgroundColor = "#517e13";
    movieTitle.textContent = movie.title;
    movieDirector.textContent = "Movie Director: " + movie.director;
    movieYear.textContent = "Released Year: " + movie.releaseYear;
    movieSynopsis.textContent = "Movie Synopsis: " + movie.synopsis;

  }catch(error){

    //Display the error message and clear the rest of the DOM
    errorMessage.textContent = `Error: ${error}`;
    movieInfo.style.backgroundColor = "transparent";
    movieTitle.textContent = "";
    movieDirector.textContent = "";
    movieYear.textContent = "";
    movieSynopsis.textContent = "";
  }
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  // Implement this function

  // Prevent the default behavior of the form submission
  event.preventDefault();

  // Simulate the delay of a network request
  loading.textContent = "Loading...";
  movieInfo.style.backgroundColor = "transparent";
  errorMessage.textContent = "";
  movieTitle.textContent = "";
  movieDirector.textContent = "";
  movieYear.textContent = "";
  movieSynopsis.textContent = "";

  setTimeout(()=>{
    loading.textContent = "";
  }, 2000)

  // Call the displayMovie function
  await displayMovie();

});