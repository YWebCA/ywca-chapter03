describe( "Minimum exercise", function () {
  beforeAll( function () {
    spyOn( Math, 'min' );
  } );
  it( "should declare a function `min3` that is a member of `Exer`", function () {
    expect( typeof Exer.min ).toBe( 'function' );
  } );
  describe( "Exer.min3()", function () {
    it( "should accept three parameters", function () {
      this.functionDefinition = Exer.min3.toString();
      expect( this.functionDefinition ).toMatch( /^\s*function\s*\(\s*\w+.*,\s*\w+.*,\s*\w+.*\s*\)\s*\{$/mg );
    } );
    it( "should return the minimum given -3, 2, and 22", function () {
      expect( Exer.min3( -3, 2, 22 ) ).toBe( -3 );
    } );
    it( "should return the minimum given 678, 4, and Infinity", function () {
      expect( Exer.min3( 678, 4, Infinity ) ).toBe( 4 );
    } );
    it( "should return the minimum given 0, 12, and -Infinity", function () {
      expect( Exer.min3( 0, 12, -Infinity ) ).toBe( -Infinity );
    } );
  } );
  it( "should declare function `min` that is a member of `Exer`", function () {
    expect( typeof Exer.min ).toBe( 'function' );
  } );
  describe( "Exer.min()", function () {
    it( "should accept three parameters", function () {
      this.functionDefinition = Exer.min.toString();
      expect( this.functionDefinition ).toMatch( /^\s*function\s*\(\s*\w+.*,\s*\w+.*,\s*\w+.*\s*\)\s*\{$/mg );
    } );
    it( "should return the minimum given 0 and 10", function () {
      expect( Exer.min( 0, 10 ) ).toBe( 0 );
    } );
    it( "should return the minimum given 10 and 0", function () {
      expect( Exer.min( 10, 0 ) ).toBe( 0 );
    } );
    it( "should return the minimum given -5 and 6", function () {
      expect( Exer.min( -5, 6 ) ).toBe( -5 );
    } );
    it( "should return the minimum given 1000, 100, and 10", function () {
      expect( Exer.min( 1000, 100, 10 ) ).toBe( 10 );
    } );
  } );
  it( "should not include Math.min in your solution", function () {
    expect( Math.min ).not.toHaveBeenCalled();
  } );
} );
