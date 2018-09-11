///////////////////////////////////////
// Lecture: Hoisting

//functions
//function calculateAge(year) {
//    console.log(2018 - year);
//}
//
//var retirement = function(year) {
//    console.log(65 - (2018 - year));
//}

//variables
//console.log(age);
//var age = 23;
//console.log(age);

//foo();
//console.log(age);
//
//
//function foo() {
//    //var age = 65;
//    console.log(age);
//}

//foo();
//console.log(age);



///////////////////////////////////////
// Lecture: Scoping
/*

// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




 Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() { 
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}

*/
///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

//var calculateAge = function (year) {
//    console.log(2018 - year);
//    console.log(this);
//}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);
    }
};

var mark = {
    name: 'Mark',
    yearOfBirth: 1985,
    calculateAge: john.calculateAge
};

john.calculateAge();
mark.calculateAge();


