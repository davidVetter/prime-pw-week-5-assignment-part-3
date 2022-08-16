console.log('***** Music Collection *****')

let collection = []; // creating collection array

// Function that accepts an album title, artist and year published as 
// arguments and adds them to the array collection as objects
// Returns object created
function addToCollection(title, artist, year) {
    let addTitle = title; // variable to for title argument
    let addArtist = artist; // variable for artist argument
    let pubYear = year; // variable for year argument
    const addObj = { // create new object
        title: addTitle, // title of album property
        artist: addArtist, // artist property
        year: pubYear, // year published property
    }
    //console.log('This is what is being added', addObj); // tracking function logs
    //console.log('Collection prior to push', collection);
    collection.push(addObj); // add new object to array collection
    return addObj; // return new object
} // end addToCollection function

// Test data for add to collection, adds 6 albums, logs collection after adding
console.log(addToCollection('52nd Street', 'Billy Joel', 1978));
console.log(addToCollection('Glass Houses', 'Billy Joel', 1980));
console.log(addToCollection("Ropin' The Wind", 'Garth Brooks', 1991));
console.log(addToCollection('Maybe Memories', 'The Used', 2003));
console.log(addToCollection('Sing The Sorrow', 'AFI', 2003));
console.log(addToCollection('Swan Songs', 'Hollywood Undead', 2008));
console.log('Collection after adding ', collection);
console.log('The 3rd albums in my collection is ', collection[2]);

// Function that accepts an array and displays the number of objects 
// and their contents in a readable format
function showCollection(array) {
    let arr = array // variable for the argument
    console.log(`The number of items in this collection is ${arr.length}`); // logs number in given array
    for (let record of arr) { // for loop to go through given array
        console.log(`${record.title} by ${record.artist}, published in ${record.year}`); // foramtted log of each object
    } // end for loop
} // end showCollection function

showCollection(collection); // call showCollection function with collection array as argument

// Function that searchs the given array by artist and returns a
// new array with any matching
function findByArtist(artist, array) {
    let findArtist = artist; // variable for artist argument
    let arr = array; // variable for the array argument
    let results = []; // empty array for search results
    for (let target of arr) { // for loop that searchs through given array of objects
        if (target.artist === findArtist) { // match if artist property matches artist given
            results.push(target); // add object if the artist match
        }
    }
    return results; // returns the new array of results or an empty array
}

// Test data for findByArtist search function
console.log('Lets see if AFI is here (should return a result)', findByArtist('AFI', collection));
console.log('Lets see if Billy Joel is here (should return a result)', findByArtist('Billy Joel', collection));
console.log('Lets see if Elton John is here (should return no result)', findByArtist('Elton John', collection));
console.log('Lets see if The Used is here (should return a result)', findByArtist('The Used', collection));
console.log('Lets see if Asking Alexandria is here (should return no result)', findByArtist('Asking Alexandria', collection));

// Function that searches by title
function findByTitle(title, array) {
    let findTitle = title; // variable for artist argument
    let arr = array; // variable for the array argument
    let results = []; // empty array for search results
    for (let target of arr) { // for loop that searchs through given array of objects
        if (target.title === findTitle) { // match if artist property matches artist given
            results.push(target); // add object if the artist match
        }
    }
    return results; // returns the new array of results or an empty array
}
//console.log('Calling find by Title ', findByTitle('Swan Songs', collection)); // Test findByTitle function

// Function for searches by year
function findByYear(year, array) {
    let findYear = year; // variable for artist argument
    let arr = array; // variable for the array argument
    let results = []; // empty array for search results
    for (let target of arr) { // for loop that searchs through given array of objects
        if (target.year === findYear) { // match if artist property matches artist given
            results.push(target); // add object if the artist match
        }
    }
    return results; // returns the new array of results or an empty array
} // end findByYear Function

//console.log('Calling find by Year ', findByYear(2003, collection)); // Test findByYear function

// Function that searchs by artist AND title
function findByAandT(artist, title, array) {
    let findArtist = artist; // variable for artist argument
    let findTitle = title;
    let arr = array; // variable for the array argument
    let results = []; // empty array for search results
    for (let target of arr) { // for loop that searchs through given array of objects
        if (target.artist === findArtist && target.title === findTitle) { // match if artist property matches artist given
            results.push(target); // add object if the artist match
        }
    }
    return results; // returns the new array of results or an empty array
} // end findByYear Function

function findByAandY(artist, year, array) {
    let findArtist = artist; // variable for artist argument
    let findYear = year;
    let arr = array; // variable for the array argument
    let results = []; // empty array for search results
    for (let target of arr) { // for loop that searchs through given array of objects
        if (target.artist === findArtist && target.year === findYear) { // match if artist property matches artist given
            results.push(target); // add object if the artist match
        }
    }
    return results; // returns the new array of results or an empty array
} // end findByYear Function

console.log('Calling the findByAandY function ', findByAandY('AFI', 2003, collection));

// Function that accepts an object properties as argument and an array.
// Searches for object in array based on properties given
function search(object, array)  {
    let target = object;
    let arr = array;
    let hasArt = target.hasOwnProperty('artist');
    let hasTitle = target.hasOwnProperty('title');
    let hasYear = target.hasOwnProperty('year');
    console.log(`hasTitle is ${hasTitle} and hasArt is ${hasArt} and hasYear is ${hasYear}`);

    if (hasArt === false && hasTitle === false && hasYear === false) {
        showCollection(arr);
    } else if (hasArt && hasTitle === false && hasYear === false) {
        console.log(`Search Parameters: ${target.artist} \nResults:`, findByArtist(target.artist, arr));
    } else if (hasArt === false && hasTitle && hasYear === false) {
        console.log(`Search Parameters: ${target.title} \nResults:`, findByTitle(target.title, arr));
    } else if (hasArt === false && hasTitle === false && hasYear) {
        console.log(`Search Parameters: ${target.year} \nResults:`, findByYear(target.year, arr));
    } else if (hasArt && hasTitle && hasYear === false) {
        console.log(`Search Parameters: ${target.artist} and ${target.title}`, findByAandT(target.artist, target.title, arr));
    } else if (hasArt && hasTitle === false && hasYear) {
        console.log(`Search Parameters: ${target.artist} and ${target.year}`, findByAandY(target.artist, target.year, arr));
    }
} // end search Function

search({artist: 'Billy Joel', year: 1980}, collection);