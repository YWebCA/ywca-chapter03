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

global.Exer = {
  spaceCubeDetector: null
};
