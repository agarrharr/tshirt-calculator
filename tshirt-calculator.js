var tshirtCalcuator = (function() {
  var calc = {
  };

  var placementPrices = function(whichPlacement, prices) {
    if (prices === undefined) {
      if (whichPlacement === 'first') {
        return calc.firstPlacementPrices;
      } else if (whichPlacement === 'second') {
        return calc.secondPlacementPrices;
      } else {
        return [calc.firstPlacementPrices, calc.secondPlacementPrices];
      }
    }
    if (whichPlacement === 'first') {
      calc.firstPlacementPrices = prices;
    } else if (whichPlacement === 'second') {
      calc.secondPlacementPrices = prices;
    } else if (typeof prices === 'array') {
      calc.firstPlacementPrices = prices[0];
      calc.secondPlacementPrices = prices[1];
    }
  };

  var shirtCost = function(cost) {
    if (cost === undefined) {
      return calc.shirtCost;
    }
    calc.shirtCost = cost;
  }

  var salesTax = function(cost) {
    if (cost === undefined) {
      return calc.salesTax;
    }
    calc.salesTax = cost;
  }

  var quantity = function(cost) {
    if (cost === undefined) {
      return calc.quantity;
    }
    calc.quantity = cost;
  }

  var placements = function(cost) {
    if (cost === undefined) {
      return calc.placements;
    }
    calc.placements = cost;
  }

  var getPlacementCost = function() {
    var totalShirtCost = calc.shirtCost * calc.quantity;
    var placementCost = 0;
    var pricingBracketForFirstPlacement = getPricingBracket(calc.firstPlacementPrices);
    var pricingBracketForSecondPlacement = getPricingBracket(calc.secondPlacementPrices);
    var prices;
    var pricingBracket;
    var colors;
    var total;

    for (var i = 0; i < calc.placements.length; i += 1) {
      colors = calc.placements[i];
      if (i === 0) {
        prices = calc.firstPlacementPrices;
        pricingBracket = pricingBracketForFirstPlacement;
      } else {
        prices = calc.secondPlacementPrices;
        pricingBracket = pricingBracketForSecondPlacement;
      }
      for (var j = 0; j < prices.length; j += 1) {
        if (prices[j].quantity === pricingBracket) {
          placementCost += prices[j].cost[colors - 1] * calc.quantity;
        }
      }
    }
    total = (totalShirtCost + placementCost) * (1 + calc.salesTax / 10);

    return Math.round(total * 100) / 100;
  }

  var getPricingBracket = function(prices) {
    return prices.map(function(currentValue) {
        return currentValue.quantity;
      })
      .reduce(function(previousValue, currentValue) {
        return currentValue <= calc.quantity && currentValue > previousValue
          ? currentValue : previousValue;
      }, 0);
  }

  return {
    placementPrices: placementPrices,
    shirtCost: shirtCost,
    salesTax: salesTax,
    quantity: quantity,
    placements: placements,
    getPlacementCost: getPlacementCost
  };
}());

module.exports = tshirtCalcuator;
