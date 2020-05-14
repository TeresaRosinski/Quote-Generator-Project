/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//let alberEinsteinPicture = document.createElement("img"); 
//albertEinsteingPicture.src = "quotesPictures/images.jpg";



let quotes = [
  {
      quote: "Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.",
      source: "Albert Einstein", 
      citation: "",
      year: "",
      typeOfSource: "Scientist",
      imgFile: "quotesPictures/download.jpg"
  },
  {
      quote: "You cannot shake hands with a closed fist.", 
      source: "Indira Ghandi", 
      citation: "",
      year: "",
      typeOfSource: "Politician / Activist",
      imgFile: "quotesPictures/Ghandi.jpg"
  },
  {   
      quote: "What's coming will come, and when it does, we'll face it.",
      source: "Hagrid",
      citation: "Harry Potter and the Goblet of Fire",
      year: "2014",
      typeOfSource: "Fictional Character",
      imgFile: "quotesPictures/images.jpg"
  },
  {
      quote: "A boss has the title, the leader has the people",
      source: "Simon Sinek",
      citation: "Start with Why",
      year: "2011",
      typeOfSource: "Author, Strategist",
      imgFile: "quotesPictures/SimonSinek.jpg" 
  },
  {
      quote: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
      source: "George R.R. Martin",
      citation: "",
      year: "",
      typeOfSource: "Author",
      imgFile: "quotesPictures/GeorgeRRMartin.jpg"
  },
  {
      quote: "A beautiful day begins with a beautiful mindset",
      source: "Unknown",
      citation: "",
      year: "",
      typeOfSource: "",
      imgFile: "quotesPictures/anonymous.png"
  }

  ];


/***
 * `getRandomQuote` function
***/

//Generates a random number withint the length of the quotes array and attaches it to an object in the quotes array
function getRandomQuote () {
  return quotes[Math.floor(Math.random() * quotes.length)];
}



/***
 * `printQuote` function
 * retrieves html element from document and replaces it with random objects from the quotes array
***/
function printQuote(){

  let quoteData = getRandomQuote(); 

  let htmlQuoteElement = document.getElementsByClassName("quote")[0];
  let quoteText = quoteData.quote;
  htmlQuoteElement.innerText = quoteText;


  let htmlSourceElement = document.getElementsByClassName ("source")[0]; 
  let sourceText = quoteData.source; 
  htmlSourceElement.innerText = sourceText; 

  let htmlCitationElement = document.getElementsByClassName("citation")[0];
  let citationText = quoteData.citation; 
  htmlCitationElement.innerText = citationText; 

  let htmlYearElement = document.getElementsByClassName("year")[0];
  let yearText = quoteData.year; 
  htmlYearElement.innerText = yearText;

  let htmlTypeOfSourceElement = document.getElementsByClassName("typeOfSource")[0];
  let typeOfSourceText = quoteData.typeOfSource; 
  htmlTypeOfSourceElement.innerText = typeOfSourceText;

  let htmlImageElement = document.getElementsByClassName("photo")[0]; 
  let imagePictures = quoteData.imgFile; 
  htmlImageElement.src = imagePictures; 
 
}

/**
 * Random Color Function
 * Creates a random number for a rgb color value
 */

function RandomColorNumber () {
  return  Math.floor(Math.random()* 255) +1; 
}

function GenerateRandomRGBValue (){
let htmlRGB = "rgb("
let blue = RandomColorNumber();
let red = RandomColorNumber(); 
let green = RandomColorNumber(); 
return htmlRGB += blue + "," + red + "," + green + ")";
console.log (htmlRGB);;
}

// this is from: https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript with a few changes
//this function changes the background color using a randomly generated RGB value
function setRandomBackgroundColor() {
  document.body.style.background= GenerateRandomRGBValue(); 
}
//window.addEventListener("load",function() { changeBackground() })
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/


document.getElementById('load-quote').addEventListener("click",printQuote, false);
//sets randombackground color 
document.getElementById('load-quote').addEventListener("click", setRandomBackgroundColor);

//document.write(quotes[2].citation);