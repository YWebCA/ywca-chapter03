describe( 'Recursion exercise', function () {
  it( 'should declare a function `isEven` as a member of `Exer`', function () {
    expect( typeof Exer.isEven ).toBe( 'function' );
  } );
  describe( 'declares `isEven()`, a function that', function () {
    beforeAll( function () {
      this.functionDefinition = Exer.isEven.toString();
    } );
    it( 'should be recursive', function() {
      expect( this.functionDefinition ).toMatch( /Exer.isEven\(.+\)/mg );
    } );
    it( 'should accept one parameter', function () {
      expect( this.functionDefinition ).toMatch( /^\s*function\s*\(\s*\w+.*\s*\)\s*\{$/mg );
    } );
    it( 'should return true given an even number', function () {
      expect( Exer.isEven( 22 ) ).toBe( true );
    } );
    it( 'should return false given an odd number', function () {
      expect( Exer.isEven( 23 ) ).toBe( false );
    } );
    it( 'should return true given a negative even number', function () {
      expect( Exer.isEven( -8 ) ).toBe( true );
    } );
    it( 'should return false given a negative odd number', function () {
      expect( Exer.isEven( -11 ) ).toBe( false );
    } );
  } );
  it( 'should declare a function `isFooDivByBar` as a member of `Exer`', function () {
    expect( typeof Exer.isFooDivByBar ).toBe( 'function' );
  } );
  describe( 'declares `isFooDivByBar(), a function that', function () {
    beforeAll( function () {
      this.functionDefinition = Exer.isFooDivByBar.toString();
    } );
    it( 'should accept two parameters named `foo` and `bar`', function () {
      expect( this.functionDefinition ).toMatch( /^\s*function\s*\(\s*foo,\s*bar\s*\)\s*\{$/mg );
    } );
    it( 'should be recursive', function () {
      expect( this.functionDefinition ).toMatch( /Exer.isFooDivByBar\(.+,.+\)/mg );
    } );
    it( 'should not use modulo', function () {
      expect( this.functionDefinition ).not.toMatch( /%/mg );
    } );
    it( 'should return true if `foo` is divisible by `bar`', function () {
      expect( Exer.isFooDivByBar( 12, 3 ) ).toBe( true );
    } );
    it( 'should return false if `foo` is not divisible by `bar`', function () {
      expect( Exer.isFooDivByBar( 12, 5 ) ).toBe( false );
    } );
  } );
  it( 'should declare a function `isDivisibleBy` as a member of `Exer`', function () {
    expect( typeof Exer.isDivisibleBy ).toBe( 'function' );
  } );
  describe( 'declares `isDivisibleBy`, a function that', function () {
    it( 'should accept one parameter', function () {
      this.functionDefinition = Exer.isDivisibleBy.toString();
      expect( this.functionDefinition ).toMatch( /^\s*function\s*\(\s*\w+.*\s*\)\s*\{$/mg );
    } );
    it( 'should return a function', function () {
      expect( typeof Exer.isDivisibleBy(2) ).toBe( 'function' );
    } );
    describe( 'returns a function that', function () {
      beforeAll( function () {
        this.functionDefinition = Exer.isDivisibleBy.toString();
      } );
      it( 'is recursive', function () {
        var innerName = this.functionDefinition.match( /var \w+.*\s*=\s*function/mg ).toString().replace( /var\s*/g, '' ).replace( /\s*=\s*function/, '');
        var re = new RegExp( 'return ' + innerName + '\\(', 'mg' );
        expect( this.functionDefinition ).toMatch( re );
      } );
      it( 'should not use modulo', function () {
        expect( this.functionDefinition ).not.toMatch( /%/mg );
      } );
      it( 'given 5 to `isDivisbleBy`, should return true when called with 225', function () {
        expect( Exer.isDivisibleBy(5)(255) ).toBe( true );
      } );
      it( 'given 13 to `isDivisibleBy`, should return true when called with 91', function () {
        expect( Exer.isDivisibleBy(13)(91) ).toBe( true );
      } );
      it( 'given 13 to `isDivisbleBy`, should return false when called with 92', function () {
        expect( Exer.isDivisibleBy(13)(92) ).toBe( false );
      } );
      it( 'given 12 to `isDivisibleBy`, should return false when called with 6', function () {
        expect( Exer.isDivisibleBy(12)(6) ).toBe( false );
      } );
    } );
  } );
} );
