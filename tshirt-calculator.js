(function(exports) {
  var placementPrices;
  var shirtCost;
  var placements;

  exports.placementPrices = function(_) {
    if (_ === undefined) { return placementPrices; }
    placementPrices = _;
  };

  exports.shirtCost = function(_) {
    if (_ === undefined) { return shirtCost; }
    shirtCost = _;
  }

  exports.placements = function(_) {
    if (_ === undefined) { return placements; }
    placements = _;
  }

  exports.getPrice = function() {
    return placementPrices.map(function(currentValue) {
      var firstCost = currentValue.firstCost[placements[0] - 1];
      var secondCost = 0;
      if (placements[1]) {
        secondCost = undefined;
        if (currentValue.secondCost) {
          if (currentValue.secondCost[placements[1] - 1]) {
            secondCost = currentValue.secondCost[placements[1] - 1];
          }
        }
      }
      var price = firstCost + secondCost + shirtCost;
      price = Math.round(price * 100) / 100;
      price = isNaN(price) ? null : price;
      return {
        quantity: currentValue.quantity,
        price: price
      };
    });
  }
}(typeof exports === 'undefined'? this['tshirtCalculator']={}: exports));
