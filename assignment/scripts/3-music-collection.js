console.log("***** Music Collection *****");

let collection = []; // creating collection array
let arrDefault = collection;
let showToggle = false;
let addMore = false;

// Function that accepts an album title, artist and year published as
// arguments and adds them to the array collection as objects
// Returns object created
function addToCollection(title, artist, year, tracks) {
  let addTitle = title; // variable to for title argument
  let addArtist = artist; // variable for artist argument
  let pubYear = year; // variable for year argument
  let addTracks = tracks; // variable for track argument
  let addObj = {}; // new empty object
  if (tracks === undefined) { // check if tracks are not present
     addObj = {
      // create new object without tracks property
      title: addTitle, // title of album property
      artist: addArtist, // artist property
      year: pubYear, // year published property
    };
  } else { // if tracks were present
     addObj = {
      // create new object with tracks property
      title: addTitle, // title of album property
      artist: addArtist, // artist property
      year: pubYear, // year published property
      tracks: addTracks, // array of tracks with name and duration properties
    };
  } // end if else
  //console.log('This is what is being added', addObj); // tracking function logs
  //console.log('Collection prior to push', collection);
  collection.push(addObj); // add new object to array collection
  return addObj; // return new object
} // end addToCollection function

function addTestCollection() {
// Test data for add to collection, adds 6 albums, logs collection after adding
console.log('%c****** START OF ADD TO COLLECTION FUNCTION TEST DATA ******', 'background: #dfff00; color: #0096ff');
console.log(
  addToCollection("52nd Street", "Billy Joel", 1978, [
    { trackName: "Big Shot", time: "4:03" },
    { trackName: "My Life", time: "4:44" },
  ])
);
console.log(
  addToCollection("Glass Houses", "Billy Joel", 1980, [
    { trackName: "You May Be Right", time: "4:13" },
    { trackName: "It's Still Rock and Rock to Me", time: "2:56" },
  ])
);
console.log(
  addToCollection("Ropin' The Wind", "Garth Brooks", 1991, [
    { trackName: "Rodeo", time: "3:54" },
    { trackName: "Papa Loved Mama", time: "2:50" },
    { trackName: "In Lonesome Dove", time: "4:49" },
  ])
);
console.log(
  addToCollection("In Love and Death", "The Used", 2003, [
    { trackName: "Take It Away", time: "3:37" },
    { trackName: "Listening", time: "2:46" },
    { trackName: "Sound Effects and Overdramatics", time: "3:28" },
  ])
);
console.log(addToCollection("Sing The Sorrow", "AFI", 2003));
console.log(
  addToCollection("Swan Songs", "Hollywood Undead", 2008, [
    { trackName: "Undead", time: "4:25" },
    { trackName: "Black Dahlia", time: "3:45" },
  ])
);
console.log("%cCollection after adding ", 'color: #66ff00', collection);
console.log('%c****** END OF ADD TO COLLECTION FUNCTION TEST DATA ******', 'background: #0096ff; color: #dfff000');
//loadCollection();
document.getElementById('showBtn').style.display = 'block';
document.getElementById('addTestCollectionBtn').style.display = 'none';
document.getElementById('addMoreBtn').style.display = 'block';
loadCollection();
//console.log("The 3rd albums in my collection is ", collection[2]);
}

// Function that accepts an array and displays the number of objects
// and their contents in a readable format
function showCollection(array) {
  let arr = collectionCheck(array); // variable for the argument
  let c = 0;
  console.log(`%cTOTAL COLLECTION: ${arr.length}`, 'background: #4e182f; color: #f09605'); // logs number in given array
  for (let record of arr) {
    // for loop to go through given array
    console.log(
      `%c${record.title.toUpperCase()} by ${record.artist.toUpperCase()}, published in ${
        record.year
      }`, 'background: #8f2d56; color: #fbb13c'
    ); // foramtted log of each object
    if (record.hasOwnProperty("tracks")) {
        if (!(record.tracks === undefined)) {
            while (c < record.tracks.length) {
                console.log(
                `%c${c + 1}. ${record.tracks[c].trackName.toUpperCase()}: ${
                    record.tracks[c].time
                }`, 'background: #fbb13c; color: #d81159'
                );
                c++;
            }
        }
    c = 0;
  }
} // end for loop
} // end showCollection function
console.log('');
console.log('%c****** START SHOW COLLECTION FUNCTION TEST DATA ******', 'background: #dfff00; color: #0096ff');
showCollection(collection); // call showCollection function with collection array as argument
console.log('%c****** END SHOW COLLECTION FUNCTION TEST DATA ******', 'background: #0096ff; color: #dfff000');

// Function that searchs the given array by artist and returns a
// new array with any matching
function findByArtist(artist, array) {
  let findArtist = artist.toLowerCase(); // variable for artist argument
  let arr = collectionCheck(array); // variable for the array argument
  let results = []; // empty array for search results
  for (let target of arr) {
    // for loop that searchs through given array of objects
    if (target.artist.toLowerCase() === findArtist) {
      // match if artist property matches artist given
      results.push(target); // add object if the artist match
    } // end if
  } // end for loop
  return results; // returns the new array of results or an empty array
}

// Test data for findByArtist search function
console.log('');
console.log('%c****** START OF SEARCH BY ARTIST FUNCTION TEST DATA ******', 'background: #dfff00; color: #0096ff');
console.log(
  "%cLets see if AFI is here (should return a result(mixed))", 'color: #66ff00',
  findByArtist("AfI", collection)
);
console.log(
  "%cLets see if Billy Joel is here (should return a result)", 'color: #66ff00',
  findByArtist("BiLly JOEl")
);
console.log(
  "%cLets see if Elton John is here (should return no result)", 'color: #ff0000',
  findByArtist("Elton John")
);
console.log(
  "%cLets see if The Used is here (should return a result)", 'color: #66ff00',
  findByArtist("The Used", collection)
);
console.log(
  "%cLets see if Asking Alexandria is here (should return no result)", 'color: #ff0000',
  findByArtist("Asking Alexandria", collection)
);
console.log('%c****** END OF SEARCH BY ARTIST FUNCTION TEST DATA ******', 'background: #0096ff; color: #dfff000');

