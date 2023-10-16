/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
var templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        // Create an HTMl article elemet
        const article = document.createElement('article');

        // Create an HTMl h3 elament and set its text content to the templeName property 
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        // Create an HTML img element
        const img = document.createElement('img');
        // Set the src attribute to the temple's imageUrl property
        img.src = temple.imageUrl;
        // Set the alt attribute to the temple's location property
        img.alt = temple.location;

        // Append the h3 and img elements to the article element
        article.appendChild(h3);
        article.appendChild(img);
        // Append the article element to the global templesElement variable
        templesElement.appendChild(article);
    })
}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")

    if (response.ok) {
        templeList = await response.json();
    }

    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
  };
  

/* sortBy Function */
const sortBy = (temples) => {
    reset();

    const filter = document.getElementById('sortBy').value; 

    switch (filter) {
        case 'utah':
            // Filter for temples where the location contains "Utah" as a string
            displayTemples(templeList.filter(temple => temple.location.includes("Utah")));
            break;
    
        case 'notutah':
            // Filter for temples where the location does not contain "Utah" as a string
            displayTemples(templeList.filter(temple => !temple.location.includes("Utah")));
            break;
    
        case 'older':
            // Filter for temples where the dedicated date is before 1950
            displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        
        case 'all':
            // No filter, use all temples
            displayTemples(templeList);
            break;
    }
};




/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

getTemples();