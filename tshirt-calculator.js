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
    return calc.placementPrices.map(function(currentValue) {
      var firstCost = currentValue.firstCost[calc.placements[0] - 1];
      var secondCost = 0;
      if (calc.placements[1]) {
        secondCost = currentValue.secondCost[calc.placements[1] - 1];
      }
      var price = firstCost + secondCost + calc.shirtCost;
      price = Math.round(price * 100) / 100;
      return {
        quantity: currentValue.quantity,
        price: price
      };
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
