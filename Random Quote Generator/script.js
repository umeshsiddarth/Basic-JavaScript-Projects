const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "You only live once, but if you do it right, once is enough. - Mae West",
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteContainer = document.getElementById("quote-text");
  quoteContainer.textContent = quotes[randomIndex];
}
