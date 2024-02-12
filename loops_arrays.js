for(let i = 1000; i >= 0; i -= 2) {
    console.log(i);
}

for(let i = 0; i <= 10000; i++) {
    if(i === 2500) {
        alert("A quarter of the way there!");
    } else if (i === 5000) {
        alert("Halfway there!");
    } else if (i === 10000) {
        alert("The loop is done!");
    }    
}

let myFavoriteShows = ["Code Geass", "Loki", "Community", "Lupin", "Pokemon"]

for (let x = 0; x < myFavoriteShows.length; x++) {
    console.log("My #" + (x + 1) + " favorite TV show is " + myFavoriteShows[x]);
}