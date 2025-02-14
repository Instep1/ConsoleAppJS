'use strict';

let numberOfFilms, nameMovie, scoreMovie;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        nameMovie = prompt('Один из последних просмотренных фильмов?', '');
        scoreMovie = prompt('На сколько оцените его?', '');
    
        if (nameMovie !== '' && scoreMovie !== '' && nameMovie.length !== 50 && nameMovie !== null && scoreMovie !== null) {
            personalMovieDB.movies[nameMovie] = scoreMovie;
        } else {
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка')
    };
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (hidden === false) console.log(personalMovieDB);
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}: `);
    }
}

writeYourGenres();