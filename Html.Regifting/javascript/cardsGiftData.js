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

  var gCardTemplates = [
    {
      haul: 3,
      imageClasses: ["item-candle-color-red"],
      text: "Cranberry Candle",
      shame: 5,
    },
    {
      haul: 3,
      imageClasses: ["item-salts-color-green"],
      text: "Kiwi Bath Salts",
      shame: 5,
    },
    {
      haul: 4,
      imageClasses: ["item-ornament-color-white"],
      text: "Festive Ornament",
      shame: 6,
    },
    {
      haul: 4,
      imageClasses: ["item-teddy-color-blue"],
      text: "BlueBeary Bear",
      shame: 6,
    },
    {
      haul: 4,
      imageClasses: ["item-mug-color-green"],
      text: "Sylvan Mug",
      shame: 6,
    },
    {
      haul: 5,
      imageClasses: ["fruitcake"],
      text: "Fruitcake",
      shame: 7,
    },
    {
      haul: 5,
      imageClasses: ["soap"],
      text: "Decorative Soaps",
      shame: 7,
    },
    {
      haul: 5,
      imageClasses: ["slanket"],
      text: "Slanket",
      shame: 7,
    },
    {
      haul: 5,
      imageClasses: ["singing-fish"],
      text: "Singing Fish",
      shame: 7,
    },
  ];

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
    gCardConfigs = [];
    for (var i = 0; i < gameInfo.numPlayers; i++) {
      for (var j = 0; j < gCardTemplates.length; j++) {
        var cardTemplate = gCardTemplates[j];
        var cardConfig = structuredClone(cardTemplate);
        cardConfig.playerIndex = i;

        debugLog(
          "generateCardConfigs",
          "cardConfig = ",
          JSON.stringify(cardConfig),
        );

        gCardConfigs.push(cardConfig);
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

  function getCardBackConfigs(callback) {
    debugLog("getCardBackConfigs", "callback = ", JSON.stringify(callback));
    var cardBackConfigs = [];
    var backConfig = {
      callback: callback,
    };
    cardBackConfigs.push(backConfig);
    return cardBackConfigs;
  }

  // This returned object becomes the defined value of this module
  return {
    getNumCards: getNumCards,
    getCardConfigs: getCardConfigs,
    getCardBackConfigs: getCardBackConfigs,
  };
});
