// Chapter 3

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^    Defining a Function    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/******************************    DEFINING 1    ******************************/
// Use a function expression to define a function named `three`.
// That function should return the value 3.

Exer.defining1 = function () {
  var three = function () { return 3; };
}

/******************************    DEFINING 2    ******************************/
// Use a function expression to define a function named `myLog`.
// `myLog` should accept one parameter named `message`.
// `myLog` should output `message` to the console with the appropriate
//     formatting.

Exer.defining2 = function () {
  var myLog = function ( message ) {
    console.log( "The Log Says: " + message );
  };
}

/******************************    DEFINING 3    ******************************/
// Use a function expression to define a function named `square`.
// `square` should accept one parameter named `number`.
// The function should square the number and both log and return the result.

Exer.defining3 = function () {
  var square = function ( number ) {
    number *= number;
    console.log( number );
    return number;
  };
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

  var spaceCubeDetector = function ( length, width, height ) {
    if ( length === width && length === height && length !== null ) {
      return "SPACE CUBE DETECTED!!";
    } else { return "THIS IS NO SPACE CUBE!"; }
  };

  return spaceCubeDetector;

 };  // end Exer.parameters1

//================================================//
Exer.parameters2 = function(spaceCubeDetector) {  //
//================================================//
/*****************************    Parameters 2    *****************************/
// Given spaceCubeDetector:
// 1. Run it once with a length of 3, width of 5, and height of 3.14159265359
//    and log its return.
// 2. Run it once with a length of 7, width of 7, and height of 7 and log its
//    return.
// 3. Run it once with a length of 1, width of 2, and height of 3 and log its
//    return.

  console.log( spaceCubeDetector( 3, 5, 3.14159265359 ) );
  console.log( spaceCubeDetector( 7, 7, 7 ) );
  console.log( spaceCubeDetector( 1, 2, 3 ) );

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
  return 5 ;
};

Exer.scope2 = function() {
  return 35 ;
};

Exer.scope3 = function() {
  return 7 ;
};

Exer.scope4 = function() {
  return 7 ;
};

Exer.scope5 = function() {
  return 35 ;
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
  return 2 ;
};
Exer.nest2 = function() {
  return 5 ;
};
Exer.nest3 = function() {
  return 7 ;
};
Exer.nest4 = function() {
  return 11 ;
};
Exer.nest5 = function() {
  return 7 ;
};
Exer.nest6 = function() {
  return 11 ;
};
Exer.nest7 = function() {
  return 7 ;
};
Exer.nest8 = function() {
  return 17 ;
};
Exer.nest9 = function() {
  return 17 ;
};
Exer.nest10 = function() {
  return 17 ;
};
Exer.nest11 = function() {
  return 13 ;
};
Exer.nest12 = function() {
  return 13 ;
};
Exer.nest13 = function() {
  return 0 ;
};
Exer.nest14 = function() {
  return 0 ;
};
Exer.nest15 = function() {
  return 0 ;
};
Exer.nest16 = function() {
  return 2 ;
};
Exer.nest17 = function() {
  return 5 ;
};
Exer.nest18 = function() {
  return 0 ;
};

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^    Functions as Values    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/******************************    Values 1    ********************************/
// Given the parameters `volume` and `spaceCubeDetector`, assign the
// `spaceCubeDetector` function value to the `volume` variable. Call `volume`
// after the assignment. Then, return `volume`.
//=======================================================//
Exer.values1 = function ( volume, spaceCubeDetector ) {  //
//=======================================================//

  volume = spaceCubeDetector ;
  volume( 1, 2, 3 );
  return volume;

};  // wrapper end

/******************************    Values 2    ********************************/
// Assign a new function to `volume` that takes a length, a width, and a height
// and returns their product. Return the new `volume` function when you
// are done.
//====================================//
Exer.values2 = function ( volume ) {  //
//====================================//

  volume = function ( length, width, height ) {
    return length * width * height ;
  };
  return volume;

};  // wrapper end

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

  function testNinja () {
    console.log( 'You gotta believe!' );
  }

  return testNinja;

};

