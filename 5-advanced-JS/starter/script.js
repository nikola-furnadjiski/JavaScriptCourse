///////////////////////////////////////
// Function constructor
/*
var john1 = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Trposki';

var john = new Person('John', 1992, 'minjaoch');
var jane = new Person('Jane', 1969, 'Designer');
var mark = new Person('Mark', 1948, 'Retired');

john.calculateAge();
console.log(john.lastName);

jane.calculateAge();
console.log(jane);

mark.calculateAge();
console.log(jane);
*/

///////////////////////////////////////
//Object.create

/*
var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});
*/

///////////////////////////////////////
//Primitives vs Objects
/*
//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);



//Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1);
console.log(obj2);
*/


//Functions

/*
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj);
*/

///////////////////////////////////////
//Lecture: Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    
    for(var i=0; i<arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return calculateAge(el) >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

///////////////////////////////////////
//Lecture: Functions returning functions
/*


function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');



teacherQuestion('John');
designerQuestion('Mile');

interviewQuestion('teacher')('Pero');
*/

///////////////////////////////////////
//Lecture: IIFE

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();


(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();


//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

*/


///////////////////////////////////////
//Lecture: Closures
/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}


var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
//

function interviewFor(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
*/

///////////////////////////////////////
//Lecture: Closures
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good '+timeOfDay+', Ladies and gentlemen! I\'m '+this.name+', I\'m '+this.job+' and I\'m '+this.age+' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m '+this.name+', I\'m '+this.job+' and I\'m '+this.age+' years old. Have a nice '+timeOfDay+'.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

//john.presentation('formal', 'morning');

//john.presentation.call(emily, 'formal','afternoon');

//john.presentation.apply(emily, ['formal','afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('evening');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('morning');



var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    
    for(var i=0; i<arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan  = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
*/

///////////////////////////////////////
//Coding Challenge

(function() {
    function Question(theQuestion, answers, correctAnswer) {
        this.theQuestion = theQuestion;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    Question.prototype.displayQuestion = function() {
         console.log(this.theQuestion);
        for(var i=0; i<this.answers.length; i++) {
            console.log(i+'. ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(answered, callback) {
        var sc;
        if(answered === this.correctAnswer) {
            console.log('Correct motherfucker!');
            sc = callback(true);
        } else {
            console.log('Sorry but try again :(');
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score) {
        console.log('----------------');
        console.log('Your score now is: '+score);
        console.log('----------------');
    }

    var q1 = new Question('Is javaScript the most popular web programming language?', ['yes','no'], 0);
    var q2 = new Question('Who\'s the boss?', ['Mile','Pero','Johny'], 2);
    var q3 = new Question('What so you consider mn mna?', ['vish me mamo','kooj tova', 'dekaa'], 1);

    var questions = [q1,q2,q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
            }
            return sc;
        }
    }
    
    var keepScore = score();

    generateRandomQuestionAndDisplayIt();
    
    function generateRandomQuestionAndDisplayIt() {
        var questionToBeDisplayed = questions[Math.floor(Math.random()*questions.length)];
    
        questionToBeDisplayed.displayQuestion();

        var answered = prompt('Enter your answer here');
        
        if(answered !== 'exit') {
            questionToBeDisplayed.checkAnswer(parseInt(answered), keepScore);
            generateRandomQuestionAndDisplayIt();
        }
    }
    
})();

















