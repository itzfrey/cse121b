// Export the searchBook function
export function searchBook(query) {
	if (query === '') {
	  alert('Please enter a search');
	  return;
	}
  
	return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
	  .then((res) => res.json())
	  .then((data) => {
		return data.items.map((book) => ({
		  thumbnail: book.volumeInfo.imageLinks.smallThumbnail,
		  title: book.volumeInfo.title,
		  authors: book.volumeInfo.authors,
		  link: book.volumeInfo.canonicalVolumeLink,
		}));
	  });
  }
  














// export function searchBook(event) {
// 	let query = document.querySelector('#search-input').value;

// 	if (query === '') {
// 		// Show an error message or provide user feedback
// 		alert('Please enter a search');
// 		return;
// 	  }
// 	// Initiate the fetch API
// 	fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
//       .then((res) => res.json())
//       .then((data) => {
//       	// Filter the search results by author, title, and subtitle
//       	let output = '';
//       	data.items.forEach(book => {
//       		output += `
//           <div class="results-box">
//       		<ul>
//             <img src= ${book.volumeInfo.imageLinks.smallThumbnail}>
// 	      		<li><b>Title:</b> ${book.volumeInfo.title}</li>
// 	      		<li><b>Author:</b> ${book.volumeInfo.authors}</li>
//             <a href=${book.volumeInfo.canonicalVolumeLink} target="_blank" ><button class="book-info"><b>See this book</b></button></a>
//       		</ul>
//           </div>
//       		`;
//       	});
//       	// Display the search result
//     		document.querySelector("#output").innerHTML = output;
//       })
//       // Throw an error message when something went wrong during the search
//       .catch((error) => console.log(error));

//       // Display "Search results of" text when clicked the search button
// 	  document.querySelector('.text').innerHTML = `Search results of: "${query}"`
// 	}

// // Start searching the lists when user clicks entry key
// document.querySelector("#search-input").addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         document.querySelector("#submit-button").click();
//     }
// });