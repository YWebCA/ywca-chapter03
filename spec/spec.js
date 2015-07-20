/*************************    Defining a Function    **************************/
// Nate
describe("Defining a Function exercises", function() {

  describe("Defining 1", function() {
    beforeAll(function() {
      this.functionDefinition = Exer.defining1.toString().replace(/\/\/.*$/gm,'').replace(/\n/g,'').replace(/}}|};}/, '};').replace(/function\s+\(\)\s+\{/, '');
    });
    it("should define a function named three", function () {
      expect( this.functionDefinition ).toMatch( /^\s*var\s+three\s*=\s*function/m );
    } );
    it("should have said function return the value 3", function () {
      expect( this.functionDefinition ).toMatch( /return 3/m );
    } );
  });

  describe("Defining 2", function() {
    beforeAll(function() {
      this.functionDefinition = Exer.defining2.toString().replace(/\/\/.*$/gm,'').replace(/\n/g,'').replace(/}}|};}/, '};').replace(/function\s+\(\)\s+\{/, '');
    });
    it("should define a function named myLog", function () {
      expect( this.functionDefinition.toString() ).toMatch( /^\s*var\s+myLog\s*=\s*function/m );
    } );
    it("should have said function accept a parameter named message", function () {
      expect( this.functionDefinition.toString() ).toMatch( /^\s*var\s+myLog\s*=\s*function\s*\(\s*message\s*\)/m );
    } );
    it("should have said function log \"The Log Says: {message}\"", function () {
      spyOn( console, 'log' ).and.callThrough();
      eval(this.functionDefinition);
      var message = "I'm a secret passphrase!";
      myLog( message );
      expect( "" + console.log.calls.argsFor(0) ).toBe( "The Log Says: " + message );
    } );
  });

  describe("Defining 3", function() {
    beforeAll(function() {
      this.functionDefinition = Exer.defining3.toString().replace(/\/\/.*$/gm,'').replace(/\n/g,'').replace(/}}|};}/, '};').replace(/function\s+\(\)\s+\{/, '');
    });

    describe( "Structure", function () {
      it("should define a function named square", function () {
        expect( this.functionDefinition.toString() ).toMatch( /^\s*var\s*square\s*=\s*function/m );
      } );
      it("should have said function accept a parameter named number", function () {
        expect( this.functionDefinition.toString() ).toMatch( /^\s*var\s*square\s*=\s*function\s*\(\s*number\s*\)/m );
      } );
    } );

    describe( "Effects", function () {
      var number = 17;
      var answer;
      beforeAll( function () {
        console.log( "Defining 3:" );
        spyOn( console, 'log' ).and.callThrough();
        eval(this.functionDefinition);
        answer = square( number );
      } );
      it("should have said function return number squared", function () {
        expect( answer ).toBe( number * number );
      } );
      it("should have said function output number squared to the console", function () {
        expect( "" + console.log.calls.argsFor(0) ).toBe( "" + answer );
      } );
    } );

  });
});

/************************    Parameters and Scopes    *************************/

