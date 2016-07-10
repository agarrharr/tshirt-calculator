var tshirtCalcuator = (function() {
  var calc = {
  };

  var placementPrices = function(prices) {
    if (prices === undefined) {
      return calc.placementPrices;
    }
    calc.placementPrices = prices;
  };

  var shirtCost = function(cost) {
    if (cost === undefined) {
      return calc.shirtCost;
    }
    calc.shirtCost = cost;
  }

  var placements = function(cost) {
    if (cost === undefined) {
      return calc.placements;
    }
    calc.placements = cost;
  }

  var getPlacementCost = function() {
    // Get array of price brackets

    // var totalShirtCost = calc.shirtCost * calc.quantity;
    // var placementCost = 0;
    // var pricingBracketForFirstPlacement = getPricingBracket(calc.firstPlacementPrices);
    // var pricingBracketForSecondPlacement = getPricingBracket(calc.secondPlacementPrices);
    // var prices;
    // var pricingBracket;
    // var colors;
    // var total;

    // for (var i = 0; i < calc.placements.length; i += 1) {
    //   colors = calc.placements[i];
    //   if (i === 0) {
    //     prices = calc.firstPlacementPrices;
    //     pricingBracket = pricingBracketForFirstPlacement;
    //   } else {
    //     prices = calc.secondPlacementPrices;
    //     pricingBracket = pricingBracketForSecondPlacement;
    //   }
    //   for (var j = 0; j < prices.length; j += 1) {
    //     if (prices[j].quantity === pricingBracket) {
    //       placementCost += prices[j].cost[colors - 1] * calc.quantity;
    //     }
    //   }
    // }
    // total = totalShirtCost + placementCost;

    // return Math.round(total * 100) / 100;
  }

  var getPricingBracket = function(prices) {
    return prices.map(function(currentValue) {
        return currentValue.quantity;
      });
  }

  return {
    placementPrices: placementPrices,
    shirtCost: shirtCost,
    placements: placements,
    getPlacementCost: getPlacementCost
  };
}());

module.exports = tshirtCalcuator;
