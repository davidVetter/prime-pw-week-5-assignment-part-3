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

console.log(addToCollection('Glass Houses', 'Billy Joel', 1980));
console.log(addToCollection('52nd Street', 'Billy Joel', 1978));
console.log(addToCollection("Ropin' The Wind", 'Garth Brooks', 1991));
console.log(addToCollection('Maybe Memories', 'The Used', 2003));
console.log(addToCollection('Sing The Sorrow', 'AFI', 2003));
console.log(addToCollection('Swan Songs', 'Hollywood Undead', 2008));
console.log('Collection after adding ', collection);
console.log('The 3rd albums in my collection is ', collection[2]);