describe("Parameters and Scopes exercises", function() {

  describe("Parameters 1", function() {
    it("should define a function named spaceCubeDetector", function() {
      expect( Exer.parameters1.toString() ).toMatch(/var\s+spaceCubeDetector\s*=\s*function/m);
    });
    it("should have said function accept the parameters length, width, and height", function () {
      expect( Exer.parameters1.toString() ).toMatch( /var\s+spaceCubeDetector\s*=\s*function\s*\(\s*length\s*,\s*width\s*,\s*height\s*\)/m );
    });
    it("should return said function. We'll need this later, and we'd like to give it back to you.", function() {
      Exer.spaceCubeDetector = Exer.parameters1();
      expect( typeof Exer.spaceCubeDetector ).toEqual( "function" );
    });
    it("should have said function return \"SPACE CUBE DETECTED!!\" when length, width, and height are all equal", function() {
      expect( Exer.spaceCubeDetector(7,7,7) ).toEqual( "SPACE CUBE DETECTED!!" );
    });
    it("should have said function return \"THIS IS NO SPACE CUBE!\" when length, width, and height are not all equal", function() {
      expect( Exer.spaceCubeDetector(1,2,3) ).toEqual( "THIS IS NO SPACE CUBE!" );
    });
  });

  describe("Parameters 2", function() {

    // Currently does not care what order the different calls to
    // spaceCubeDetector are made in

    beforeAll(function() {
      spyOn(Exer, 'spaceCubeDetector').and.callThrough();
      spyOn(console, 'log').and.callThrough();
      Exer.parameters2(Exer.spaceCubeDetector);
    });

    it("should run the given spaceCubeDetector function with the arguments length => 3, width => 5, and height => 3.14159265359 and log the return", function() {
      expect( Exer.spaceCubeDetector ).toHaveBeenCalledWith(3, 5, 3.14159265359);
      expect( console.log ).toHaveBeenCalledWith( "THIS IS NO SPACE CUBE!" );
    });

    it("should run the given spaceCubeDetector function with the arguments length => 7, width => 7, and height => 7 and log the return", function() {
      expect( Exer.spaceCubeDetector ).toHaveBeenCalledWith(7, 7, 7);
      expect( console.log ).toHaveBeenCalledWith( "SPACE CUBE DETECTED!!" );
    } );
    it("should run the given spaceCubeDetector function with the arguments length => 1, width => 2, and height => 3 and log the return", function() {
      expect( Exer.spaceCubeDetector ).toHaveBeenCalledWith(1, 2, 3);
      expect( console.log ).toHaveBeenCalledWith( "THIS IS NO SPACE CUBE!" );
    } );
  } );
  /*
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
  */
  describe("Scope 1", function() {
    it("should have the correct answer", function() {
      expect( Exer.scope1() === 5 ).toBeTruthy();
    });
  });
  describe("Scope 2", function() {
    it("should have the correct answer", function() {
      expect( Exer.scope2() === 35 ).toBeTruthy();
    });
  });
  describe("Scope 3", function() {
    it("should have the correct answer", function() {
      expect( Exer.scope3() === 7 ).toBeTruthy();
    });
  });
  describe("Scope 4", function() {
    it("should have the correct answer", function() {
      expect( Exer.scope4() === 7 ).toBeTruthy();
    });
  });
  describe("Scope 5", function() {
    it("should have the correct answer", function() {
      expect( Exer.scope5() === 35 ).toBeTruthy();
    });
  });
});

/*****************************    Nested Scope    *****************************/
describe("Nested Scope exercises", function() {
  /*
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
  */
  describe("Nest 1", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest1() === 2).toBeTruthy();
    });
  });
  describe("Nest 2", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest2() === 5).toBeTruthy();
    });
  });
  describe("Nest 3", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest3() === 7).toBeTruthy();
    });
  });
  describe("Nest 4", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest4() === 11).toBeTruthy();
    });
  });
  describe("Nest 5", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest5() === 7).toBeTruthy();
    });
  });
  describe("Nest 6", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest6() === 11).toBeTruthy();
    });
  });
  describe("Nest 7", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest7() === 7).toBeTruthy();
    });
  });
  describe("Nest 8", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest8() === 17).toBeTruthy();
    });
  });
  describe("Nest 9", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest9() === 17).toBeTruthy();
    });
  });
  describe("Nest 10", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest10() === 17).toBeTruthy();
    });
  });
  describe("Nest 11", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest11() === 13).toBeTruthy();
    });
  });
  describe("Nest 12", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest12() === 13).toBeTruthy();
    });
  });
  describe("Nest 13", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest13() === 0).toBeTruthy();
    });
  });
  describe("Nest 14", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest14() === 0).toBeTruthy();
    });
  });
  describe("Nest 15", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest15() === 0).toBeTruthy();
    });
  });
  describe("Nest 16", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest16() === 2).toBeTruthy();
    });
  });
  describe("Nest 17", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest17() === 5).toBeTruthy();
    });
  });
  describe("Nest 18", function() {
    it("should have the correct answer", function() {
      expect( Exer.nest18() === 0).toBeTruthy();
    });
  });
});

