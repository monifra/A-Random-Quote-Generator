/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/***
A random quote generator is an app that displays random quotes by famous architects each time the button 'show another quote' is clicked.
An app also automatically refreshes quotes after 20s and chooses random background color. An app always displays informations like: quote, source,
tags and shows citation ,and year if this properties exists in object.

I'm trying for the "Exceeds Expectations" grade.
***/


/***
  An array of objects with quotes by famous architects from which the app will choose random quotes.
***/

const quotes = [
  {
    quote:"Less is more.",
    source:"Ludwig Mies Van Der Rohe",
    tags:"Modernism"
  },
  {
    quote:"A doctor can bury his mistakes, but an architect can only advise his clients to plant vines.",
    source:"Frank Lloyd Wright",
    tags:"Organic architecture"
  },
  {
    quote:"Less is a bore.",
    source:"Robert Venturi",
    tags:"Postmodernism"
  },
  {
    quote:"Nothing in this world is more simple and more cheap than making cities that provide better for people.",
    source:"Jan Gehl ",
    tags:"Modern urban design",
    citation:"Interview",
    year:2013
  },
  {
    quote:"Form follows function.",
    source:"Louis Sullivan",
    tags:"Modernism"
  },
  {
    quote:"A house is a machine for living in.",
    source:"Le Corbusier",
    tags:"Modernism",
    citation:"manifesto Vers Une Architecture",
    year:1927
  },
  {
    quote:"If less is more, maybe nothing is everything.",
    source:"Rem Koolhaas",
    tags:"Modern",
  },
  {
    quote:"Vision separates us from the world whereas the other senses unite us with it.",
    source:"Juhani Pallasmaa",
    tags:"Constructivism",
    citation:"The Eyes of the Skin: Architecture and the Senses.",
    year:1996
  },
  {
    quote:"The mind is like an umbrella. Its most useful when open.",
    source:"Walter Gropius",
    tags:"Modernism"
  },
  {
    quote:"Architecture is like writing. You have to edit it over and over so it looks effortless.",
    source:"Zaha Hadid",
    tags:"Deconstructivism"
  },
  {
    quote:"Architects spend an entire life with this unreasonable idea that you can fight against gravity.",
    source:"Renzo Piano",
    tags:"Modern"
  },
  {
    quote:"As an architect you design for the present, with an awareness of the past, for a future which is essentially unknown.",
    source:"Norman Foster",
    tags:"Modern"
  },
  {
    quote:"Art should be created for life, not for the museum.",
    source:"Jean Nouvel",
    tags:"Modern"
  }
];

/***
 An array with random colors which will be use to change background colors.
***/

const colors =['#36b55c','#ff8080', '#33bbff', '#ffa31a', '#b366ff', '#cccc00', '#cc0044','#993366','#80bfff',' #ffb31a', '#4080bf', '#88cc00'];

/***
  getRandomBackgroundColor() function that will choose random color from colors array
***/

function getRandomBackgroundColor(){
  let storeRandom = Math.floor(Math.random()*colors.length); // generates a random number between 0 and 11 and stores it in storeColor variable
  let randomColor = colors[storeRandom]; // stores a random color from colors array
  return randomColor; // returns random color
}

/***
  getRandomQuote() function will choose a random quote from quotes array
***/

function getRandomQuote(){
  let storeRandom = Math.floor(Math.random()*quotes.length); // generates a random number between 0 and 12 and stores it in storeRandom variable
  let randomQuote =quotes[storeRandom]; // stores a random quote object from 'quotes' array
  return randomQuote; // returns random quote
}

/***
  printQuote() function generates a quote string, prints it to the page and change the color of the background
***/

function printQuote(){
  let storeQuote = getRandomQuote(); // variable storeQuote stores random quote from getRandomQuote() function
  let buildString = ""; // create a variable with an empty string

  //build string with quotes, source, citation, year and tags
  buildString += "<p class='quote'>";
  buildString += storeQuote.quote + "</p>";
  buildString += "<p class='source'>" + storeQuote.source;
  if (storeQuote.citation){
    buildString += "<span class='citation'>" + storeQuote.citation + "</span>"; // When citation property exist in object add it to string
  }
  if (storeQuote.year){
    buildString += "<span class='year'>" + storeQuote.year + "</span>"; // When year property exist in object add it to string
  }
  if (storeQuote.tags){
    buildString += "<span class='tags'>" + storeQuote.tags + "</span>"; // When tags property exist in object add it to string
  }
  buildString += "</p>";

  document.getElementById('quote-box').innerHTML = buildString; // A quote is print in our html
  document.getElementById('color').style.backgroundColor = getRandomBackgroundColor();// changes background color of body by targetting color Id
}


// Auto refresh the quote. This function will change quote automatically after 20 seconds.

function autoRefresh(){
  setInterval(printQuote,20000);
}

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.
***/

  document.getElementById('loadQuote').addEventListener("click",printQuote, false);

  autoRefresh(); // Will refresh quote after 20s.