// Function that searches by title
function findByTitle(title, array) {
  let findTitle = title.toLowerCase(); // variable for title argument
  let arr = collectionCheck(array); // variable for the array argument
  let results = []; // empty array for search results
  for (let target of arr) {
    // for loop that searchs through given array of objects
    if (target.title.toLowerCase()=== findTitle) {
      // match if title property matches artist given
      results.push(target); // add object if the title match
    } // end if
  } // end for loop
  return results; // returns the new array of results or an empty array
} // end findByTitle function

//console.log('Calling find by Title (mixed) ', findByTitle('swAN SoNgs', collection)); // Test findByTitle function

// Function that searches by year
function findByYear(year, array) {
  let findYear = Number(year); // variable for year argument
  let arr = collectionCheck(array); // variable for the array argument
  let results = []; // empty array for search results
  for (let target of arr) {
    // for loop that searchs through given array of objects
    if (target.year === findYear) {
      // match if year property matches artist given
      results.push(target); // add object if the year match
    } // end if
  } // end for loop
  return results; // returns the new array of results or an empty array
} // end findByYear Function

//console.log('Calling find by Year ', findByYear('2003', collection)); // Test findByYear function

// Function that searches by Track
function findByTrack(track, array) {
    let findTrack = track.toLowerCase(); // variable for year argument
    let arr = collectionCheck(array); // variable for the array argument
    let results = [];
    //let trackArr = (Object.values(array.tracks));
    for (let target of arr) {
        if (target.hasOwnProperty('tracks')) {
            let trackArr = (Object.values(target.tracks));
            for (let i = 0; i < trackArr.length; i++) {
                if (trackArr[i].trackName.toLowerCase() === findTrack) {
                    results.push(target);
                }
            }    
        }
    }
    return results; // returns the new array of results or an empty array
} // end findByYear Function

// Test logs for find by track function
console.log('');
console.log('%c****** START OF FIND BY TRACK FUNCTION TEST DATA ******', 'background: #dfff00; color: #0096ff');
console.log('%cCalling findByTrack function for Bleed Black(should not exist yet)', 'color: #FF0000', findByTrack('Bleed Black'));
console.log('%cCalling findByTrack function for LisTEning (mixed)', 'color: #66ff00', findByTrack('LisTEning'));
console.log('%cCalling findByTrack function for RodEo', 'color: #66ff00', findByTrack('RodEo'));
console.log('%cCalling findByTrack function for BIG SHOT', 'color: #66ff00', findByTrack('BIG SHOT'));
console.log('%c****** END OF FIND BY TRACK FUNCTION TEST DATA ******', 'background: #0096ff; color: #dfff000');

// Function that searchs by artist AND title
function findByAandT(artist, title, array) {
  let findArtist = artist.toLowerCase(); // variable for artist argument in lowercase
  let findTitle = title.toLowerCase(); // variable for the title argument in lowercase
  let arr = collectionCheck(array); // variable for the array argument
  let results = []; // empty array for search results
  for (let target of arr) {
    // for loop that searchs through given array of objects
    if ((target.artist.toLowerCase() === findArtist && target.title.toLowerCase() === findTitle)) {
      // match if artist and title property matches artist given
      results.push(target); // add object if both match
    } // end if
  } // end for loop
  return results; // returns the new array of results or an empty array
} // end findByYear Function

//console.log('Calling the findByAandT function (mixed) ', findByAandT('BiLLy Joel', 'Glass HoUSes', collection)); // Test findByAandT Function

// Function to search by artist AND year
function findByAandY(artist, year, array) {
  let findArtist = artist.toLowerCase(); // variable for artist argument in lowercase
  let findYear = Number(year); // variable for the year argument
  let arr = collectionCheck(array); // variable for the array argument
  let results = []; // empty array for search results
  for (let target of arr) {
    // for loop that searchs through given array of objects
    if ((target.artist.toLowerCase() === findArtist && target.year === findYear)) {
      // match if artist and year property matches artist given
      results.push(target); // add object if both match
    } // end if
  } // end for loop
  return results; // returns the new array of results or an empty array
} // end findByYear Function

//console.log('Calling the findByAandY function (mixed)', findByAandY('Afi', '2003', collection)); // Test findByAandY function

// Function that searches by Track AND Artist
function findByTrackAndArt(track, artist, array) {
    let findArtist = artist.toLowerCase();
    let findTrack = track.toLowerCase();
    let arr = collectionCheck(array); // variable for the array argument
    let results = [];
    for (let target of arr) {
        if (target.hasOwnProperty('tracks')) {
            let trackArr = (Object.values(target.tracks)); // variable equal to the properties of tracks for current element in the collection used as an array of objects
            for (let i = 0; i < trackArr.length; i++) { // for loop to walk through tracks array
                if (trackArr[i].trackName.toLowerCase() === findTrack && target.artist.toLowerCase() === findArtist) { // check if trackName for current element of track array is equal to request track and artist matches
                    results.push(target); // push object to results array
                }
            }
        }
    }
    return results; // returns the new array of results or an empty array
  } // end findByYear Function

  //console.log('%cCalling findByTrackAndArt function for BIG shOT by bILLY JoEl (mixed)', 'color: #66ff00', findByTrackAndArt('BIG shOT', 'bILLY JoEl'));

  // Function that searches by Track AND Artist AND Title
