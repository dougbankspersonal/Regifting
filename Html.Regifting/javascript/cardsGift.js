define([
  "sharedJavascript/cards",
  "sharedJavascript/debugLog",
  "sharedJavascript/htmlUtils",
  "javascript/cardsGiftData",
  "dojo/domReady!",
], function (cards, debugLogModule, htmlUtils, cardsGiftData) {
  var debugLog = debugLogModule.debugLog;

  function addCardFront(parent, index) {
    var cardConfigs = cardsGiftData.getCardConfigs();
    var cardConfig = cards.getCardConfigAtIndex(cardConfigs, index);
    var cardFrontNode = cards.addCardFront(
      parent,
      ["gift", cardConfig.Color],
      "gift",
    );

    // Brand/Style/Scent/Color/Item/Sentiment
    htmlUtils.addDiv(
      cardFrontNode,
      ["text", "color", cardConfig.Color],
      "gift-color",
      cardsGiftData.getPropertyValueText(cardConfig.Color),
    );

    htmlUtils.addDiv(
      cardFrontNode,
      ["text", "brand", cardConfig.Brand],
      "gift-brand",
      cardsGiftData.getPropertyValueText(cardConfig.Brand),
    );
    htmlUtils.addDiv(
      cardFrontNode,
      ["text", "style", cardConfig.Style],
      "gift-style",
      cardsGiftData.getPropertyValueText(cardConfig.Style),
    );
    htmlUtils.addDiv(
      cardFrontNode,
      ["text", "scent", cardConfig.Scent],
      "gift-scent",
      cardsGiftData.getPropertyValueText(cardConfig.Scent),
    );
    htmlUtils.addDiv(
      cardFrontNode,
      ["text", "sentiment", cardConfig.Sentiment],
      "gift-sentiment",
      '"' + cardsGiftData.getPropertyValueText(cardConfig.Sentiment) + '"',
    );
    htmlUtils.addImage(cardFrontNode, ["item", cardConfig.Item], "gift-item");

    return cardFrontNode;
  }

  function addCardBack(parent, index) {
    debugLog("addCardBack", "index = " + index);
    var cardBackNode = htmlUtils.addDiv(parent, ["card", "back", "gift"]);

    var textNode = htmlUtils.addDiv(
      cardBackNode,
      ["text"],
      "gift-text",
      "Gift",
    );

    return cardBackNode;
  }

  return {
    addCardFront: addCardFront,
    addCardBack: addCardBack,
  };
});
