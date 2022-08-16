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

console.log(addToCollection('test1', 'David', 2005));
console.log(addToCollection('test2', 'Name2', 2010));
console.log('Collection after adding ', collection);
console.log('The 2nd albums in my collection is ', collection[1]);
collection[0].title = 'shouldChange' // This for testing, REMOVE FROM FINISHED PRODUCT
console.log('I just changed the title of the 1st album ', collection[0]);
console.log('My collection includes ', collection);
