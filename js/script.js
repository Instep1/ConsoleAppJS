'use strict';



let nameMovie, scoreMovie;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            nameMovie = prompt('Один из последних просмотренных фильмов?', '').trim();
            scoreMovie = prompt('На сколько оцените его?', '');
        
            if (nameMovie !== '' && scoreMovie !== '' && nameMovie.length !== 50 && nameMovie !== null && scoreMovie !== null) {
                personalMovieDB.movies[nameMovie] = scoreMovie;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка')
        };
    },
    showMyDB: function(hidden) {
        if (hidden === false) console.log(personalMovieDB);
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}: `);
            if (personalMovieDB.genres[i - 1] === null || personalMovieDB.genres[i - 1] === '') {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        })
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat === true ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    }
};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);