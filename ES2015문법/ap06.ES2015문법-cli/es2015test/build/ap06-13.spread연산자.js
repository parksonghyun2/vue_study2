"use strict";

var _console;
/*

    스프레드 사용법을 학습한다.

    ES 5에서는
    arguments 매개변수는 유사 배열 객체다.
        length 프로퍼티가 있다.
        Array  메서드를 사용할 수 없다.
        arrow function에서는 arguments는 사용할 수 없다.

    ES2015 에서는
    rest 매개변수는 배열이다.
        rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
        함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.

    Spread 연산자는 ... 이다.
        이터러블(iterable) 객체를 "개별" 요소로 분리
        이터러블(iterable) 객체에는 Array, String, Map, Set 등이 있다.
        iterator를 생성해서 next()로 순회할 수 있는 자료구조가 이터러블

*/
var cities = ['서울', '부산', '제주'];

//배열요소를 변수로 만드시오 x,y,z,
var x = cities[0]; // 서울
var y = cities[1]; // 부산
var z = cities[2]; // 제주

console.log(cities[0], cities[1], cities[2]);
console.log(x, y, z);
(_console = console).log.apply(_console, cities);
console.log(cities);
var east = ['U', 'K', 'T'];
var west = ['N', 'C', 'G'];
console.log('concat:' + east.concat(west));
var countries = [].concat(east, west);
console.log('contries : ' + countries);