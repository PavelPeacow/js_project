/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

   while (
      numberOfFilms == "" ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
   ) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
   }
}

start();

let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

function showMyDB() {
   if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
   } else {
      console.log("Профиль приватный");
   }
}

showMyDB();

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      personalMovieDB.genres[i - 1] = genre;
   }
}

writeYourGenres();

function rememberMyFIlms() {
   for (let i = 0; i < 2; i++) {
      let a = prompt("Один из последних просмотренных фильмов?", ""),
         b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log("done");
      } else {
         console.log("error");
         i--;
      }

      personalMovieDB.movies[a] = b;
   }
}

rememberMyFIlms();

function detecPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
   } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
   } else {
      console.log("Ошибка!");
   }
}

detecPersonalLevel();
