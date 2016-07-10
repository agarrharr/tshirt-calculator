var chai = require('chai');
var expect = chai.expect;
var calc = require('../tshirt-calculator');

describe('placementPrices', function() {
  it('should set the placementPrices', function() {
    expect(calc.placementPrices()).to.deep.equal(undefined);

    calc.placementPrices(1);
    expect(calc.placementPrices()).to.equal(1);

    calc.placementPrices(2);
    expect(calc.placementPrices()).to.equal(2);

    calc.placementPrices([1, 2]);
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

describe('placements', function() {
  it('should set the placements', function() {
    expect(calc.placements()).to.equal(undefined);

    calc.placements(2);
    expect(calc.placements()).to.equal(2);
  });
});

describe('getPrice', function() {
  it('should get the placement cost', function() {
    var prices = [
        {
          quantity: 10,
          firstCost: [4.5, 5.5, 6.5, 7.5, 8, 8.5, 9]
        },
        {
          quantity: 20,
          firstCost: [4.3, 4.53, 5, 5.5, 6, 7.5, 7.8]
        }
      ];
    calc.placementPrices(prices);
    calc.shirtCost(5);
    calc.placements([2]);
    // quantity: 10
    // 50 shirt cost + 55 placements = 105 / 10 = 10.5
    // quantity: 20
    // 100 shirt cost + 90.6 placements = 190.6 / 20 = 9.53

    var expected = [{
        quantity: 10,
        price: 10.5
      },{
        quantity: 20,
        price: 9.53
      }];
    expect(calc.getPrice()).to.deep.equal(expected);
  });
});
