define([
  "sharedJavascript/cards",
  "sharedJavascript/debugLog",
  "dojo/domReady!",
], function (cards, debugLogModule) {
  var debugLog = debugLogModule.debugLog;
  //-----------------------------------
  //
  // Constants
  //
  //-----------------------------------
  const gPackagePropertyBowColor = "property-bow-color";
  const gPackagePropertyBowCount = "property-bow-count";
  const gPackagePropertyDecoration = "property-decoration";
  const gPackagePropertyContainer = "property-container";

  const gProperties = {
    BowColor: gPackagePropertyBowColor,
    BowCount: gPackagePropertyBowCount,
    Decoration: gPackagePropertyDecoration,
    Container: gPackagePropertyContainer,
  };

  const gPropertiesArray = Object.values(gProperties);

  const gBowColorSilver = "bow-color-silver";
  const gBowColorGold = "bow-color-gold";

  const gBowColors = {
    Silver: gBowColorSilver,
    Gold: gBowColorGold,
  };
  const gBowColorsArray = Object.values(gBowColors);

  const gBowCountOne = 1;
  const gBowCountTwo = 2;

  const gBowCounts = {
    One: gBowCountOne,
    Two: gBowCountTwo,
  };
  const gBowCountsArray = Object.values(gBowCounts);

  const gDecorationHolly = "decoration-holly";
  const gDecorationCandyCane = "decoration-candy-cane";
  const gDecorations = {
    Holly: gDecorationHolly,
    CandyCane: gDecorationCandyCane,
  };
  const gDecorationsArray = Object.values(gDecorations);

  const gContainerBox = "container-box";
  const gContainerBag = "container-bag";
  const gContainers = {
    Box: gContainerBox,
    Bag: gContainerBag,
  };
  const gContainersArray = Object.values(gContainers);

  const gPropertyArraysByType = {
    BowColor: gBowColorsArray,
    BowCount: gBowCountsArray,
    Decoration: gDecorationsArray,
    Container: gContainersArray,
  };

  //-----------------------------------
  //
  // Global state.
  //
  //-----------------------------------
  var gCardConfigs = null;

  function generateCardConfigs() {
    if (gCardConfigs !== null) {
      return gCardConfigs;
    }
    gCardConfigs = [];

    // Just one of each possibility.
    for (const bowColor of gBowColorsArray) {
      for (const bowCount of gBowCountsArray) {
        for (const decoration of gDecorationsArray) {
          for (const container of gContainersArray) {
            gCardConfigs.push({
              BowColor: bowColor,
              BowCount: bowCount,
              Decoration: decoration,
              Container: container,
              count: 4,
            });
          }
        }
      }
    }

    return gCardConfigs;
  }

  function getCardConfigs() {
    generateCardConfigs();

    console.assert(
      gCardConfigs,
      "getNumCards called before generateCardConfigs",
    );
    debugLog("getCardConfigs: gCardConfigs.length = ", gCardConfigs.length);
    return gCardConfigs;
  }

  function getNumCards() {
    generateCardConfigs();
    console.assert(
      gCardConfigs,
      "getNumCards called before generateCardConfigs",
    );
    return cards.getNumCardsFromConfigs(gCardConfigs);
  }

  // This returned object becomes the defined value of this module
  return {
    getNumCards: getNumCards,
    getCardConfigs: getCardConfigs,
  };
});
