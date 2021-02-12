let numberOfFilms, film1, reviews1, film2, reviews2;
numberOfFilms = prompt("Сколько фильмов вы посомтрели");
film1 = prompt("последний фильм");
reviews1 = prompt("оценка");
film2 = prompt("последний фильм");
reviews2 = prompt("оценка");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[film1] = reviews1;
personalMovieDB.movies[film2] = reviews2;

console.log(personalMovieDB);