function findByTrackArtTitle(track, artist, title, array) {
    let findTrack = track.toLowerCase();
    let findArtist = artist.toLowerCase();
    let findTitle = title.toLowerCase();
    let arr = collectionCheck(array); // variable for the array argument
    let results = [];
    for (let target of arr) {
        if (target.hasOwnProperty('tracks')) {
            let trackArr = (Object.values(target.tracks)); // variable equal to the properties of tracks for current element in the collection used as an array of objects
            for (let i = 0; i < trackArr.length; i++) { // for loop to walk through tracks array
                if (trackArr[i].trackName.toLowerCase() === findTrack && target.artist.toLowerCase() === findArtist && target.title.toLowerCase() === findTitle) { // check if trackName for current element of track array is equal to request track, artist and title matches
                    results.push(target); // push object to results array
                }
            }
        }
    }
    return results; // returns the new array of results or an empty array
  } // end findByYear Function

  //console.log('%cCalling findByTrackArtTitle function for You May Be Right by BillY Joel on GlaSS Houses (mixed)', 'color: #66ff00', findByTrackArtTitle('You May Be Right', 'BillY Joel', 'GlaSS Houses'));

    // Function that searches by Track AND Artist AND year
    function findByTrackArtistYear(track, artist, year, array) {
        let findTrack = track.toLowerCase();
        let findArtist = artist.toLowerCase();
        let arr = collectionCheck(array); // variable for the array argument
        let results = [];
        for (let target of arr) {
            if (target.hasOwnProperty('tracks')) {
                let trackArr = (Object.values(target.tracks)); // variable equal to the properties of tracks for current element in the collection used as an array of objects
                for (let i = 0; i < trackArr.length; i++) { // for loop to walk through tracks array
                    if (trackArr[i].trackName.toLowerCase() === findTrack && target.artist.toLowerCase() === findArtist && target.year === Number(year)) { // check if trackName for current element of track array is equal to request track, title and year matches
                        results.push(target); // push object to results array
                    }
                }
            }
        }
        return results; // returns the new array of results or an empty array
      } // end findByYear Function
    
    //console.log('%cCalling findByTrackArtistYear function for You May Be RiGHt by BillY Joel from 1980', 'color: #66ff00', findByTrackArtistYear('You May Be RiGHt', 'BillY Joel', '1980'));  

    // Function that searches by Track AND Title AND year
function findByTrackTitleYear(track, title, year, array) {
    let findTrack = track.toLowerCase();
    let findTitle = title.toLowerCase();
    let arr = collectionCheck(array); // variable for the array argument
    let results = [];
    for (let target of arr) {
        if (target.hasOwnProperty('tracks')) {
            let trackArr = (Object.values(target.tracks)); // variable equal to the properties of tracks for current element in the collection used as an array of objects
            for (let i = 0; i < trackArr.length; i++) { // for loop to walk through tracks array
                if (trackArr[i].trackName.toLowerCase() === findTrack && target.title.toLowerCase() === findTitle && target.year === Number(year)) { // check if trackName for current element of track array is equal to request track, title and year matches
                    results.push(target); // push object to results array
                }
            }
        }
    }
    return results; // returns the new array of results or an empty array
  } // end findByYear Function

  //console.log('%cCalling findByTrackTitleYear function for You MAY Be Right on GlAss Houses from 1980', 'color: #66ff00', findByTrackTitleYear('You MAY Be Right', 'GlAss Houses', '1980'));

// Function to search by title AND year
function findByTandY(title, year, array) {
  let findTitle = title.toLowerCase(); // variable for title argument
  let findYear = Number(year); // variable for year argument
  let arr = collectionCheck(array); // variable for the array argument
  let results = []; // empty array for search results
  for (let target of arr) {
    // for loop that searchs through given array of objects
    if ((target.title.toLowerCase() === findTitle && target.year === findYear)) {
      // match if title and year property matches artist given
      results.push(target); // add object if the artist match
    } // end if
  } // end for loop
  return results; // returns the new array of results or an empty array
} // end findByYear Function

//console.log('Calling the findByTandY function (mixed)', findByTandY('In Love AND DeAth', '2003', collection)); // Test the findByTandY function

// Function that searches by Track AND Year
function findByTrackAndYear(track, year, array) {
    let addYear = Number(year);
    let addTrack = track.toLowerCase();
    let arr = collectionCheck(array); // variable for the array argument
    let results = [];
    for (let target of arr) {
        if (target.hasOwnProperty('tracks')) {
            let trackArr = (Object.values(target.tracks)); // variable equal to the properties of tracks for current element in the collection used as an array of objects
            for (let i = 0; i < trackArr.length; i++) { // for loop to walk through tracks array
                if (trackArr[i].trackName.toLowerCase() === addTrack && target.year === addYear) { // check if trackName for current element of track array is equal to request track and year matches
                    results.push(target); // push object to results array
                }
            }
        }
    }
    return results; // returns the new array of results or an empty array
  } // end findByTrackAndTitle Function

  //console.log('%cCalling findByTrackAndYear function for Big Shot in 1978', 'color: #66ff00', findByTrackAndYear('bIg sHot', '1978'));
  //console.log('%cCalling findByTrackAndYear function for Big Shot in 1980 (Should not exist)', 'color: #FF0000', findByTrackAndYear('Big Shot', 1980));

  // Function that searches by Track AND Title
function findByTrackAndTitle(track, title, array) {
    let findTrack = track.toLowerCase();
    let findTitle = title.toLowerCase();
    let arr = collectionCheck(array); // variable for the array argument
    let results = [];
    for (let target of arr) {
        if (target.hasOwnProperty('tracks')) {
            let trackArr = (Object.values(target.tracks)); // variable equal to the properties of tracks for current element in the collection used as an array of objects
            for (let i = 0; i < trackArr.length; i++) { // for loop to walk through tracks array
                if (trackArr[i].trackName.toLowerCase() === findTrack && target.title.toLowerCase() === findTitle) { // check if trackName for current element of track array is equal to request track and title matches
                    results.push(target); // push object to results array
                }
            }
        }
    }
    return results; // returns the new array of results or an empty array
  } // end findByTrackAndTitle Function

  //console.log('%cCalling findByTrackAndTitle function for Big ShoT on 52nd StReet', 'color: #66ff00', findByTrackAndTitle('Big ShoT', '52nd StReet'));
  //console.log('%cCalling findByTrackAndTitle function for Big Shot on Sing The Sorrow (Should not exist)', 'color: #FF0000', findByTrackAndTitle('Big Shot', 'Sing The Sorrow'));

