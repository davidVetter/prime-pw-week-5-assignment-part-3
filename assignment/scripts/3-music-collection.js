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