/*************************    Functions as Values    **************************/
// Nate
describe( "Functions as Values exercises", function () {
  describe( "Values 1", function () {
    beforeAll( function () {
      this.volume = function () {}
      spyOn(Exer, 'spaceCubeDetector').and.callThrough();
      spyOn(this, 'volume').and.callThrough();
      this.result = Exer.values1(this.volume, Exer.spaceCubeDetector);
    } );
    it( "given spaceCubeDetector and volume should assign spaceCubeDetector to volume", function () {
      expect( Exer.values1.toString() ).toMatch(/volume\s+=\s+spaceCubeDetector/m);
    } );
    it("given spaceCubeDetector and volume should call volume once after assignement", function () {
      expect( Exer.values1.toString() ).toMatch(/volume\([^\(\),]*,[^\(\),]*,[^\(\),]*\);/);
      expect( this.volume.calls.count() ).toEqual(0);
    } );
    it("given spaceCubeDetector and volume should call to the function value of spaceCubeDetector once after the assignment", function() {
      expect( Exer.values1.toString() ).not.toMatch(/spaceCubeDetector\([^\(\)]*\);/);
      expect( Exer.spaceCubeDetector.calls.count() ).toEqual(1);
    });
    it("given spaceCubeDetector and volume should return the new volume", function() {
      expect( this.result ).toEqual(Exer.spaceCubeDetector);
    });
  });
  describe("Values 2", function() {
    beforeAll(function() {
      this.result = Exer.values2(null);
    });
    it("given volume should assign a new function to volume", function() {
      expect( Exer.values2.toString() ).toMatch(/volume\s+=\s+function/m);
    });
    it("given volume should return the new volume", function() {
      expect( typeof this.result ).toBe("function");
    });
    it("should return a volume function that calculates proper volumes", function() {
      expect( 2*3*7 ).toEqual(this.result(2,3,7));
      expect( 5*5*5 ).toEqual(this.result(5,5,5));
      expect( 9*2*5 ).toEqual(this.result(9,2,5));
    });
  });
});

