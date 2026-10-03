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

  function makeLoopConfig(playerIndex, text) {
    var cardConfig = {};
    cardConfig.playerIndex = playerIndex;
    cardConfig.imageClass = ["player-arrow"];
    cardConfig.text = text;
    debugLog(
      "generateCardConfigs",
      "giveConfig = ",
      JSON.stringify(cardConfig),
    );
    return cardConfig;
  }

  function generateCardConfigs() {
    if (gCardConfigs !== null) {
      return gCardConfigs;
    }
    gCardConfigs = [];
    for (var i = 0; i < gameInfo.numPlayers; i++) {
      gCardConfigs.push(makeLoopConfig(i, "Take"));
      gCardConfigs.push(makeLoopConfig(i, "Give"));
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
