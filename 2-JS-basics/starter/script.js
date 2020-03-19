//var firstName = 'John';
//console.log(firstName);
//
//var lastName = 'Smith';
//var age = 28;
//
//var fullAge = true;
//console.log(fullAge);
//
//var job;
//console.log(job);
//
//job = 'Teacher';
//console.log(job);
//
//var _3years = 3;

/*
Variable mutation and type coercion
*/

//var firstName = 'John';
//var age = 28;

// type coercion
//console.log(firstName + ' ' + age);
//
//var job, isMarried;
//
//job = 'Teacher';
//isMarried = true;
//
//console.log(firstName + 'is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
//// variable mutation
//age = 'twenty eight';
//console.log(age);
//
//var lastName = prompt('What is his last Name?');
//console.log(lastName);

/*
Basic operators
*/
//var now, yearJohn, yearMark;
//now = 2018;
//ageJohn = 33;
//ageMark = 28;
//
////math operators
//yearJohn = now - ageJohn;
//yearMark = now - ageMark;
//
//console.log(yearJohn);
//console.log(yearMark);
//console.log(now / 10);
//
////Logical operators
//var john;
//console.log(typeof john);


/**************************
operator precedence
*/
//
//var now = 2018;
//var yearJohn = 1989;
//var fullAge = 18;
//
//var isFullAge = now - yearJohn >= fullAge;
//console.log(isFullAge);

/************************
* coding challenge 1
*/

//var markMass = prompt("Enter Mark's mass");
//var markHeight = prompt("Enter Mark's height");
//
//var johnMass = prompt("Enter John's mass");
//var johnHeight = prompt("Enter John's height");
//
//var marksMBI = markMass / (markHeight * markHeight);
//var johnBMI = johnMass / (johnHeight * johnHeight);
//
//console.log(marksMBI, johnBMI);

//console.log("Is Mark\'s BMI higher than John\'s? " + (marksMBI > johnBMI));


/*
THRUTY AND FALSY VALUES:
falsy values: undefined, null, NaN, 0, ''
thruthy: NOT falsy values
*/

//var height = 25;
//console.log(height === 25);
//
//var john1=89, john2=120, john3=103;
//var mark1=116, mark2=94, mark3=123;
//var marry1=97, marry2=134, marry3=105;
//
//var johnavg = (john1 + john2 + john3) / 3;
//var markavg = (mark1 + mark2 + mark3) / 3;
//var marryavg = (marry1 + marry2 + marry3) / 3;
//
//console.log(johnavg, markavg, marryavg);
//
//if(johnavg > markavg && johnavg > marryavg) {
//    console.log('John\'s team wins with avg of: ' + johnavg);
//} else if (markavg > johnavg && markavg > marryavg) {
//    console.log('Mark\'s team wins with avg of: ' + markavg);
//} else if (marryavg > johnavg && marryavg > markavg) {
//    console.log('Marry\'s team wins with avg of: ' + marryavg);
//} else if (marryavg == johnavg == markavg) {
//    console.log('All avg\'s are the same: ' + marryavg);
//} else if (marryavg == johnavg) {
//    console.log('Marry and John avg\'s are the same: ' + marryavg);
//} else if (marryavg == markavg) {
//    console.log('Marry and Mark avg\'s are the same: ' + marryavg);
//} else if (johnavg == markavg) {
//    console.log('John and Mark avg\'s are the same: ' + markavg);
//}



/* FUNCTIONS */

//function calculateAge(birthYear) {
//    return 2018 - birthYear;
//}
//
//var ageJohn = calculateAge(1990);
//
//function yearsUntilRetirement(birthYear, firstName) {
//    var age = calculateAge(birthYear);
//    
//    var retirement =  62 - age;
//    
//    if(retirement > 0) {
//    console.log(firstName + ' retires in ' + retirement + ' years.');
//    } else {
//        console.log(firstName + ' is already retired.');
//    }
//}
//
//yearsUntilRetirement(1967, 'John');
//yearsUntilRetirement(1994, 'Mike');
//yearsUntilRetirement(1948, 'Jane');


//Function declaration
//function whatDoYouDo(job, firstName) {
//    switch(job) {
//        case 'teacher':
//            return firstName + ' teaches kids how to code.';
//        case 'driver':
//            return firstName + ' drives a cab in Lisbon.';
//        case 'designer':
//            return firstName + ' designs beautiful websites.';
//        default:
//            return firstName + ' does smth else.';
//            
//    }
//}

// Function expresssion
//var whatDoYouDo = function(job, firstName) {
//    switch(job) {
//        case 'teacher':
//            return firstName + ' teaches kids how to code.';
//        case 'driver':
//            return firstName + ' drives a cab in Lisbon.';
//        case 'designer':
//            return firstName + ' designs beautiful websites.';
//        default:
//            return firstName + ' does smth else.';
//            
//    }
//}

//console.log(whatDoYouDo('teacher', 'John'));
//console.log(whatDoYouDo('retires', 'Pero'));
//console.log(whatDoYouDo('designer', 'Mark'));
//
//
//var john=['da', 23, false];
//console.log(john);

//var calculateTip = function(amount) {
//    return amount < 50 ? amount*0.2 : amount <=200 ? amount*0.15 : amount*0.1;
//}
//
//var tipsOnly = [calculateTip(124), calculateTip(48), calculateTip(268)];
//console.log(tipsOnly);

/* OBJECTS AND PROPERTIES */

//var John = {
//    fullName: 'John Mock',
//    mass: 75,
//    height: 1.80,
//    calculateBMI: function () {
//        this.BMI = this.mass / (this.height * this.height);
//        console.log('Mark BMI: ' + this.BMI);
//    }
//};
//
//var Mark = {
//    fullName: 'Mark Spencer',
//    mass: 92,
//    height: 1.85,
//    calculateBMI: function () {
//      this.BMI = this.mass / (this.height * this.height);
//      console.log('Mark BMI: ' + this.BMI);
//    }
//};
//
//John.calculateBMI();
//Mark.calculateBMI();
//
//console.log(John, Mark);

/* LOOPS AND ITERATION */


