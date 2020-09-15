//Celcius and Fahrenheit Converter
function convertToFarenheit (celcius){
    const fahrenheit = ( celcius * 9 ) / 5 + 32;
    console.log(fahrenheit);
}

convertToFarenheit(0);

//task 2
let favoriteMovies = [ "interstellar", "interception" ];

function addFavoriteMovie (movieName){
    if ( !movieName.includes("The")){
        favoriteMovies.push(movieName);
    }
};

addFavoriteMovie("The bad boys");
addFavoriteMovie("Spideman");

function printFavoriteBooks(){
    const msg = `Favorite Movies: ${favoriteMovies.length}`
    console.log(msg);
    favoriteMovies.forEach(movie => {
        console.log(movie);
    })
};

printFavoriteBooks();