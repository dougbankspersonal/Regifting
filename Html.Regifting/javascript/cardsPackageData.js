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

  function generateCardConfigs() {
    if (gCardConfigs !== null) {
      return gCardConfigs;
    }
    gCardConfigs = [];

    // Just one of each possibility.
    for (const bowColor of gameInfo.bowColorsArray) {
      for (const pattern of gameInfo.patternsArray) {
        for (const decoration of gameInfo.decorationsArray) {
          for (const container of gameInfo.containersArray) {
            gCardConfigs.push({
              [gameInfo.packageProperties.BowColor]: bowColor,
              [gameInfo.packageProperties.Pattern]: pattern,
              [gameInfo.packageProperties.Decoration]: decoration,
              [gameInfo.packageProperties.Container]: container,
              count: 6,
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
