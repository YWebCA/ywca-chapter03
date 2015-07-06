// Chapter 3

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^    Defining a Function    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/******************************    DEFINING 1    ******************************/
// Use a function expression to define a function named `three`.
// That function should return the value 3.

Exer.defining1 = function () {

}

/******************************    DEFINING 2    ******************************/
// Use a function expression to define a function named `myLog`.
// `myLog` should accept one parameter named `message`.
// `myLog` should output `message` to the console with the appropriate
//     formatting.

Exer.defining2 = function () {
  
}

/******************************    DEFINING 3    ******************************/
// Use a function expression to define a function named `square`.
// `square` should accept one parameter named `number`.
// The function should square the number and both log and return the result.

Exer.defining3 = function () {
  
}
/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^    Parameters and Scopes    ^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/*****************************    Parameters 1    *****************************/
// Inside `Exer.parameters1` create a function named `spaceCubeDetector` that
//     accepts a length, width, and a height.
// When its length, width, and height are all equal, `spaceCubeDetector` should
//     return the correct string, otherwise the other string.
// `parameters1` should return `spaceCubeDetector`

Exer.parameters1 = function() {



 };  // end Exer.parameters1

/*****************************    Parameters 2    *****************************/
// Given spaceCubeDetector:
// Run it once with a length of 3, width of 5, and height of 3.14159265359
//     and log its return value.
// Run it once with a length of 7, width of 7, and height of 7 and log its
//     return value.
// Run it once with a length of 1, width of 2, and height of 3 and log its
//    return value.
//================================================//
Exer.parameters2 = function(spaceCubeDetector) {  //
//================================================//



};  // wrapper end

//===============================    SCOPE    ================================//
//  For Scope exercises 1-5, read through the following code and find the     //
//  values for the variables where noted by the comments. Write your asnwers  //
//  as return values for the functions Exer.scope[1-5].                       //
//============================================================================//

Exer.scopeExample = function() {

  var foo = 2;
  var bar = 7;
  var quux = 11;

  var skip = function() {
    var foo = 5;
    console.log(foo); // Scope 1: What value of foo is logged?
    quux = foo *  bar;
    console.log(quux); // Scope 2: What value of quux is logged?
    return bar;
  };

  var scoop = function(quux) {
    console.log(quux); // Scope 4: What value of quux is logged?
  };

  var scrap = function() {
    console.log(quux); // Scope 5: What value of quux is logged?
  };

  foo = skip();
  scoop(foo); // Scope 3: What value of foo is passed to the function Scoop?
  scrap();

};

/********************************    SCOPE    *********************************/
//  Write your answers in this section

Exer.scope1 = function() {
  return /* return value for Scope 1 */ ;
};

Exer.scope2 = function() {
  return /* return value for Scope 2 */ ;
};

Exer.scope3 = function() {
  return /* return value for Scope 3 */ ;
};

Exer.scope4 = function() {
  return /* return value for Scope 4 */ ;
};

Exer.scope5 = function() {
  return /* return value for Scope 5 */ ;
};

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    Nested Scope    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

//============================================================================//
//  For Nested Scope exercises 1-20, read through the following code and      //
//  find the values for the variables where noted by the comments. Write      //
//  your answers as the return values for functions Exer.nest[1-20].          //
//============================================================================//

Exer.nestExample = function() {

  var foo = 2;
  var bar = 5;
  var quux = 7;

  var nest = function(foo) {

    var bar = 11;

    var finch = function(foo) {
      console.log(foo); // Nest 8: What value of foo is logged?
      bar = foo;
      quux = foo;
    };

    console.log(bar); // Nest 4: What value of bar is logged?
    console.log(quux); // Nest 5: What value of quux is logged?

    var robin = function() {
      var bar = 13;
      quux = bar;
      console.log(quux); // Nest 11: What value of quux is logged?
    };

    console.log(bar); // Nest 6: What value of bar is logged?
    console.log(quux); // Nest 7: What value of quux is logged?

    var batman = function() {
      foo = 0;
      bar = 0;
      quux = 0;
      return "I AM THE NIGHT!!";
    };

    finch(17);

    console.log(bar); // Nest 9: What value of bar is logged?
    console.log(quux); // Nest 10: What value of quux is logged?

    robin();

    console.log(quux); // Nest 12: What value of quux is logged?

    if (batman()) {
      console.log(foo); // Nest 13: What value of foo is logged?
      console.log(bar); // Nest 14: What value of bar is logged?
      console.log(quux); // Nest 15: What value of quux is logged?
    }
  };

  console.log(foo); // Nest 1: What value of foo is logged?
  console.log(bar); // Nest 2: What value of bar is logged?
  console.log(quux); // Nest 3: What value of quux is logged?

  nest(5318008);

  console.log(foo); // Nest 16: What value of foo is logged?
  console.log(bar); // Nest 17: What value of bar is logged?
  console.log(quux); // Nest 18: What value of quux is logged?

};

