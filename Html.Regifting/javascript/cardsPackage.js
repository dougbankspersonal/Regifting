define([
  "sharedJavascript/cards",
  "sharedJavascript/debugLog",
  "sharedJavascript/htmlUtils",
  "javascript/cardsPackageData",
  "dojo/domReady!",
], function (cards, debugLogModule, htmlUtils, cardsPackageData) {
  var debugLog = debugLogModule.debugLog;

  function addCardFront(parent, index) {
    var cardConfigs = cardsPackageData.getCardConfigs();
    var cardConfig = cards.getCardConfigAtIndex(cardConfigs, index);
    var cardFrontNode = cards.addCardFront(
      parent,
      ["package", cardConfig.Color],
      "package",
    );

    // Bow color and count.
    var bowsNode = htmlUtils.addDiv(cardFrontNode, ["bows"], "package-bows");
    for (var i = 0; i < cardConfig.BowCount; i++) {
      htmlUtils.addImage(
        bowsNode,
        ["bow", "bow-count-" + cardConfig.BowCount, cardConfig.BowColor],
        "bow-color",
      );
    }

    htmlUtils.addImage(
      cardFrontNode,
      ["decoration", cardConfig.Decoration],
      "decoration",
    );

    htmlUtils.addImage(
      cardFrontNode,
      ["container", cardConfig.Container],
      "container",
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
