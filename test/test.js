var chai = require('chai');
var expect = chai.expect;
var calc = require('../tshirt-calculator');

describe('placementPrices', function() {
  it('should set the placementPrices', function() {
    expect(calc.placementPrices()).to.deep.equal([undefined, undefined]);

    calc.placementPrices('first', 1);

    expect(calc.placementPrices('first')).to.equal(1);
    expect(calc.placementPrices()).to.deep.equal([1, undefined]);

    calc.placementPrices('second', 2);

    expect(calc.placementPrices('second')).to.equal(2);
    expect(calc.placementPrices()).to.deep.equal([1, 2]);
  });
});
