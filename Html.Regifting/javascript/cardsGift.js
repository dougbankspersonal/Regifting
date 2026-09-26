define([
  "sharedJavascript/cards",
  "sharedJavascript/debugLog",
  "sharedJavascript/htmlUtils",
  "javascript/cardsGiftData",
  "javascript/utils",
  "dojo/domReady!",
], function (cards, debugLogModule, htmlUtils, cardsGiftData, utils) {
  var debugLog = debugLogModule.debugLog;

  function addCardFront(parent, index) {
    var cardConfigs = cardsGiftData.getCardConfigs();
    var cardConfig = cards.getCardConfigAtIndex(cardConfigs, index);

    debugLog("addCardFront", "cardConfig = ", JSON.stringify(cardConfig));

    var playerIndex = cardConfig.playerIndex;

    var cardFrontClasses = ["gift", "player-" + cardConfig.playerIndex];
    var cardFrontNode = cards.addCardFront(
      parent,
      cardFrontClasses,
      "gift-front",
    );

    // customize colors.
    utils.customizeNodeForPlayerIndex(cardFrontNode, playerIndex);

    htmlUtils.addDiv(
      cardFrontNode,
      ["scoring", "haul"],
      "scoring-haul",
      "Haul: <span class=value>" + cardConfig.haul + "</span>",
    );
    htmlUtils.addDiv(
      cardFrontNode,
      ["scoring", "shame"],
      "scoring-shame",
      "Shame: <span class=value>" + cardConfig.shame + "</span>",
    );

    // Image.
    var imageClasses = structuredClone(cardConfig.imageClasses);
    var imageNode = htmlUtils.addImage(
      cardFrontNode,
      imageClasses,
      "gift-image",
    );

    var textWrapperNode = htmlUtils.addDiv(
      cardFrontNode,
      ["text-wrapper"],
      "gift-text-wrapper",
    );
    var textNode = htmlUtils.addDiv(
      textWrapperNode,
      ["text"],
      "gift-text",
      cardConfig.text,
    );

    return cardFrontNode;
  }

  function addCardBack(parent, index) {
    debugLog("addCardBack", "index = " + index);
    var backClasses = ["card", "back", "gift"];

    var cardBackNode = htmlUtils.addDiv(parent, backClasses);
    var textNode = htmlUtils.addDiv(
      cardBackNode,
      ["text"],
      "gift-text",
      "Gift",
    );

    var giftImageNode = htmlUtils.addImage(
      cardBackNode,
      ["container-box"],
      "gift-image",
    );

    return cardBackNode;
  }

  return {
    addCardFront: addCardFront,
    addCardBack: addCardBack,
  };
});
