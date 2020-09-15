let favoriteMovies = [ "interstellar", "interception" ];

function addFavoriteMovie (movieName){
    if ( !movieName.includes("The")){
        favoriteMovies.push(movieName);
    }
};

addFavoriteMovie("The bad boys");

function printFavoriteBooks(){
    const msg = `Favorite Movies: ${favoriteMovies.length}`
    console.log(msg);
    favoriteMovies.forEach(movie => {
        console.log(movie);
    })
};

printFavoriteBooks();