// Function to search by Artist, Title AND Year
function findByATY(artist, title, year, array) {
  let findArtist = artist.toLowerCase(); // variable for artist argument
  let findTitle = title.toLowerCase(); // variable for title argument
  let findYear = Number(year); // variable for year argument
  let arr = collectionCheck(array); // variable for the array argument
  let results = []; // empty array for search results
  for (let target of arr) {
    // for loop that searchs through given array of objects
    if ((target.artist.toLowerCase() === findArtist && target.title.toLowerCase() === findTitle && target.year === findYear)) {
      // match if artist, title and year property matches artist given
      results.push(target); // add object if all match
    } // end if
  } // end for loop
  return results; // returns the new array of results or an empty array
} // end findByYear Function

//console.log('Calling the findByATY function (mixed)', findByATY('AFi', 'Sing The SorROw', '2003', collection)); // Testing findByATY function

// Function that searches by Track AND artist AND title AND Year
function findByTrackArtistTitleYear(track, artist, title, year, array) {
    let findTrack = track.toLowerCase();
    let findArtist = artist.toLowerCase();
    let findTitle = title.toLowerCase();
    let addYear = Number(year);
    let arr = collectionCheck(array); // variable for the array argument
    let results = [];
    for (let target of arr) {
        if (target.hasOwnProperty('tracks')) {
            let trackArr = (Object.values(target.tracks)); // variable equal to the properties of tracks for current element in the collection used as an array of objects
            for (let i = 0; i < trackArr.length; i++) { // for loop to walk through tracks array
                if (trackArr[i].trackName.toLowerCase() === findTrack && target.artist.toLowerCase() === findArtist && target.title.toLowerCase() === findTitle && target.year === addYear) { // check if trackName for current element of track array is equal to request track, artist, title and year matches
                    results.push(target); // push object to results array
                } // end if
            } // end for loop
        } // end if
    } // end for loop
    return results; // returns the new array of results or an empty array
  } // end findByTrackAndTitle Function

  //console.log('%cCalling findByTrackArtistTitleYear function for Big ShOt by Billy Joel on 52nd StrEEt in 1978', 'color: #66ff00', findByTrackArtistTitleYear('Big ShOt', 'Billy Joel', '52nd StrEEt', '1978'));
  //console.log('%cCalling findByTrackArtistTitleYear function for Big Shot By Garth Brooks on 52nd Street in 1980 (Should not exist)', 'color: #FF0000', findByTrackArtistTitleYear('Big Shot', 'Garth Brooks', '52nd Street', 1980));

// This function checks if the passed array is empty and assigns a default value if it was
// Returns original array passed if it isn't empty
function collectionCheck(array) {
  let arr = array; // variable for argument
  if (arr === undefined || arr === "") {
    // Check if an array to search was passed or uses "collection"
    console.log(`%cNo collection selected - Using default`, 'color: #ffea00'); // message acknowleding no array passed
    return arrDefault; // returns "default" value
  } else {
    return arr; // returns original array passed if array not empty
  } // end if/else
} // end collectionCheck function

// Function that accepts an object properties as argument and an array.
// Searches for object in array based on properties given - Search object may have properties in any order
function search(object, array) {
  let target = object;
  let arr = collectionCheck(array);

  if (target === undefined || target === "") {
    // Checks if nothing was passed as object in search
    console.warn("No search parameters given - Displaying all"); // message acknowleding no search parameters
    return arr; // return full collection
  }

  let hasArt = target.hasOwnProperty("artist"); // Checks if passed object has property artist
  let hasTitle = target.hasOwnProperty("title"); // Checks if passed object has property title
  let hasYear = target.hasOwnProperty("year"); // Checks if passed object has property year
  let hasTrack = target.hasOwnProperty("tracks"); // Check if passed object has property tracks
  //console.log(`hasTitle is ${hasTitle} and hasArt is ${hasArt} and hasYear is ${hasYear}`); // Test log to track property checks worked correctly
  
  //This series OF IF/ELSE determines which properties the search input has and passes to the correct function for searching
  if (hasArt === false && hasTitle === false && hasYear === false && hasTrack === false) {
    // if empty object passed
    searchResults(arr, 'ALL');
    console.warn("No search parameters given - Displaying all"); // log message that collection was selected
    return arr; // return full collection
  } else if (hasArt && hasTitle === false && hasYear === false && hasTrack === false) {
    // if artist used to search
    searchResults(findByArtist(target.artist, arr), `${target.artist}`);
    console.log(`%cSearch Parameters: ${target.artist.toUpperCase()}`, 'color: #0096ff'); // Log search parameters used
    return findByArtist(target.artist, arr); // Return results of function findByArtist
  } else if (hasArt === false && hasTitle && hasYear === false && hasTrack === false) {
    // if title used to search
    searchResults(findByTitle(target.title, arr), `${target.title}`);
    console.log(`%cSearch Parameters: ${target.title.toUpperCase()}`, 'color: #0096ff'); // Log search parameters used
    return findByTitle(target.title, arr); // Return results of findByTitle function
  } else if (hasArt === false && hasTitle === false && hasYear && hasTrack === false) {
    // if year used to search
    searchResults(findByYear(target.year, arr), `${target.year}`);
    console.log(`%cSearch Parameters: ${target.year}`, 'color: #0096ff'); // Log search parameters used
    return findByYear(Number(target.year), arr); // Return results of findByYear function
  } else if (hasArt && hasTitle && hasYear === false && hasTrack === false) {
    // if artist and title used to search
    console.log(`%cSearch Parameters: ${target.artist.toUpperCase()} and ${target.title.toUpperCase()}`, 'color: #0096ff'); // Log search parameters
    return findByAandT(target.artist, target.title, arr); // return results of findByAandT
  } else if (hasArt && hasTitle === false && hasYear && hasTrack === false) {
    // if artist and year used to search
    console.log(`%cSearch Parameters: ${target.artist.toUpperCase()} and ${target.year}`, 'color: #0096ff'); // log search parameters
    return findByAandY(target.artist, Number(target.year), arr); // returns results of findByAandY
  } else if (hasArt === false && hasTitle && hasYear && hasTrack === false) {
    // if title and year used to search
    console.log(`%cSearch Parameters: ${target.title.toUpperCase()} and ${target.year}`, 'color: #0096ff'); // Log search parameters used
    return findByTandY(target.title, Number(target.year), arr); // return results of function findByTandY
  } else if (hasArt && hasTitle && hasYear && hasTrack === false) {
    // if artist, title and year used to search
    console.log(`%cSearch Parameters: ${target.artist.toUpperCase()}, ${target.title.toUpperCase()} and ${target.year}`, 'color: #0096ff'); // Log search parameters used
    return findByATY(target.artist, target.title, Number(target.year), arr); // Return results of findByATY function
  } else if (hasTrack && hasArt === false && hasTitle === false && hasYear === false) {
    console.log(`%cSearch Parameters: ${target.tracks.toUpperCase()}`, 'color: #0096ff');
    return findByTrack(target.tracks, arr); // return results of findByTrack function
  } else if (hasTrack && hasArt && hasTitle === false && hasYear === false) { // if track and artist were used to search
    console.log(`%cSearch Parameters: ${target.tracks.toUpperCase()} by ${target.artist.toUpperCase()}`, 'color: #0096ff');
    return findByTrackAndArt(target.tracks, target.artist, arr); // return findByTrackAnd Art function
  }  else if (hasTrack && hasArt === false && hasTitle && hasYear === false) { // if track and title were used to search
    console.log(`%cSearch Parameters: ${target.tracks.toUpperCase()} on ${target.title.toUpperCase()}`, 'color: #0096ff');
    return findByTrackAndTitle(target.tracks, target.title, arr); // return results of findByTrackAndTitle function
  }   else if (hasTrack && hasArt === false && hasTitle === false && hasYear) { // if track and year used to search
    console.log(`%cSearch Parameters: ${target.tracks.toUpperCase()} from ${target.year}`, 'color: #0096ff');
    return findByTrackAndYear(target.tracks, Number(target.year), arr); // return findByTrackAndYear function results
  }   else if (hasTrack && hasArt && hasTitle && hasYear === false) { // if track, artist and title used to search
    console.log(`%cSearch Parameters: ${target.tracks.toUpperCase()} by ${target.artist.toUpperCase()} on ${target.title.toUpperCase()}`, 'color: #0096ff');
    return findByTrackArtTitle(target.tracks, target.artist, target.title, arr); // return findByTrackAndYear function results
  }   else if (hasTrack && hasArt === false && hasTitle && hasYear) { // if track, artist and title used to search
    console.log(`%cSearch Parameters: ${target.tracks.toUpperCase()} on ${target.title.toUpperCase()} from ${target.year}`, 'color: #0096ff');
    return findByTrackTitleYear(target.tracks, target.title, Number(target.year), arr); // return findByTrackAndYear function results
  }   else if (hasTrack && hasArt && hasTitle === false && hasYear) { // if track, artist and title used to search
    console.log(`%cSearch Parameters: ${target.tracks.toUpperCase()} by ${target.artist.toUpperCase()} from ${target.year}`, 'color: #0096ff');
    return findByTrackArtistYear(target.tracks, target.artist, Number(target.year), arr); // return findByTrackAndYear function results
  }   else if (hasTrack && hasArt && hasTitle && hasYear) { // if track, artist and title used to search
    console.log(`%cSearch Parameters: ${target.tracks.toUpperCase()} by ${target.artist.toUpperCase()} on ${target.title.toUpperCase()} from ${target.year}`, 'color: #0096ff');
    return findByTrackArtistTitleYear(target.tracks, target.artist, target.title, Number(target.year), arr); // return findByTrackAndYear function results
  }
} // end search Function

