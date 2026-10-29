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

  const gCardSpecialTemplates = [
    {
      title: "Fruitcake",
      imageClasses: ["fruitcake"],
      keep: 10,
      shame: 4,
    },
    {
      title: "Personal Photo",
      imageClasses: ["personal-photo"],
      keep: 2,
      shame: 12,
    },
    {
      title: "Candle",
      imageClasses: ["candle"],
      keep: "?",
      shame: 9,
      text: '<span class="keep">Keep:</span><br>1 + # Candles Kept',
    },
    {
      title: "Handmade Sock",
      imageClasses: ["sock"],
      keep: "?",
      shame: 7,
      text: '<span class="keep">Keep:<br></span>Odd: 2/Even: 0',
    },
  ];

  function getStatsForTier(tier) {
    if (tier == 0) {
      return { keep: 1, shame: 6, reward: 1 };
    } else if (tier == 1) {
      return { keep: 2, shame: 8, reward: 3 };
    } else if (tier == 2) {
      return { keep: 3, shame: 10, reward: 7 };
    }
    console.assert(false, "Invalid tier: " + tier);
  }

  function getPlayerlessGiftConfigs() {
    var playerlessGiftConfigs = [];
    for (var i = 0; i < gameInfo.giftConfigsByTier.length; i++) {
      var statsForTier = getStatsForTier(i);
      var giftConfigsByTier = gameInfo.giftConfigsByTier[i];
      for (var j = 0; j < giftConfigsByTier.length; j++) {
        var playerlessGiftConfig = structuredClone(giftConfigsByTier[j]);
        var shame = statsForTier.shame;
        var keep = statsForTier.keep;
        var reward = statsForTier.reward;
        playerlessGiftConfig.keep = keep;
        playerlessGiftConfig.shame = shame;
        playerlessGiftConfig.reward = reward;
        playerlessGiftConfigs.push(playerlessGiftConfig);
      }
    }
    return playerlessGiftConfigs;
  }

  function generateCardConfigs() {
    if (gCardConfigs !== null) {
      return gCardConfigs;
    }
    gCardConfigs = [];

    var playerlessGiftConfigs = getPlayerlessGiftConfigs();

    for (var i = 0; i < gameInfo.numPlayers; i++) {
      for (var j = 0; j < playerlessGiftConfigs.length; j++) {
        var playerlessGiftConfig = playerlessGiftConfigs[j];
        var cardConfig = structuredClone(playerlessGiftConfig);
        cardConfig.playerIndex = i;

        debugLog(
          "generateCardConfigs",
          "cardConfig = ",
          JSON.stringify(cardConfig),
        );

        gCardConfigs.push(cardConfig);
      }
    }

    for (var i = 0; i < gameInfo.numPlayers; i++) {
      for (var j = 0; j < gCardSpecialTemplates.length; j++) {
        var cardSpecialTemplate = gCardSpecialTemplates[j];
        var cardSpecialConfig = structuredClone(cardSpecialTemplate);
        cardSpecialConfig.playerIndex = i;

        debugLog(
          "generateCardSpecialConfigs",
          "cardSpecialConfig = ",
          JSON.stringify(cardSpecialConfig),
        );

        gCardConfigs.push(cardSpecialConfig);
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
