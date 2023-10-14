/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Godfrey Eyo",
    photo: 'images/profile-picture.jpg',
    favoriteFoods: [
        'Indomie',
        'Rice',
        'Beans',
        'Banana Cream Pie',
        'Shrimp'
    ],
    hobbies: [
        'Coding',
        'Watching movies',
        'Sleeping',
        'Eating'
    ],
    placesLived: [
        {place: 'Ekpoma', length: '1 year'}
        
    ]
};




/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Abuja',
        length: '5 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Benin',
        length: '2 years'
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute("alt", myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})

