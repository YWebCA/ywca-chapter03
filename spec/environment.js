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

(function () {
  var codeIndex = 0;

  global.Exer = {
    spaceCubeDetector: null,
    code: ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'B', 'A', 'select', 'start'],
    controller: function (code) {
      console.log('Key Pressed: ' + code);
      if (code == Exer.code[codeIndex++])
        return true;
      else
        return false;
    }
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