function searchTest() {
// Search Function test logs
// Output displays search PARAMETERS in BLUE, tests that SHOULD have results in GREEN, and tests that should NOT in RED
console.log('');
console.log('%c******** START SEARCH FUNCTION TEST DATA ********', 'background: #dfff00; color: #0096ff');
console.log("%cSearch Results: ", 'color: #ff0000', search({ artist: "Ray Charles", year: 1957 }));
console.log("%cSearch Results: ", 'color: #66ff00', search({ artist: "Billy Joel", title: "52nd Street", year: 1978 }, collection));
console.log("%cSearch Results: ", 'color: #66ff00', search({ artist: "GarTh BrOOks", title: "Ropin' The Wind" }, collection));
console.log("%cSearch Results: ", 'color: #66ff00', search({ artist: "HOllYWOOD UNDEAD", year: 2008 }, collection));
console.log("%cSearch Results: ", 'color: #66ff00', search({title: "glass hOUses", year: '1980'}));
console.log("%cSearch Results: ", 'color: #66ff00', search({artist: "Billy Joel"}, collection));
console.log("%cSearch Results: ", 'color: #66ff00', search({title: "52nD StREet"}, collection));
console.log("%cSearch Results: ", 'color: #66ff00', search({year: 2003}, collection));
console.log("%cSearch Results: ", 'color: #ff7518', search({}, collection));
console.log("%cSearch Results: ", 'color: #ff7518', search({}));
console.log("%cSearch Results: ", 'color: #ff7518', search());
console.log("%cSearch Results: ", 'color: #ff7518', search("", ""));
console.log("%cSearch Resutls: ", 'color: #66ff00', search({title: "sing the sorrow"}, collection));
console.log("%cSearch Results: ", 'color: #66ff00', search({artist: "billy joel"}, collection));
console.log("%cSearch Results: ", 'color: #66ff00', search({artist: "THE USED", title: "IN LOVE AND DEATH"}, collection));
console.log("%cSearch Results: ", 'color: #66ff00', search({artist: "the uSEd", title: "in love and death", year: 2003},collection));
console.log('%cSearch Results: ', 'color: #66ff00', search({tracks: 'LisTENing'}));
console.log('%cSearch Results: ', 'color: #66ff00', search({tracks: 'ListEning', artist: 'The USEd'}, collection));
console.log('%cSearch Results: ', 'color: #ff0000', search({tracks: 'Listening', artist: 'AFI'}, collection));
console.log('%cSearch Results: ', 'color: #66ff00', search({tracks: 'RoDEo', title: "Ropin' The Wind"}, collection));
console.log('%cSearch Results: ', 'color: #ff0000', search({tracks: 'Rodeo', title: "Glass Houses"}, collection));
console.log('%cSearch Results: ', 'color: #66ff00', search({tracks: 'rODeo', year: '1991'}, collection));
console.log('%cSearch Results: ', 'color: #ff0000', search({tracks: 'Rodeo', year: 2000}, collection));
console.log('%cSearch Results: ', 'color: #66ff00', search({tracks: 'TAKe It Away', artist: 'The UsEd', title: 'In Love AND Death'}, collection));
console.log('%cSearch Results: ', 'color: #ff0000', search({tracks: 'Take It Away', artist: 'Garth Brooks', title: 'In Love and Death'}, collection));
console.log('%cSearch Results: ', 'color: #66ff00', search({tracks: 'UnDEad', title: 'Swan SoNgs', year: 2008}, collection));
console.log('%cSearch Results: ', 'color: #ff0000', search({tracks: 'Big Shot', title: 'Swan Songs', year: 2008}, collection));
console.log('%cSearch Results: ', 'color: #66ff00', search({tracks: 'UndeAd', artist: 'HollyWOOd Undead', year: '2008'}, collection));
console.log('%cSearch Results: ', 'color: #ff0000', search({tracks: 'Unfed', artist: 'Hollywood Undead', year: '2008'}, collection));
console.log('%cSearch Results: ', 'color: #66ff00', search({artist: 'Hollywood Undead', tracks: 'Undead', year: '2008'}, collection));
console.log('%cSearch Results: ', 'color: #66ff00', search({artist: 'Garth BRooks', tracks: 'In LonESOme Dove', title: "Ropin' The Wind", year: '1991'}, collection));
console.log('%cSearch Results: ', 'color: #ff0000', search({artist: 'The Used', tracks: 'In Lonesome Dove', title: "Ropin' The Wind", year: '2005'}, collection));
console.log('%c****** END SEARCH FUNCTION TEST DATA ******', 'background: #0096ff; color: #dfff000');
}

