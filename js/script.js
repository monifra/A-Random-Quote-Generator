/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
const quotes = [
  {
    quote:"Less is more.",
    source:"Ludwig Mies Van Der Rohe",
    movement:"Modernism"
  },
  {
    quote:"A doctor can bury his mistakes, but an architect can only advise his clients to plant vines.",
    source:"Frank Lloyd Wright",
    movement:"Organic architecture"
  },
  {
    quote:"Less is a bore.",
    source:"Robert Venturi",
    movement:"Postmodernism"
  },
  {
    quote:"Nothing in this world is more simple and more cheap than making cities that provide better for people.",
    source:"Jan Gehl ",
    movement:"Modern urban design",
    citation:"Interview",
    year:2013
  },
  {
    quote:"Form follows function.",
    source:"Louis Sullivan",
    movement:"Modernism"
  },
  {
    quote:"A house is a machine for living in.",
    source:"Le Corbusier",
    movement:"Modernism",
    citation:"manifesto Vers Une Architecture",
    year:1927
  },
  {
    quote:"If less is more, maybe nothing is everything.",
    source:"Rem Koolhaas",
    movement:"Modern",
  },
  {
    quote:"Vision separates us from the world whereas the other senses unite us with it.",
    source:"Juhani Pallasmaa",
    movement:"Constructivism",
    citation:"The Eyes of the Skin: Architecture and the Senses.",
    year:1996
  },
  {
    quote:"The mind is like an umbrella. Its most useful when open.",
    source:"Walter Gropius",
    movement:"Modernism"
  },
  {
    quote:"Architecture is like writing. You have to edit it over and over so it looks effortless.",
    source:"Zaha Hadid",
    movement:"Deconstructivism"
  },
  {
    quote:"Architects spend an entire life with this unreasonable idea that you can fight against gravity.",
    source:"Renzo Piano",
    movement:"Modern"
  },
  {
    quote:"As an architect you design for the present, with an awareness of the past, for a future which is essentially unknown.",
    source:"Norman Foster",
    movement:"Modern"
  },
  {
    quote:"Art should be created for life, not for the museum.",
    source:"Jean Nouvel",
    movement:"Modern"
  }
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(){
  let storeRandom = Math.floor(Math.random()*quotes.length); // generates a random number between 0 and 12 and stores it in storeRandom variable
  let randomQuote =quotes[storeRandom]; // stores a random quote object from 'quotes' array
  return randomQuote; // returns random quote
}

// console.log(getRandomQuote());

/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote(){
  let storeQuote = getRandomQuote(); // variable storeQuote stores random quote from getRandomQuote() function
  let buildString = ""; // create a variable with an empty string
  buildString += "<p class='quote'>";
  buildString += storeQuote.quote + "</p>";
  buildString += "<p class='surce'>" + storeQuote.source;
  if (storeQuote.citation != "undefined"){
    buildString += "<span class='citation'>" + storeQuote.citation + "</span>";
  }
  if (storeQuote.year != "undefined"){
    buildString += "<span class='year'>" + storeQuote.year + "</span>";
  }
  buildString += "</p>";
  return buildString;
}

// console.log(printQuote());

document.getElementById('quote-box').innerHTML = printQuote();

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
