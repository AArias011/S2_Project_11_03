"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 3

   Random Jane Austen Quote Generator
   Author: Anthony Arias
   Date:   2/13/19
   
   This script randomly generates a Jane Austen quote from
   a list of 10 quotes and writes that quote into the first
   quotation tag in the Web page.

*/
// This code sets a variable of size to have a value of 10.
var size = 10;
//This code has a variable of randomQ which sets the function to affect the 0 to 10 quotes.
var randomQ = randomInt(0, size);
//This quote has a function of randomInt that generates a random integer. Then it specifies two parameters for lowest and size. These two specify the lowest value of the random integer and the size parameter will set the number of integers to be generated. Then the math.floor and math.random returns a random integer within the specified range.
function randomInt(lowest, size) {
    return Math.floor(Math.random() * size);
}
//This code sets an id of quote from the HTML and it renders a random integer of the quotes that show up on the page.
document.getElementById('quote').innerHTML = getQuote(randomQ);



function getQuote(n) {
    var quotes = [
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
        "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
        "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
        "Life seems but a quick succession of busy nothings.",
        "Our scars make us know that our past was for real.",
        "I cannot speak well enough to be unintelligible.",
        "One cannot be always laughing at a man without now and then stumbling on something witty.",
        "Men were put into the world to teach women the law of compromise.",
        "The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid."
    ];

    return quotes[n];
}