/****************************    DECLARATION 2    *****************************/
// 1. Call a function called `trainNinja` with the argument "punch"
//    Log what `trainNinja` returns
// 2. Declare a function called `trainNinja` that takes one parameter called
//        `move`
//    `trainNinja` should return the correct string
//=================================//
Exer.declaration2 = function () {  //
//=================================//

  console.log( trainNinja( 'punch' ) );

  function trainNinja ( move ) {
    return "Kick, " + move + ", block! It's all in the mind!" ;
  }

};  // wrapper end

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    The Call Stack    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/*******************************    STACK 1    ********************************/
// 1. Push three pancakes in this order: `apple`, `banana`, and
//    `chocolate chip`.
// 2. Pop one pancake and save it in a variable called `yum`.
// 3. Push two pancakes: `bacon` and `snozzberries`.
// 4. Pop one pancake and concatenate it to the end of `yum`, but put a space
//    (' ') between the two flavors.
// 5. Return yum.
//=================================//
Exer.stack1 = function ( jack ) {  //
//=================================//

  jack.push( 'apple', 'banana', 'chocolate chip' );
  var yum = jack.pop();
  jack.push( 'bacon', 'snozzberries' );
  yum += ' ' + jack.pop();
  return yum;

};  // wrapper end

/*******************************    STACK 2    ********************************/
// Jack already has three pancakes warming on his plate: `apple`, `banana`,
// and `bacon`.
// 1. Pop two pancakes.
// 2. Push one `breadfruit` pancake.
// 3. Log how many pancakes Jack has.
// 4. Push two pancakes: `strawberry` and `durian`.
// 5. Pop one pancake and then push it back on.
// 6. Log the flavor of the pancake on top of the stack.
// 7. Pancake number 2 from the bottom is pancake number _____ from the top. Log
//    your answer.
// 6. Return Jack.
//=================================//
Exer.stack2 = function ( jack ) {  //
//=================================//

  jack.pop();
  jack.pop();
  jack.push( 'breadfruit' );
  console.log( jack.length );
  jack.push( 'strawberry', 'durian' );
  jack.push( jack.pop() );
  console.log( 'durian' );
  console.log( 3 );
  return jack;

};  // wrapper end

/**************************    Optional Arguments    **************************/
// Annalise

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    Closures   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/*******************************    Closures 1    *******************************/
// Your project manager tells you that your function spaceCubeDetector has been a
// great boon to the company and is producing value hand over fist. However,
// the department in charge of producing heights takes twice as long as the
// as either of the departments for length or width. The department in charge
// of running spaceCubeDetector is getting held up while waiting for heights to
// come in. Your project manager would like it if the length and width could
// be entered seperately from the height.
// Create a new version of spaceCubeDetector that takes a length and a width and
// returns another function. The function spaceCubeDetector returns should take
// a height and return the string "SPACE CUBE DETECTED!!" when length, width, and
// height are the same and the string "THIS IS NO SPACE CUBE!" when they do not.
// Return the new spaceCubeDetector.
//=================================//
Exer.closures1 = function(spaceCubeDetector) {
  spaceCubeDetector = function(length, width) {
    return function(height) {
      if ( length === width && length === height && length !== null )
        return "SPACE CUBE DETECTED!!"
      else 
        return "THIS IS NO SPACE CUBE!"
    }
  }

  return spaceCubeDetector
}

/*******************************    Closures 2    *******************************/
// Your project manager loves the changes you made, however, the llamas
// responsible for opperating spaceCubeDetector have been sacked. The management
// would like to change the workflow for spaceCubeDetector such that the
// spaceCubeDetector fuction will be sent to the length department, who will then
// pass a function to the width department, who in turn will pass a function to 
// the height department. The height department will in turn, when they get to it,
// pass the results to the relevant llamas.
// Your job in all of this is to make spaceCubeDetector into a function that
// takes a length and returns a function that takes a width and returns a function
// that takes a height and returns the normal results for spaceCubeDetector.
// Return the new spaceCubeDetector.
//=================================//
Exer.closures2 = function(spaceCubeDetector) {
  spaceCubeDetector = function(length) {
    return function(width) {
      return function(height) {
        if ( length === width && length === height && length !== null )
          return "SPACE CUBE DETECTED!!"
        else 
          return "THIS IS NO SPACE CUBE!"
      }
    }
  }

  return spaceCubeDetector
}

/******************************    Recursion    *******************************/
// Annalise

/**************************    Growing Functions    ***************************/
// Nate

/**********************    Functions and Side Effects    **********************/
// Annalise
