Exer.countBs = function ( str ) {
  var count = 0;
  for ( var i = 0; i < str.length; i++ ) {
    if ( str.charAt(i) === 'B' ) count++;
  }
  return count;
};

Exer.countChar = function ( str, char ) {
  var count = 0;
  for ( var i = 0; i < str.length; i++ ) {
    if ( str.charAt(i) === char ) count++;
  }
  return count;
};

Exer.countCharX = function ( char ) {
  return function ( str ) {
    var count = 0;
    for ( var i = 0; i < str.length; i++ ) {
      if ( str.charAt(i) === char ) count++;
    }
    return count;
  };
};
