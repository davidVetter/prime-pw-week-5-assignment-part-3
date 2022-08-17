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
        console.log(`${record.title.toUpperCase()} by ${record.artist.toUpperCase()}, published in ${record.year}`); // foramtted log of each object
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
        if (target.artist === findArtist || target.artist.toUpperCase() === findArtist || target.artist.toLowerCase() === findArtist) { // match if artist property matches artist given
            results.push(target); // add object if the artist match
        } // end if
    } // end for loop
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
    let findTitle = title; // variable for title argument
    let arr = array; // variable for the array argument
    let results = []; // empty array for search results
    for (let target of arr) { // for loop that searchs through given array of objects
        if (target.title === findTitle || target.title.toUpperCase() === findTitle || target.title.toLowerCase() === findTitle) { // match if title property matches artist given
            results.push(target); // add object if the title match
        } // end if
    } // end for loop
    return results; // returns the new array of results or an empty array
}
//console.log('Calling find by Title ', findByTitle('Swan Songs', collection)); // Test findByTitle function

// Function that searches by year
function findByYear(year, array) {
    let findYear = year; // variable for year argument
    let arr = array; // variable for the array argument
    let results = []; // empty array for search results
    for (let target of arr) { // for loop that searchs through given array of objects
        if (target.year === findYear) { // match if year property matches artist given
            results.push(target); // add object if the year match
        } // end if
    } // end for loop
    return results; // returns the new array of results or an empty array
} // end findByYear Function

//console.log('Calling find by Year ', findByYear(2003, collection)); // Test findByYear function

// Function that searchs by artist AND title
function findByAandT(artist, title, array) {
    let findArtist = artist; // variable for artist argument
    let findTitle = title; // variable for the title argument
    let arr = array; // variable for the array argument
    let results = []; // empty array for search results
    for (let target of arr) { // for loop that searchs through given array of objects
        if 
        ((target.artist === findArtist && target.title === findTitle) || // OR
        (target.artist.toUpperCase() === findArtist && target.title.toUpperCase() === findTitle) || //OR
        (target.artist.toLowerCase() === findArtist && target.title.toLowerCase() === findTitle)) // match if artist and title property matches artist given
        { 
            results.push(target); // add object if both match
        } // end if
    } // end for loop
    return results; // returns the new array of results or an empty array
} // end findByYear Function

//console.log('Calling the findByAandT function ', findByAandT('Billy Joel', 'Glass Houses', collection)); // Test findByAandT Function

// Function to search by artist AND year
function findByAandY(artist, year, array) {
    let findArtist = artist; // variable for artist argument
    let findYear = year; // variable for the year argument
    let arr = array; // variable for the array argument
    let results = []; // empty array for search results
    for (let target of arr) { // for loop that searchs through given array of objects
        if ((target.artist === findArtist && target.year === findYear) || // OR
        (target.artist.toUpperCase() === findArtist && target.year === findYear) || // OR     ****I don't know if this is the best way to do these lines
        (target.artist.toLowerCase() === findArtist && target.year === findYear))    //           but they got pretty long
        { // match if artist and year property matches artist given
            results.push(target); // add object if both match
        } // end if
    } // end for loop
    return results; // returns the new array of results or an empty array
} // end findByYear Function

//console.log('Calling the findByAandY function ', findByAandY('AFI', 2003, collection)); // Test findByAandY function

// Function to search by title AND year
function findByTandY(title, year, array) {
    let findTitle = title; // variable for title argument
    let findYear = year; // variable for year argument
    let arr = array; // variable for the array argument
    let results = []; // empty array for search results
    for (let target of arr) { // for loop that searchs through given array of objects
        if ((target.title === findTitle && target.year === findYear) || // OR
        (target.title.toUpperCase() === findTitle && target.year === findYear) || // OR
        (target.title.toLowerCase() === findTitle && target.year === findYear)) // match if title and year property matches artist given
        { 
            results.push(target); // add object if the artist match
        } // end if
    } // end for loop
    return results; // returns the new array of results or an empty array
} // end findByYear Function

//console.log('Calling the findByTandY function ', findByTandY('Maybe Memories', 2003, collection)); // Test the findByTandY function

// Function to search by Artist, Title AND Year
function findByATY(artist, title, year, array) {
    let findArtist = artist; // variable for artist argument
    let findTitle = title; // variable for title argument
    let findYear = year; // variable for year argument
    let arr = array; // variable for the array argument
    let results = []; // empty array for search results
    for (let target of arr) { // for loop that searchs through given array of objects
        if ((target.artist === findArtist && target.title === findTitle && target.year === findYear) || // OR
        (target.artist.toUpperCase() === findArtist && target.title.toUpperCase() === findTitle && target.year === findYear) || // OR
        (target.artist.toLowerCase() === findArtist && target.title.toLowerCase() === findTitle && target.year === findYear)) { // match if artist, title and year property matches artist given
            results.push(target); // add object if all match
        } // end if
    } // end for loop
    return results; // returns the new array of results or an empty array
} // end findByYear Function