// This function accepts track names and times as an array of object, an artist, album title, year published and collection.
// It will then search the collection for matching artist, title and year then add the tracks
// If no match a message is displayed - If the track exists, it is not duplicated and message displayed
function addTrack(trackArr, artist, title, year, array) {
  let addTrack = trackArr; // variable for array of objects argument
  let addArtist = artist; // variable for artist argument
  let addTitle = title; // variable for title argument
  let addYear = Number(year); // variable for year argument
  let arr = collectionCheck(array); // sets a default collection if no collection passed
  let addTo = []; // empty array to store tracks for first time adding
  let songExist = false; // toggle if track matched existing track
  let whereAdd; // variable for matching object
  let songsAdded = []; // empty array for songs that get added to an album
  let rejectSong; // variable for songs that already exist
  let firstAdd = false; // toggle for first time a track is added to album
  for (let tryAdd of addTrack) { // for loop to go through multiple songs being added
    let songAdd = tryAdd.trackName; // variable for trackName property of tracks array of objects
    for (let target of arr) { // for loop to go through each album
      if (target.hasOwnProperty("tracks")) { // check if album has tracks
        let trackArr = Object.values(target.tracks); // variable for array of objects to go through all track on album
        for (let song of trackArr) { // for loop to go through each song on album
          if (
            song.trackName === songAdd && // check is all artist, title, year and track name exists
            target.artist === addArtist &&
            target.title === addTitle &&
            target.year === addYear
          ) {
            songExist = true; // toggle songExists
            rejectSong = songAdd; // variable for song that was rejected
          }
        }
      } else if ( // checks if matching artist, title and year but doesn't have existing tracks
        target.hasOwnProperty("tracks") === false &&
        target.artist === addArtist &&
        target.title === addTitle &&
        target.year === addYear
      ) {
        whereAdd = findByATY(addArtist, addTitle, addYear, arr); // check if artist, title and year matches
        addTo.push(tryAdd); // add track to addTo array
        whereAdd[0].tracks = addTo; // sets tracks property to array of objects
        firstAdd = true; // set toggle
      }
    }
    if (songExist) { // message if track was found in collection already
      console.warn(
        `${rejectSong} already exists! It was not added to collection.`
      );
    } else if (firstAdd) { // add song if artist, title and year match but album didn't have track property
        songsAdded.push(tryAdd);
        firstAdd = false; // resest toggle
    } else {
      for (let i = 0; i < arr.length; i++) { // for loop to check collection for matches for song that wasn't duplicate or first track for album
        if (
          arr[i].artist === addArtist && // Check that artist, title and year match before adding track
          arr[i].title === addTitle &&
          arr[i].year === addYear
        ) {
          arr[i].tracks.push(tryAdd);
          songsAdded.push(tryAdd); // add songs that was added to an array
        }
      }
      if (songsAdded.indexOf(tryAdd) < 0) { // Check if song wasn't added, display message
        console.warn(`${tryAdd.trackName} by ${artist} on album: ${title} from ${year} did not match any records! It was not added to collection.`);
      }
    }
    songExist = false; // resest toggle
  }
  return songsAdded; // returns which songs were added successfully
} // end addTrack function

