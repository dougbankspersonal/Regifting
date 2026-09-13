define([
  "sharedJavascript/cards",
  "sharedJavascript/debugLog",
  "sharedJavascript/htmlUtils",
  "javascript/gameInfo",
  "javascript/cardsSetupData",
  "javascript/utils",
  "dojo/domReady!",
], function (
  cards,
  debugLogModule,
  htmlUtils,
  gameInfo,
  cardsSetupData,
  utils,
) {
  var debugLog = debugLogModule.debugLog;

  function addCardFront(parent, index) {
    var cardConfigs = cardsSetupData.getCardConfigs();
    var cardConfig = cards.getCardConfigAtIndex(cardConfigs, index);

    var cardFrontNode = cards.addCardFront(
      parent,
      ["setup", cardConfig.Color],
      "setup",
    );

    // "Gift" section.
    var giftNode = htmlUtils.addDiv(cardFrontNode, ["gift"], "gift");

    // Header.
    var giftHeaderNode = htmlUtils.addDiv(
      giftNode,
      ["header"],
      "header",
      "You like:",
    );

    // add the gift preferences.
    var giftPropertiesNode = htmlUtils.addDiv(
      giftNode,
      ["gift-properties"],
      "gift-properties",
    );

    utils.addPropertiesToNode(
      giftPropertiesNode,
      gameInfo.giftPropertiesArray,
      cardConfig.giftPropertyTable,
      gameInfo.deckTypes.Setup,
    );

    // "Package" section.
    var packageNode = htmlUtils.addDiv(cardFrontNode, ["package"], "package");

    // Header.
    var packageHeaderNode = htmlUtils.addDiv(
      packageNode,
      ["header"],
      "header",
      "Your packages must have:",
    );

    // add the package preferences.
    var packagePropertiesNode = htmlUtils.addDiv(
      packageNode,
      ["package-properties"],
      "package-properties",
      true,
    );

    utils.addPropertiesToNode(
      packagePropertiesNode,
      gameInfo.packagePropertiesArray,
      cardConfig.packagePropertyTable,
      gameInfo.deckTypes.Setup,
    );

    return cardFrontNode;
  }

  function addCardBack(parent, index) {
    debugLog("addCardBack", "index = " + index);
    var cardBackNode = htmlUtils.addDiv(parent, ["card", "back", "setup"]);

    var textNode = htmlUtils.addDiv(
      cardBackNode,
      ["text"],
      "setup-text",
      "Secret",
    );

    return cardBackNode;
  }

  return {
    addCardFront: addCardFront,
    addCardBack: addCardBack,
  };
});