//console.log('Calling the findByATY function ', findByATY('AFI', 'Sing The Sorrow', 2003, collection)); // Testing findByATY function

// Function that accepts an object properties as argument and an array.
// Searches for object in array based on properties given
function search(object, array)  {
    let target = object;
    let arr = array;
    let arrDefault = collection;

    if (arr === undefined || arr === ''){ // Check if an array to search was passed or uses "collection"
        console.log(`No collection selected - Using default`); // message acknowleding no array passed
        arr = arrDefault; // sets default to be used
    }

    if (target === undefined || target === '') { // Checks if nothing was passed as object in search
        console.log('No search parameters given - Displaying all'); // message acknowleding no search parameters
        return arr; // return full collection
    }
    
    let hasArt = target.hasOwnProperty('artist'); // Checks if passed object has property artist
    let hasTitle = target.hasOwnProperty('title'); // Checks if passed object has property title
    let hasYear = target.hasOwnProperty('year'); // Checks if passed object has property year
    //console.log(`hasTitle is ${hasTitle} and hasArt is ${hasArt} and hasYear is ${hasYear}`); // Test log to track property checks worked correctly
    
    if (hasArt === false && hasTitle === false && hasYear === false) { // if empty object passed
        console.log('No search parameters given - Displaying all'); // log message that collection was selected
        return arr; // return full collection
    } else if (hasArt && hasTitle === false && hasYear === false) { // if artist used to search
        console.log(`Search Parameters: ${target.artist}`); // Log search parameters used
        return findByArtist(target.artist, arr); // Return results of function findByArtist
    } else if (hasArt === false && hasTitle && hasYear === false) { // if title used to search
        console.log(`Search Parameters: ${target.title}`); // Log search parameters used
        return findByTitle(target.title, arr); // Return results of findByTitle function
    } else if (hasArt === false && hasTitle === false && hasYear) { // if year used to search
        console.log(`Search Parameters: ${target.year}`); // Log search parameters used
        return findByYear(target.year, arr); // Return results of findByYear function
    } else if (hasArt && hasTitle && hasYear === false) { // if artist and title used to search
        console.log(`Search Parameters: ${target.artist} and ${target.title}`); // Log search parameters
        return findByAandT(target.artist, target.title, arr); // return results of findByAandT
    } else if (hasArt && hasTitle === false && hasYear) { // if artist and year used to search
        console.log(`Search Parameters: ${target.artist} and ${target.year}`); // log search parameters
        return findByAandY(target.artist, target.year, arr); // returns results of findByAandY
    } else if (hasArt === false && hasTitle && hasYear) { // if title and year used to search
        console.log(`Search Parameters: ${target.title} and ${target.year}`); // Log search parameters used
        return findByTandY(target.title, target.year, arr); // return results of function findByTandY
    } else if (hasArt && hasTitle && hasYear) { // if artist, title and year used to search
        console.log(`Search Parameters: ${target.artist}, ${target.title} and ${target.year}`); // Log search parameters used
        return findByATY(target.artist, target.title, target.year, arr); // Return results of findByATY function
    } // end else/ifs
} // end search Function

// Search Function test logs
console.log('Search Results: ', search({artist: 'Ray Charles', year: 1957}));
console.log('Search Results: ', search({artist: 'Billy Joel', title: '52nd Street', year: 1978}, collection));
console.log('Search Results: ', search({artist: 'Garth Brooks', title: "Ropin' The Wind"}, collection));
console.log('Search Results: ', search({artist: 'HOLLYWOOD UNDEAD', year: 2008}, collection));
console.log('Search Results: ', search({title: 'glass houses', year: 1980}, collection));
console.log('Search Results: ', search({artist: 'Billy Joel'}, collection));
console.log('Search Results: ', search({title: '52nd Street'}, collection));
console.log('Search Results: ', search({year: 2003}, collection));
console.log('Search Results: ', search({}, collection));
console.log('Search Results: ', search({}));
console.log('Search Results: ', search());
console.log('Search Results: ', search('', ''));
console.log('Search Resutls: ', search({title: 'sing the sorrow'}, collection));
console.log('Search Results: ', search({artist: 'billy joel'}, collection));
console.log('Search Results: ', search({artist: 'THE USED', title: 'MAYBE MEMORIES'}, collection));
console.log('Search Results: ', search({artist: 'the used', title: 'maybe memories', year: 2003}, collection));