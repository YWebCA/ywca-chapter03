describe ('Bean Counting exercise', function () {
  it( 'should declare a function `countBs` as a member of `Exer`', function () {
    expect( typeof Exer.countBs ).toBe( 'function' );
  } );
  it( 'should delcare a function `countChar` as a member of `Exer', function () {
    expect( typeof Exer.countChar ).toBe( 'function' );
  } );
  it( 'should declare a function `countCharX` as a member of `Exer`', function () {
    expect( typeof Exer.countCharX ).toBe( 'function' );
  } );
  describe( 'function `countBs', function () {
    it( 'given the string "BBC", should return the number of capital "B"s', function () {
      expect( Exer.countBs("BBC") ).toBe( 2 );
    } );
    it( 'given the string "Babbling Baby Boy Bees", should return the number of capital "B"s', function () {
      expect( Exer.countBs("Babbling Baby Boy Bees") ).toBe( 4 );
    } );
  } );
  describe( 'function `countChar`', function () {
    it( 'should expect two parameters', function () {
      expect( Exer.countChar.length ).toBe( 2 );
    } );
    it( 'given the string "Babbling Baby Boy Bees" and the letter "b", should return the number of lower-case "b"s', function () {
      expect( Exer.countChar("Babbling Baby Boy Bees", "b") ).toBe( 3 );
    } );
    it( 'given the string "camelCaseChampionshipCupContestant" and the letter "C", should return the number of capital "C"s', function () {
      expect( Exer.countChar("camelCaseChampionshipCupContestant", "C") ).toBe( 4 );
    } );
  } );
  describe( 'function `countCharX`', function () {
    it( 'should expect one parameter', function () {
      expect( Exer.countCharX.length ).toBe( 1 );
    } );
    it( 'should return a function', function () {
      expect( typeof Exer.countCharX('a') ).toBe( 'function' );
    } );
    describe( 'returns a function that', function () {
      it( 'should expect one parameter', function () {
        expect( Exer.countCharX('a').length ).toBe( 1 );
      } );
      it( 'given `countCharX("b")` and the argument "Babbling Baby Boy Bees", should return the number of lower-case "b"s ', function () {
        expect( Exer.countCharX('b')("Babbling Baby Boy Bees") ).toBe( 3 );
      } );
      it( 'given `countCharX("C")` and the argument "camelCaseChampionshipCupContestant", should return the number of capital "C"s', function () {
        expect( Exer.countCharX('C')("camelCaseChampionshipCupContestant") ).toBe( 4 );
      } );
    } );
  } );
} );