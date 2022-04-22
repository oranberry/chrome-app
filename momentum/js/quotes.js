const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
  },
  {
    quote: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
  },
  {
    quote: "Knowledge is power.",
    author: "Francis Bacon",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote: "If you set your goals ridiculously high and it's failure, you will fail above everyone else's success.",
    author: "James Cameron",
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Sheda Savage",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// Randomness
// Random Number between 0 and 1
// Math.random();
// Random Rnumber between 0 and 10
// Math.random() * 10;

// 1. round (반올림)
// Math.round(1.1); -> 1
// 2. ceil (올림)
// Math.ceil(1.1); -> 2
// 3. floor (내림)
// Math.floor(1.9) -> 1

// 숫자 0부터 9까지 정수 랜덤 
// Math.floor(Math.random() * 10);