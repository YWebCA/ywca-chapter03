// Povided Resources for Chapter Exercises
global.Exer = {};


// Test for being in node
global.weAreInNode = function() {
  return typeof require !== 'undefined' && require !== null;
}

// Mock window if is does not exist
if ( weAreInNode() ) {
  window = global;
  window.navigator = {};
  window.document = {};
  window.history = {};
  window.prompt = function() {
    return "O brave new world, That has no browser in't.";
  };
  window.confirm = function() {
    return "cake" == "lie";
  }
}


// Provided Resources for Chapter Exercises
(function (){
  global.Exer.spaceCubeDetector = function() {};
})();

(function () {
  var codeIndex = 0;

  global.Exer.code = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'B', 'A', 'select', 'start'],
  global.Exer.controller = function (code) {
    console.log('Key Pressed: ' + code);
    if (code == Exer.code[codeIndex++])
      return true;
    else
      return false;
  }
})();

(function () {

  var codeIndex = 0;

  Exer.code.curr = function() {
    return Exer.code[codeIndex];
  };
  Exer.code.next = function() {
    if (codeIndex + 1 < Exer.code.length) {
      return Exer.code[++codeIndex];
    } else {
      return undefined;
    }
  };
  Exer.code.prev = function() {
    if (codeIndex - 1 > 0) {
      return Exer.code[--codeIndex];
    } else {
      return undefined;
    }
  };

})();

(function () {
  var clickTarget = 8;
  var clickCount = 0;

  global.Exer.puzzleBox = {}
  global.Exer.puzzleBox.setClickTarget = function (target) {
    clickTarget = target;
  };
  global.Exer.puzzleBox.twist = function() {
    if (--clickCount === 0)
      console.log("\"We have such sights to show you...\"");
    else if (clickCount < 0)
      console.log("The puzzlebox resists your attempt.");
    else
      console.log("The puzzlebox turns.");
  };
  global.Exer.puzzleBox.click = function() {
    if (++clickCount < clickTarget) {
      console.log("The puzzlebox clicks.");
      return Exer.puzzleBox.twist;
    } else if (clickCount > clickTarget) {
      console.log("The puzzlebox resists your attempt.");
      return null;
    } else {
      --clickCount;
      console.log("The puzzlebox is free to be twisted.");
      return undefined;
    }
  };
})();

global.bark = function() {};
global.pairsOfLegsToTotalLegs = function() {};
global.hasTail = function() {};
global.getBarkNoise = function() {};
global.setBarkNoise = function() {};