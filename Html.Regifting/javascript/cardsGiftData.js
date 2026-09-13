define([
  "sharedJavascript/cards",
  "sharedJavascript/debugLog",
  "javascript/gameInfo",
  "dojo/domReady!",
], function (cards, debugLogModule, gameInfo) {
  var debugLog = debugLogModule.debugLog;

  //-----------------------------------
  //
  // Global state.
  //
  //-----------------------------------
  var gCardConfigs = null;

  function expandWithAllProperties(
    currentCardConfigs,
    giftPropertyType,
    giftPropertyArray,
  ) {
    var newCardConfigs = [];
    for (var i = 0; i < currentCardConfigs.length; i++) {
      var newCardConfig = structuredClone(currentCardConfigs[i]);

      for (var j = 0; j < giftPropertyArray.length; j++) {
        newCardConfig[giftPropertyType] = giftPropertyArray[j];
        newCardConfigs.push(structuredClone(newCardConfig));
      }
    }
    return newCardConfigs;
  }

  function generateCardConfigs() {
    if (gCardConfigs !== null) {
      return gCardConfigs;
    }
    gCardConfigs = [
      {
        count: 2,
      },
    ];

    // Just one of each possibility.
    for (const [giftPropertyTypeName, giftPropertyArray] of Object.entries(
      gameInfo.giftPropertyArraysByType,
    )) {
      gCardConfigs = expandWithAllProperties(
        gCardConfigs,
        giftPropertyTypeName,
        giftPropertyArray,
      );
    }

    // And 8 fruitcakes.
    gCardConfigs.push({
      count: gameInfo.numPlayers,
      special: {
        cardClasses: ["fruitcake"],
        imageClasses: ["fruitcake"],
        textClasses: ["fruitcake", "title"],
        text: "Fruitcake",
      },
    });

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
