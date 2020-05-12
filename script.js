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
let quotes = [
  {
      quote: "Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.",
      source: "Albert Einstein", 
      citation: "",
      year: "",
      typeOfSource: "Scientist"
  },
  {
      quote: "You cannot shake hands with a closed fist.", 
      source: "Indira Ghandi", 
      citation: "",
      year: "",
      typeOfSource: "Politician / Activist"
  },
  {   
      quote: "What's coming will come, and when it does, we'll face it.",
      source: "Hagrid",
      citation: "Harry Potter and the Goblet of Fire",
      year: "2014",
      typeOfSource: "Fictional Character"
  },
  {
      quote: "A boss has the title, the leader has the people",
      source: "Simon Sinek",
      citation: "Start with Why",
      year: "2011",
      typeOfSource: "Author, Strategist"
  },
  {
      quote: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
      source: "George R.R. Martin",
      citation: "",
      year: "",
      typeOfSource: "Author"
  },
  {
      quote: "A beautiful day begins with a beautiful mindset",
      source: "Unknown",
      citation: "",
      year: "",
      typeOfSource: ""
  }

  ];


/***
 * `getRandomQuote` function
***/

//Random Number
function getRandomQuote () {
  return  Math.floor(Math.random() * quotes.length);
}
/*
function getRandomQuote () { 
     return quotes[getRN()];  
  };
  */
  //console.log(quotes[getRN()].quote)
console.log(getRandomQuote());


/***
 * `printQuote` function
 * 
***/


function printQuote(){
  // retrieve html element from document
  let randomNumber = getRandomQuote(); 

  let htmlQuoteElement = document.getElementsByClassName("quote")[0];
  let quoteText = quotes[randomNumber].quote;
  htmlQuoteElement.innerText = quoteText;


  let htmlSourceElement = document.getElementsByClassName ("source")[0]; 
  let sourceText = quotes[randomNumber].source; 
  htmlSourceElement.innerText = sourceText; 

  let htmlCitationElement = document.getElementsByClassName("citation")[0];
  let citationText = quotes[randomNumber].citation; 
  htmlCitationElement.innerText = citationText; 

  let htmlYearElement = document.getElementsByClassName("year")[0];
  let yearText = quotes[randomNumber].year; 
  htmlYearElement.innerText = yearText;

  let htmlTypeOfSourceElement = document.getElementsByClassName("typeOfSource")[0];
  let typeOfSourceText = quotes[randomNumber].typeOfSource; 
  htmlTypeOfSourceElement.innerText = typeOfSourceText;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

//document.write(quotes[2].citation);