/*************************    Declaration Notation    *************************/
describe( "Declaration Notation exercises", function() {

  describe( "Declaration 1", function () {
    beforeAll( function () {
      Exer.testNinja = Exer.declaration1();
    } );
    it( "should declare a function called testNinja", function () {
      var work = Exer.declaration1.toString();
      work = work.match( /^\s*function\s+testNinja\s*\(\s*\)\s*\{$/mg );
      expect( work ).not.toBeNull();
    } );
    it( "should log the correct string in testNinja", function () {
      console.log( "Declaration 1:" );
      spyOn( console, 'log' ).and.callThrough();
      Exer.testNinja();
      expect( console.log.calls.count() ).toBe(1);
      expect( console.log.calls.argsFor(0) ).toEqual( [ "You gotta believe!" ] );
    } );
  } );

  describe( "Declaration 2", function () {
    beforeAll( function () {
      console.log( "Declaration 2:" );
      spyOn( console, 'log' ).and.callThrough();
      Exer.declaration2();
    } );
    it( "should call trainNinja with the argument \"punch\"", function () {
      var work = Exer.declaration2.toString();
      work = work.match( /trainNinja\(\s*['"]punch['"]\s*\)/mg );
      expect( work ).not.toBeNull();
    } );
    it( "should log the result of calling trainNinja", function () {
      expect( console.log ).toHaveBeenCalled();
      expect( console.log.calls.count() ).toBe(1);
      expect( console.log.calls.argsFor(0) ).toEqual( ["Kick, punch, block! It's all in the mind!"] );
    } );
    it( "should declare a function called trainNinja that takes a parameter move", function () {
      var work = Exer.declaration2.toString();
      work = work.match( /^\s*function\s+trainNinja\s*\(\s*move\s*\)\s*\{$/mg );
      expect( work ).not.toBeNull();
    } );
    it( "should call trainNinja above/before the function declaration", function () {
      var work = Exer.declaration2.toString().split( '\n' );
      var flag = false;
      for( var i = 0; i < work.length; i++ ) {
        var test = work[i].match( /trainNinja\(\s*['"]punch['"]\s*\).*;/g );
        if( test ) {
          for( i; i < work.length; i++ ) {
            test = work[i].match( /^\s*function\s+trainNinja\s*\(\s*move\s*\)\s*\{$/g );
            if( test ) { flag = true; }
          }
        }
      }
      expect( flag ).toBeTruthy();
    } );
  } );

} );

/****************************    The Call Stack    ****************************/
describe("The Call Stack exercises", function() {
  var jack = [];
  beforeAll( function () {
    console.log( 'STACK 1 & 2:' );
    spyOn( console, 'log' ).and.callThrough();
  } );
  describe( "Stack 1", function () {
    it( "should return two pancake flavors, concatenated", function () {
      expect( Exer.stack1( jack ) ).toBe( 'chocolate chip snozzberries' );
    } );
  } );
  describe( "Stack 2", function () {
    it( "should return a stack of four pancakes", function () {
      expect( Exer.stack2( jack ) ).toEqual( [ 'apple', 'breadfruit', 'strawberry', 'durian' ] );
    } );
    it( "should log the number of pancakes in the stack", function () {
      expect( console.log ).toHaveBeenCalledWith(2);
    } );
    it( "should log the flavor of the top pancake", function () {
      expect( console.log ).toHaveBeenCalledWith( 'durian' );
    } );
    it( "should log the order of the pancake in question", function () {
      expect( console.log ).toHaveBeenCalledWith( 3 );
    } );
  } );
});

/**************************    Optional Arguments    **************************/
// Annalise
describe("Optional Arguments exercises", function() {
  describe("Optional 1", function() {
    it("should return a function that has 4 parameters", function() {
      this.result = Exer.optional1();
      expect( this.result.length ).toEqual(2);
    });
  });
  describe("Optional 2", function() {
    it("should call a given function with 4 arguments", function() {
      this.result = this.result || function() {};
      spyOn(this, "result").and.callThrough();
      Exer.optional2(this.result);
      expect( this.result.calls.mostRecent().args.length ).toEqual(4)
    });
  });
});

/*******************************    Closure    ********************************/
// Nate
describe("Closure exercises", function() {
  describe( "Closures 1", function() {
    beforeAll(function () {
      Exer.spaceCubeDetector = Exer.closures1();
    });
    it("should return a partially curried function that returns \"THIS IS NO SPACE CUBE!\" when given 4 and 2 and then 5", function() {
      var result = Exer.spaceCubeDetector(4, 2);
      expect( typeof result ).toBe("function");
      result = result(5);
      expect( result ).toBe( "THIS IS NO SPACE CUBE!" );
    });
    it("should return a partially curried function that returns \"SPACE CUBE DETECTED\" when given 5 and 5 and then 5", function() {
      var result = Exer.spaceCubeDetector(5, 5);
      expect( typeof result ).toBe("function");
      var result = result(5);
      expect( result ).toBe( "SPACE CUBE DETECTED!!" );
    });
  });
  describe( "Closures 2", function() {
    beforeAll(function () {
      Exer.spaceCubeDetector = Exer.closures2();
    });
    it("should return a curried function that returns \"THIS IS NO SPACE CUBE!\" when given 4, 2, and then 5", function() {
      var result = Exer.spaceCubeDetector(4);
      expect( typeof result ).toBe("function");
      result = result(2);
      expect( typeof result ).toBe("function");
      result = result(5);
      expect( result ).toBe( "THIS IS NO SPACE CUBE!" );
    });
    it("should return a curried function that returns \"SPACE CUBE DETECTED!!\" when given 5, 5, and then 5", function() {
      var result = Exer.spaceCubeDetector(5);
      expect( typeof result ).toBe("function");
      result = result(5);
      expect( typeof result ).toBe("function");
      result = result(5);
      expect( result ).toBe( "SPACE CUBE DETECTED!!" );
    });
  });
});

/******************************    Recursion    *******************************/
// Annalise
describe("Recursion exercises", function() {
  describe("Recursion 1", function() {
    beforeAll(function() {
      spyOn(Exer, 'controller').and.callThrough();
      Exer.recursion1(Exer.code, Exer.controller);
    })
    it("should not have a loop", function() {
      expect( Exer.recursion1.toString() ).not.toMatch(/for\s?\(/);
      expect( Exer.recursion1.toString() ).not.toMatch(/while\s?\(/);
    });
    it("should have the call to controller written only once", function() {
      expect( Exer.recursion1.toString().match(/controller\s?\(/g).length ).toEqual(1);
    });
    it("should call controller with each part of the code", function() {
      expect( Exer.controller.calls.allArgs() ).toEqual([["up"],["up"],["down"],["down"],["left"],["right"],["left"],["right"],["B"],["A"],["select"],["start"]])
    });
  });
  describe("Recursion 2", function() {
    beforeAll(function() {
      spyOn(Exer.puzzleBox, "click").and.callThrough();
      spyOn(Exer.puzzleBox, "twist").and.callThrough();
      Exer.recursion2(Exer.puzzleBox);
    })
    it("should call click # times", function() {
      expect( Exer.puzzleBox.click.calls.count() ).toEqual(8);
    });
    it("should call twist # times", function() {
      expect( Exer.puzzleBox.twist.calls.count() ).toEqual(7);
    });
  });
});

/**************************    Growing Functions    ***************************/
// Nate
describe("Growing Functions exercises", function() {
  describe("Growing 1", function() {
    beforeAll(function() {
      spyOn(console, "log").and.callThrough();
      Exer.growing1(2,4,3);
    });
    it("should have the call to console.log written only once", function() {
      expect( Exer.growing1.toString().match(/console.log\(/mg).length ).toEqual(1);
    });
    it("should not have its logs changed", function() {
      expect( console.log.calls.allArgs() ).toEqual([["The pigs need 4sq. ft."], ["The chickens need 16sq. ft."], ["The sheep need 9sq. ft."]]);
    });
  });
});

/**********************    Functions and Side Effects    **********************/
// Annalise
describe("Functions and Side Effects exercises", function() {
  beforeEach(function() {
    global.bark = jasmine.createSpy("bark");
    global.pairsOfLegsToTotalLegs = jasmine.createSpy("pairsOfLegsToTotalLegs");
    global.hasTail = jasmine.createSpy("hasTail");
    global.getBarkNoise = jasmine.createSpy("getBarkNoise");
    global.setBarkNoise = jasmine.createSpy("setBarkNoise");
  });
  describe("Side Effects 1",function() {
    it("should call the functions that are pure", function() {
      Exer.sideEffect1();
      expect( global.pairsOfLegsToTotalLegs ).toHaveBeenCalled();
      expect( global.hasTail ).toHaveBeenCalled();
    });
    it("should not call the functions that are not pure", function() {
      expect( global.bark ).not.toHaveBeenCalled();
      expect( global.getBarkNoise ).not.toHaveBeenCalled();
      expect( global.setBarkNoise ).not.toHaveBeenCalled();
    });
  });
  describe("Side Effects 2",function() {
    it("should call the functions that are not pure", function() {
      Exer.sideEffect2();
      expect( bark.calls.count() ).toBeGreaterThan(0);
      expect( getBarkNoise.calls.count() ).toBeGreaterThan(0);
      expect( setBarkNoise.calls.count() ).toBeGreaterThan(0);
    });
    it("should not call the functions that are pure", function() {
      expect( pairsOfLegsToTotalLegs.calls.count() ).not.toBeGreaterThan(0);
      expect( hasTail.calls.count() ).not.toBeGreaterThan(0);
    });
  });
});