Exer.isEven = function ( n ) {
  if ( n === 0 ) return true;
  else if ( n === 1 ) return false;
  else if ( n < 0 ) return Exer.isEven( -n );
  else return Exer.isEven( n - 2 );
};

Exer.isFooDivByBar = function ( foo, bar ) {
  if ( foo === 0 ) return true;
  else if ( 0 < foo && foo < bar ) return false;
  else return Exer.isFooDivByBar( foo - bar, bar );
};

Exer.isDivisibleBy = function ( bar ) {
  var inner = function ( foo ) {
    if ( foo === 0 ) return true;
    else if ( 0 < foo && foo < bar ) return false;
    else return inner( foo - bar, bar );
  };
  return inner;
};
