define([
  "sharedJavascript/cards",
  "sharedJavascript/debugLog",
  "javascript/gameInfo",
  "dojo/domReady!",
], function (cards, debugLogModule, gameInfo) {
  var debugLog = debugLogModule.debugLog;
  //-----------------------------------
  //
  // Constants.
  //
  //-----------------------------------

  //-----------------------------------
  //
  // Global state.
  //
  //-----------------------------------
  var gCardConfigs = null;
  var gCardSpecialConfigs = null;

  function buildVanillaTemplates() {
    var vanillaTemplates = [];
    for (var i = 0; i < gameInfo.vanillaGiftTitleArrays.length; i++) {
      var giftTitleArray = gameInfo.vanillaGiftTitleArrays[i];
      for (var j = 0; j < giftTitleArray.length; j++) {
        var giftTitle = giftTitleArray[j];
        var template = {
          title: giftTitle,
          imageClasses: ["gift-" + i + "-" + j],
          keep: i + 1,
          shame: i + 1,
          count: gameInfo.copiesPerVanillaCard,
        };
        vanillaTemplates.push(template);
      }
    }
    return vanillaTemplates;
  }

  function generateCardConfigs() {
    if (gCardConfigs !== null) {
      return gCardConfigs;
    }
    gCardConfigs = [];

    var vanillaTemplates = buildVanillaTemplates();

    for (var i = 0; i < gameInfo.numPlayers; i++) {
      for (var j = 0; j < vanillaTemplates.length; j++) {
        var cardTemplate = vanillaTemplates[j];
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

  function generateCardSpecialConfigs() {
    if (gCardSpecialConfigs !== null) {
      return gCardSpecialConfigs;
    }
    const cardSpecialTemplates = [
      {
        title: "Fruitcake",
        imageClasses: ["fruitcake"],
        keep: "N/A",
        keepClasses: ["special"],
        shame: 2,
        specialText: "*Cannot be Kept",
      },
      {
        title: "Awkward Photo",
        imageClasses: ["awkward-photo"],
        keep: "2",
        shame: "N/A",
        shameClasses: ["special"],
        specialText: "*Must be Kept",
      },
      {
        title: "Cranberry Candle",
        imageClasses: ["item-candle-color-red"],
        keep: "?",
        shame: 2,
        specialText: "Keep: 1 + # Candles already kept",
      },
      {
        title: "Single Handmade Sock",
        imageClasses: ["sock"],
        keep: "?",
        shame: 2,
        specialText: "Keep: 2 to start a new pair, 0 to finish a pair",
      },
    ];

    gCardSpecialConfigs = [];
    for (var i = 0; i < gameInfo.numPlayers; i++) {
      for (var j = 0; j < cardSpecialTemplates.length; j++) {
        var cardSpecialTemplate = cardSpecialTemplates[j];
        var cardSpecialConfig = structuredClone(cardSpecialTemplate);
        cardSpecialConfig.playerIndex = i;

        debugLog(
          "generateCardSpecialConfigs",
          "cardSpecialConfig = ",
          JSON.stringify(cardSpecialConfig),
        );

        gCardSpecialConfigs.push(cardSpecialConfig);
      }
    }

    return gCardSpecialConfigs;
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

  function getCardSpecialConfigs() {
    generateCardSpecialConfigs();

    console.assert(
      gCardSpecialConfigs,
      "getCardSpecialConfigs called before generateCardSpecialConfigs",
    );
    debugLog(
      "getCardSpecialConfigs: gCardSpecialConfigs.length = ",
      gCardSpecialConfigs.length,
    );
    return gCardSpecialConfigs;
  }

  function getNumCardsSpecial() {
    generateCardSpecialConfigs();
    console.assert(
      gCardSpecialConfigs,
      "getNumCardsSpecial called before generateCardSpecialConfigs",
    );
    return cards.getNumCardsFromConfigs(gCardSpecialConfigs);
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

    getNumCardsSpecial: getNumCardsSpecial,
    getCardSpecialConfigs: getCardSpecialConfigs,
  };
});
