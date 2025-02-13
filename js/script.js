'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let nameMovie, scoreMovie;


for (let i = 0; i < 2; i++) {
    nameMovie = prompt('Один из последних просмотренных фильмов?', '');
    scoreMovie = prompt('На сколько оцените его?', '');

    if (nameMovie !== '' && scoreMovie !== '' && nameMovie.length !== 50 && nameMovie !== null && scoreMovie !== null) {
        personalMovieDB.movies[nameMovie] = scoreMovie;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка')
};

console.log(personalMovieDB);