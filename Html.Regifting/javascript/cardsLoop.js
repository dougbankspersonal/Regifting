define([
  "sharedJavascript/cards",
  "sharedJavascript/debugLog",
  "sharedJavascript/htmlUtils",
  "javascript/cardsLoopData",
  "javascript/utils",
  "dojo/domReady!",
], function (cards, debugLogModule, htmlUtils, cardsLoopData, utils) {
  var debugLog = debugLogModule.debugLog;

  function addCardFront(parent, index) {
    var cardConfigs = cardsLoopData.getCardConfigs();
    var cardConfig = cards.getCardConfigAtIndex(cardConfigs, index);

    debugLog("addCardFront", "cardConfig = ", JSON.stringify(cardConfig));

    var playerIndex = cardConfig.playerIndex;

    var cardFrontClasses = ["loop", "player-" + cardConfig.playerIndex];
    var cardFrontNode = cards.addCardFront(
      parent,
      cardFrontClasses,
      "takes-from-front",
    );

    utils.customizeNodeForPlayerIndex(cardFrontNode, playerIndex);

    var textNode = htmlUtils.addDiv(
      cardFrontNode,
      ["text"],
      "text--div",
      cardConfig.text,
    );

    var imageNode = htmlUtils.addImage(
      cardFrontNode,
      ["player-arrow"],
      "player-arrow--image",
    );

    return cardFrontNode;
  }

  return {
    addCardFront: addCardFront,
  };
});
