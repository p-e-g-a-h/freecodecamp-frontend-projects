
const quotes = [
  {
    text: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "Helen Keller"
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt"
  }
];

const colors = ['#0d6efd', '#d63384', '#fd7e14', '#6f42c1', '#dc3545'];

const getRandomQuote = () => {
  let index = Math.floor(Math.random() * quotes.length);
  $('#quote-text').text(quotes[index].text);
  $('#quote-author').text('- ' + quotes[index].author);
  $('#new-quote-btn, #tweet-quote-btn').css('background-color', colors[index]);
  $('#quote-text, #quote-author').css('color', colors[index]);
  $('#quote-box').css('border', `1px solid ${colors[index]}`);
}

$(document).ready(() => {
  getRandomQuote();
  $('#new-quote-btn').click(() => {
    getRandomQuote();
  });
});