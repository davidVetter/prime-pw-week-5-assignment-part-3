console.log('***** Music Collection *****')

let collection = [];
let albumNum = 0;

function addToCollection(title, artist, year) {
    let addTitle = title;
    let addArtist = artist;
    let pubYear = year;
    const addObj = {
        title: addTitle,
        artist: addArtist,
        year: pubYear,
    }
    console.log('This is what is being added', addObj);
    console.log('Collection prior to push', collection);
    collection.push(addObj);
    return addObj;
}

console.log('Lets test adding an album!', addToCollection('test1', 'David', 2005));
console.log('Lets test adding an album!', addToCollection('test2', 'Name2', 2010));
console.log(collection);
console.log(collection[1]);
collection[0].title = 'shouldChange'
console.log(collection[0]);
console.log(collection);