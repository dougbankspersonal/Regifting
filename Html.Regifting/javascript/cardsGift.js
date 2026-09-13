define([
  "sharedJavascript/cards",
  "sharedJavascript/debugLog",
  "sharedJavascript/htmlUtils",
  "javascript/gameInfo",
  "javascript/cardsGiftData",
  "javascript/utils",
  "dojo/domReady!",
], function (cards, debugLogModule, htmlUtils, gameInfo, cardsGiftData, utils) {
  var debugLog = debugLogModule.debugLog;
  var serialNumber = 0;

  function addCardFront(parent, index) {
    var cardConfigs = cardsGiftData.getCardConfigs();
    var cardConfig = cards.getCardConfigAtIndex(cardConfigs, index);

    var cardFrontClasses = [];
    if (cardConfig.special && cardConfig.special.cardClasses) {
      cardFrontClasses = cardConfig.special.cardClasses;
    } else {
      cardFrontClasses.push(cardConfig[gameInfo.giftProperties.Color]);
    }
    cardFrontClasses.push("gift");
    var cardFrontNode = cards.addCardFront(parent, cardFrontClasses, "package");

    debugLog("addCardFront", "cardConfig = ", JSON.stringify(cardConfig));

    const serialNumberString = String(serialNumber).padStart(3, "0");
    htmlUtils.addDiv(
      cardFrontNode,
      ["serial-number"],
      "serial-number",
      "#" + serialNumberString,
    );

    if (cardConfig.special) {
      var imageClasses = cardConfig.special.imageClasses;
      imageClasses = imageClasses.concat("special-image");
      htmlUtils.addImage(cardFrontNode, imageClasses, "special-image");
      var textClasses = cardConfig.special.textClasses;
      textClasses = textClasses.concat("special-text");
      htmlUtils.addDiv(
        cardFrontNode,
        textClasses,
        "special-text",
        cardConfig.special.text,
      );
    } else {
      utils.addPropertiesToNode(
        cardFrontNode,
        gameInfo.giftPropertiesArray,
        cardConfig,
        gameInfo.deckTypes.Gift,
      );

      var titleString = "";
      var colorString = utils.getPropertyValueText(
        cardConfig[gameInfo.giftProperties.Color],
      );
      var sentimentString = utils.getPropertyValueText(
        cardConfig[gameInfo.giftProperties.Sentiment],
      );
      var itemString = utils.getPropertyValueText(
        cardConfig[gameInfo.giftProperties.Item],
      );
      var titleString =
        colorString + ' "' + sentimentString + '" ' + itemString;
      htmlUtils.addDiv(cardFrontNode, ["title"], "title", titleString);
    }

    serialNumber++;
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
