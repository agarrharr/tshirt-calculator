var tshirtCalcuator = (function() {
  var firstPlacementPrice;
  var secondPlacementPrice;

  var placementPrices = function(whichPlacement, prices) {
    if (prices === undefined) {
      if (whichPlacement === 'first') {
        return firstPlacementPrice;
      } else if (whichPlacement === 'second') {
        return secondPlacementPrice;
      } else {
        return [firstPlacementPrice, secondPlacementPrice];
      }
    }
    if (whichPlacement === 'first') {
      firstPlacementPrice = prices;
    } else if (whichPlacement === 'second') {
      secondPlacementPrice = prices;
    } else if (typeof prices === 'array') {
      firstPlacementPrice = prices[0];
      secondPlacementPrice = prices[1];
    }
  };

  return {
    placementPrices: placementPrices
  };
}());

module.exports = tshirtCalcuator;
