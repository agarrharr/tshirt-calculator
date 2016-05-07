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

describe('shirtCost', function() {
  it('should set the shirtCost', function() {
    expect(calc.shirtCost()).to.equal(undefined);

    calc.shirtCost(2);
    expect(calc.shirtCost()).to.equal(2);
  });
});

describe('salesTax', function() {
  it('should set the salesTax', function() {
    expect(calc.salesTax()).to.equal(undefined);

    calc.salesTax(2);
    expect(calc.salesTax()).to.equal(2);
  });
});

describe('quantity', function() {
  it('should set the quantity', function() {
    expect(calc.quantity()).to.equal(undefined);

    calc.quantity(2);
    expect(calc.quantity()).to.equal(2);
  });
});

describe('placements', function() {
  it('should set the placements', function() {
    expect(calc.placements()).to.equal(undefined);

    calc.placements(2);
    expect(calc.placements()).to.equal(2);
  });
});

describe('getPlacementCost', function() {
  it('should get the placement cost', function() {
    var prices = [{
          quantity: 10,
          cost: [4.5, 5.5, 6.5, 7.5, 8, 8.5, 9]
        },
        {
          quantity: 20,
          cost: [4.3, 4.53, 5, 5.5, 6, 7.5, 7.8]
        }
      ];
    calc.placementPrices('first', prices);
    calc.placementPrices('second', []);
    calc.shirtCost(5);
    calc.salesTax(5.5);
    calc.quantity(22);
    calc.placements([2]);
    // 110 shirt cost + 99.66 placements = 209.66 subtotal
    // 209.66 + 115.313 sales tax = 324.973

    expect(calc.getPlacementCost()).to.equal(324.97);
  });
});
