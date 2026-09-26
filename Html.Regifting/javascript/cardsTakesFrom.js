define([
  "sharedJavascript/cards",
  "sharedJavascript/debugLog",
  "sharedJavascript/htmlUtils",
  "javascript/cardsTakesFromData",
  "javascript/utils",
  "dojo/domReady!",
], function (cards, debugLogModule, htmlUtils, cardsTakesFromData, utils) {
  var debugLog = debugLogModule.debugLog;

  function addCardFront(parent, index) {
    var cardConfigs = cardsTakesFromData.getCardConfigs();
    var cardConfig = cards.getCardConfigAtIndex(cardConfigs, index);

    debugLog("addCardFront", "cardConfig = ", JSON.stringify(cardConfig));

    var playerIndex = cardConfig.playerIndex;

    var cardFrontClasses = ["takes-from", "player-" + cardConfig.playerIndex];
    var cardFrontNode = cards.addCardFront(
      parent,
      cardFrontClasses,
      "takes-from-front",
    );

    utils.customizeNodeForPlayerIndex(cardFrontNode, playerIndex);

    var imageNode = htmlUtils.addImage(
      cardFrontNode,
      ["takes-from"],
      "takes-from-image",
    );

    return cardFrontNode;
  }

  return {
    addCardFront: addCardFront,
  };
});