function addMoreCollect() {
// Test logs for addTrack function
console.log('');
console.log('%c******** START ADD TRACK TO ALBUM FUNCTION TEST DATA ********', 'background: #dfff00; color: #0096ff');
console.log(
  "%cAdding tracks to AFI - Sing The Sorrow", 'color: #66ff00',
  addTrack(
    [
      { trackName: "Bleed Black", time: "4:18" },
      { trackName: "Girls Not Grey", time: "3:48" },
    ],
    "AFI",
    "Sing The Sorrow",
    '2003',
    collection
  )
);
console.log(
    "%cAdding tracks to AFI - Sing The Sorrow", 'color: #66ff00',
    addTrack(
      [
        { trackName: "The Leaving Song Part 2", time: "4:18" },
        { trackName: "Silver and Cold", time: "3:48" },
      ],
      "AFI",
      "Sing The Sorrow",
      2003,
      collection
    )
  );
console.log(
  "%cTrying to add tracks with bad info ", 'color: #ff0000',
  addTrack(
    [
      { trackName: "Big Shot", time: "4:18" },
      { trackName: "fakeSong", time: "3:48" },
    ],
    "Billy Joel",
    "52nd Street",
    2003,
    collection
  )
);
console.log("%cShowing tracks in AFI - Sing The Sorrow (should be 4)", 'color: #66ff00', collection[4].tracks);
console.log(
  "%cChecking if tracks were added to Billy Joel - 52nd Street (Should only have 2)", 'color: #66ff00',
  collection[0].tracks
);
console.log(
  "%cTrying to add duplicate tracks to Billy Joel - 52nd Street", 'color: #ff0000',
  addTrack(
    [
      { trackName: "Big Shot", time: "4:03" },
      { trackName: "My Life", time: "4:44" },
    ],
    "Billy Joel",
    "52nd Street",
    1978,
    collection
  )
);
console.log("%cTracks for Billy Joel - 52nd Street", 'color: #66ff00', collection[0].tracks);
console.log('%cCalling findByTrack function for Bleed Black(SHOULD EXIST NOW)', 'color: #66ff00', findByTrack('Bleed Black'));
showCollection(collection);
console.log('%c****** END ADD TRACK TO ALBUM FUNCTION TEST DATA ******', 'background: #0096ff; color: #dfff000');
document.getElementById('addMoreBtn').style.display = 'none';
document.getElementById('showBtn').style.display = 'none';
addMore = true;
resetCollection();
//console.log(findByArtist("Billy Joel"));
//console.log(findByTitle("52nd Street"));
} // end addMoreData function

// Sort a collection by year function
function sortYear(array) { // sorts without changing original collection
let sortYr = [...array].sort((a, b) => {
    return a.year - b.year;
});
return sortYr; // return sorted collection
}
// Sort a collection by artist function
function sortArtist (array) {
let sortArt = [...array].sort((a, b) => { // sorts without changing original collection
    let firstA = a.artist.toLowerCase(); // convert artist value to lowercase
    let firstB = b.artist.toLowerCase(); // convert artist value to lowercase
    if (firstA < firstB) { // compares letter for sorting
        return -1;
    } else if (firstA > firstB) {
        return 1;
    } else {
    return 0;
    }
});
return sortArt; // return sorted collection
} // end sortArtist function

// Sort a collection by title function
function sortTitle (array) {
let sortTitleCollection = [...array].sort((a, b) => { // sorts without changing original collection
    let firstA = a.title.toLowerCase(); // convert title value to lowercase
    let firstB = b.title.toLowerCase(); // convert title value to lowercase
    if (firstA < firstB) { // compares letter for sorting
        return -1;
    } else if (firstA > firstB) {
        return 1;
    } else {
        return 0;
    }
});
return sortTitleCollection; // return sorted collection
} // end sortTitle function

//Logs to test sort functions
console.log('');
console.log('%c******** START SORT FUNCTION TEST DATA ********', 'background: #dfff00; color: #0096ff');
console.log('%cLogging the sorted collection by YEAR', 'color: #66ff00', sortYear(collection));
console.log('%cLogging the sorted collection by ARTIST', 'color: #66ff00', sortArtist(collection));
console.log('%cLogging the sorted collection by TITLE', 'color: #66ff00', sortTitle(collection));
console.log('%cShowing collection itself is still unsorted', 'color: #66ff00', collection);
console.log('%c****** END SORT FUNCTION TEST DATA ******', 'background: #0096ff; color: #dfff000');

// Function that removes a track from a matching album
function removeTrack(track, artist, title, year, array) {
    let findTrack = track.toLowerCase();
    let findArtist = artist.toLowerCase();
    let findTitle = title.toLowerCase();
    let addYear = Number(year);
    let arr = collectionCheck(array); // variable for the array argument
    let results = [];
    for (let target of arr) {
        if (target.hasOwnProperty('tracks')) {
            let trackArr = (Object.values(target.tracks)); // variable equal to the properties of tracks for current element in the collection used as an array of objects
            for (let i = 0; i < trackArr.length; i++) { // for loop to walk through tracks array
                if (trackArr[i].trackName.toLowerCase() === findTrack && target.artist.toLowerCase() === findArtist && target.title.toLowerCase() === findTitle && target.year === addYear) { // check if trackName for current element of track array is equal to request track, artist, title and year matches
                    results = trackArr.splice(i, 1); // sets returns equal to the song removed
                    target.tracks = trackArr; // sets track array to new array with track removed
                } // end if
            } // end for loop
        } // end if
    } // end for loop
    if (results.length < 1) {
        return 'NO MATCHES! NO TRACKS REMOVED.';
    } else {
    return results; // returns the track that was removed
    } // end if/else
  } // end removeTrack Function

  // Test logs for removeTrack function
  console.log('');
  console.log('%c******** START REMOVE TRACK FUNCTION TEST DATA ********', 'background: #dfff00; color: #0096ff');
  console.log('%cRemoving Bleed Black by AFI on Sing The Sorrow from 2003 ', 'color: #66ff00', removeTrack('Bleed Black', 'AFI', 'Sing The Sorrow', 2003, collection));
  showCollection(collection);
  console.log('%cRemoving Bleed Green by AFI on Sing The Sorrow from 2003 ', 'color: #ff0000', removeTrack('Bleed Green', 'AFI', 'Sing The Sorrow', 2003, collection));
  showCollection(collection);
  console.log('%c****** END REMOVE TRACK FROM ALBUM FUNCTION TEST DATA ******', 'background: #0096ff; color: #dfff000');

  // Function to remove albums