/*****************************    Nested Scope    *****************************/
//  Write your answers in this section.

Exer.nest1 = function() {
  return /* answer for Nest 1 */ ;
};
Exer.nest2 = function() {
  return /* answer for Nest 2 */ ;
};
Exer.nest3 = function() {
  return /* answer for Nest 3 */ ;
};
Exer.nest4 = function() {
  return /* answer for Nest 4 */ ;
};
Exer.nest5 = function() {
  return /* answer for Nest 5 */ ;
};
Exer.nest6 = function() {
  return /* answer for Nest 6 */ ;
};
Exer.nest7 = function() {
  return /* answer for Nest 7 */ ;
};
Exer.nest8 = function() {
  return /* answer for Nest 8 */ ;
};
Exer.nest9 = function() {
  return /* answer for Nest 9 */ ;
};
Exer.nest10 = function() {
  return /* answer for Nest 10 */ ;
};
Exer.nest11 = function() {
  return /* answer for Nest 11 */ ;
};
Exer.nest12 = function() {
  return /* answer for Nest 12 */ ;
};
Exer.nest13 = function() {
  return /* answer for Nest 13 */ ;
};
Exer.nest14 = function() {
  return /* answer for Nest 14 */ ;
};
Exer.nest15 = function() {
  return /* answer for Nest 15 */ ;
};
Exer.nest16 = function() {
  return /* answer for Nest 16 */ ;
};
Exer.nest17 = function() {
  return /* answer for Nest 17 */ ;
};
Exer.nest18 = function() {
  return /* answer for Nest 18 */ ;
};

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^    Functions as Values    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/****************************    Values 1    *****************************/
// Your project manager heard about your function SpaceCubeDetector.
// Understanding that it takes a length, a width, and a height, he has
// decided that it would make a good function to find the volume of a
// rectangular prism. You try to correct him, but the boss is the boss.
// Given variables volume and spaceCubeDetector, assign the spaceCubeDetector
// function value to the volume variable. Call volume after the assignment
// to assure it was assigned. Then, return the volume variable.
// Your project manager can figure out his mistake later.
//=================================//
Exer.values1 = function ( volume, spaceCubeDetector ) {



};

/****************************    Values 2    *****************************/
// Your project manager just came back. He doesn't think the volume of a
// 7 by 3 by 2 space is "THIS IS NO SPACE CUBE!" He is right. You were right
// first, but best not to correct him though. Let's just make the changes
// needed. Volume has been passed back to you. Assign a new function to
// volume that takes a length, a width, and a height and returns their
// product. Return the new volume function when you are done.
//=================================//
Exer.values2 = function ( volume ) {



};

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^    Declaration Notation    ^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/****************************    DECLARATION 1    *****************************/
// Use declaration notation to declare a function called `testNinja` that has no
//     parameters
// `testNinja` should log the string "You gotta believe!"
// Return `testNinja` from `Exer.declaration1`
//=================================//
Exer.declaration1 = function () {  //
//=================================//



//=============================//
  Exer.testNinja = testNinja;  //
};  //=========================//

/****************************    DECLARATION 2    *****************************/
// 1. Call a function called `trainNinja` with the argument "punch"
//    Log what `trainNinja` returns
// 2. Declare a function called `trainNinja` that takes one parameter called
//        `move`
//    `trainNinja` should return the correct string
//=================================//
Exer.declaration2 = function () {  //
//=================================//



};  // wrapper end

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    The Call Stack    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/
// Nate

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^^    Optional Arguments    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/
// Annalise

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    Closure    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/
// Nate

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    Recursion    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/
// Annalise

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^^^    Growing Functions    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/
// Nate

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^    Functions and Side Effects    ^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/
// Annalise