define([
  "sharedJavascript/cards",
  "sharedJavascript/debugLog",
  "sharedJavascript/htmlUtils",
  "javascript/cardsPackageData",
  "javascript/gameInfo",
  "javascript/utils",
  "dojo/domReady!",
], function (
  cards,
  debugLogModule,
  htmlUtils,
  cardsPackageData,
  gameInfo,
  utils,
) {
  var debugLog = debugLogModule.debugLog;

  function addCardFront(parent, index) {
    var cardConfigs = cardsPackageData.getCardConfigs();
    var cardConfig = cards.getCardConfigAtIndex(cardConfigs, index);

    // apply pattern to the whole card.
    var patternValue = cardConfig[gameInfo.packageProperties.Pattern];
    var cardFrontNode = cards.addCardFront(
      parent,
      ["package", patternValue, cardConfig.Color],
      "package",
    );

    utils.addPropertiesToNode(
      cardFrontNode,
      gameInfo.packagePropertiesArray,
      cardConfig,
      gameInfo.deckTypes.Package,
    );
    return cardFrontNode;
  }

  function addCardBack(parent, index) {
    debugLog("addCardBack", "index = " + index);
    var cardBackNode = htmlUtils.addDiv(parent, ["card", "back", "package"]);

    var textNode = htmlUtils.addDiv(
      cardBackNode,
      ["text"],
      "package-text",
      "Package",
    );

    return cardBackNode;
  }

  return {
    addCardFront: addCardFront,
    addCardBack: addCardBack,
  };
});