function removeTitle(artist, title, year, array) {
    let findArtist = artist.toLowerCase(); // variable for artist argument
    let findTitle = title.toLowerCase(); // variable for title argument
    let findYear = Number(year); // variable for year argument
    let arr = collectionCheck(array); // variable for the array argument
    let results = []; // empty array for search results
    let c = 0;
    let removedTitle = [];
    for (let target of arr) {
      // for loop that searchs through given array of objects
      if ((target.artist.toLowerCase() === findArtist && target.title.toLowerCase() === findTitle && target.year === findYear)) {
        // match if artist, title and year property matches artist given
        removedTitle = arr.splice(c, 1);
      } // end if
      c++;
    } // end for loop
    if (removedTitle.length > 0) {
        return `${removedTitle[0].title} from ${removedTitle[0].year} by ${removedTitle[0].artist} was successfully removed from the collection!`; // returns the new array of results or an empty array
    } else {
        return 'NO MATCHES FOUND! NO ALBUM REMOVED.';
    }
  } // end removeTitle Function

  // Remove album test data
  console.log('');
  console.log('%c******** START REMOVE ALBUM FUNCTION TEST DATA ********', 'background: #dfff00; color: #0096ff');
  console.log('%cRemoving album Swan Songs (should be removed)', 'color: #ff6600', removeTitle('Hollywood Undead', 'Swan Songs', 2008));
  showCollection(collection);
  console.log('%cTesting remove album function ', 'color: #ff0000', removeTitle('Bollywood Undead', 'Swan Songs', 2008));
  showCollection(collection);
  console.log('%c****** END REMOVE ALBUM FROM ALBUM FUNCTION TEST DATA ******', 'background: #0096ff; color: #dfff000');

// Function to remove all albums by Artist
function removeArtist(artist, array) {
    let findArtist = artist.toLowerCase(); // variable for artist argument
    let arr = collectionCheck(array); // variable for the array argument
    let results = []; // empty array for search results
    let removedTitle = [];
    let didRemove = false;
    for (let i = 0; i < arr.length; i++) {
      // for loop that searchs through given array of objects
      if ((arr[i].artist.toLowerCase() === findArtist)) {
        // check if artist property matches artist given
        removedTitle = arr.splice(i, 1);
        results.push(removedTitle);
        didRemove = true;
      } // end if
      if (didRemove) {
        i = -1;
        didRemove = false;
      }
    } // end for loop
    if (results.length > 0) {
        return `${artist.toUpperCase()} was successfully removed from the collection!`; // returns the new array of results or an empty array
    } else {
        return 'NO MATCHES FOUND! NO ARTIST REMOVED.';
    }
  } // end removeArtist Function

  // Test logs for removeArtist function
  console.log('');
  console.log('%c******** START REMOVE ARTIST FUNCTION TEST DATA ********', 'background: #dfff00; color: #0096ff');
  console.log('%cRemoving artist AFI (should be removed)', 'color: #ff6600', removeArtist('AFI'));
  showCollection(collection);
  console.log('%cTrying to remove artist that does not exist ', 'color: #ff0000', removeArtist('JFI'));
  showCollection(collection);
  console.log('%cRemoving artist Billy Joel (should remove 2 listings)', 'color: #ff6600', removeArtist('Billy Joel'));
  showCollection(collection);
  console.log('%c****** END REMOVE ARTIST FUNCTION TEST DATA ******', 'background: #0096ff; color: #dfff000');


  //This function will write collection to index page
  function loadCollection(array) {
    let arr = collectionCheck(array); // variable for the argument
    let c = 0;
    let div = document.querySelector('#collectDiv');
    showToggle = false
    //debugger;
    if (showToggle === false) {
    const head = document.createElement("h2");
    head.className = 'showList';
    head.innerText = `The total in this collection is ${arr.length}`;
    div.appendChild(head);
    for (let record of arr) {
      // for loop to go through given array
      const albTitles = document.createElement("h3");
      albTitles.className = 'showList';
      albTitles.innerText = `${record.title.toUpperCase()} by ${record.artist.toUpperCase()} from ${record.year}`;
      div.appendChild(albTitles);
      if (record.hasOwnProperty("tracks")) {
          if (!(record.tracks === undefined)) {
              while (c < record.tracks.length) {
                  const song = document.createElement("p");
                  song.className = 'showList';
                  song.innerText = `${c + 1}. ${record.tracks[c].trackName.toUpperCase()} - ${record.tracks[c].time}`;
                  div.appendChild(song);
                  c++;
              }
          }
      c = 0;
    }
  }
}
  showToggle = true;
  document.getElementById('resetBtn').style.display = 'block';
  document.getElementById('showBtn').style.display = 'none';
  document.getElementById('hideBtn').style.display = 'block';
  document.getElementById('addMoreBtn').style.display = 'block';
  if (addMore) {
    document.getElementById('addMoreBtn').style.display = 'none';
  }
}

// This function reloads the collection being displayed
function resetCollection() {
    let hideList = document.getElementsByClassName('showList');
    for (record of hideList) {
        record.style.display = 'none';
    }
    showToggle = false;
    loadCollection();
}

// This function hides the collection being displayed on index
function hideCollection() {
    let div = document.getElementById('collectDiv');
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
    document.getElementById('showBtn').style.display = 'block';
    document.getElementById('hideBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';
    showToggle === false;
}

function searchResults(array, search) {
    let arr = collectionCheck(array); // variable for the argument
    let c = 0;
    let div = document.querySelector('#collectDiv');
    showToggle = false
    hideCollection();
    //debugger;
    if (showToggle === false) {
    const head = document.createElement("h2");
    head.className = 'showList';
    let convString = String(search);
    head.innerText = `Search Parameters: ${convString.toUpperCase()}`;
    div.appendChild(head);
    for (let record of arr) {
      // for loop to go through given array
      const albTitles = document.createElement("h3");
      albTitles.className = 'showList';
      albTitles.innerText = `${record.title.toUpperCase()} by ${record.artist.toUpperCase()} from ${record.year}`;
      div.appendChild(albTitles);
      if (record.hasOwnProperty("tracks")) {
          if (!(record.tracks === undefined)) {
              while (c < record.tracks.length) {
                  const song = document.createElement("p");
                  song.className = 'showList';
                  song.innerText = `${c + 1}. ${record.tracks[c].trackName.toUpperCase()} - ${record.tracks[c].time}`;
                  div.appendChild(song);
                  c++;
              }
          }
      c = 0;
    }
  }
}
  showToggle = true;
  document.getElementById('resetBtn').style.display = 'block';
  document.getElementById('showBtn').style.display = 'none';
  document.getElementById('hideBtn').style.display = 'block';
  document.getElementById('addMoreBtn').style.display = 'block';
  if (addMore) {
    document.getElementById('addMoreBtn').style.display = 'none';
  }
}