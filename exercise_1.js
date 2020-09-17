//Celcius and Fahrenheit Converter
function convertToCelcius (fahrenheit){
    const celcius = (( fahrenheit - 32 ) * 5 / 9).toFixed(1);
    const report = `Current Temperature is ${celcius} degree Celcius`;
    console.log(report);
}

convertToCelcius(30);
convertToCelcius(212);

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



