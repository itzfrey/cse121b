// Import the searchBook function
import { searchBook } from './searchBook.js';

// Add event listeners
export function addEventListeners() {
  document.querySelector('#submit-button').addEventListener('click', () => {
    const query = document.querySelector('#search-input').value;
    searchBook(query)
      .then((results) => displayResults(results, query))
      .catch((error) => console.log(error));
  });

  document.querySelector('#search-input').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      document.querySelector('#submit-button').click();
    }
  });
}

// Display search results
function displayResults(results, query) {
  const output = results
    .map(
      (book) => `
      <div class="results-box">
        <ul>
          <img src="${book.thumbnail}">
          <li><b>Title:</b> ${book.title}</li>
          <li><b>Author:</b> ${book.authors}</li>
          <a href="${book.link}" target="_blank"><button class="book-info"><b>See this book</b></button></a>
        </ul>
      </div>`
    )
    .join('');

  document.querySelector('#output').innerHTML = output;
  document.querySelector('.text').innerHTML = `Search results of: "${query}"`;
}
