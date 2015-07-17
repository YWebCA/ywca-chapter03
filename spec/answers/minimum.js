Exer.min2 = function ( a, b ) {
  if ( a < b ) return a;
  else return b;
};

Exer.min3 = function ( a, b, c ) {
  return Exer.min2( Exer.min2( a, b ), c );
};

Exer.min = function ( a, b, c ) {
  if( !c ) return Exer.min2( a, b );
  else return Exer.min3( a, b, c );
};
