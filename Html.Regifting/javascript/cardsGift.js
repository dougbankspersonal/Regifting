define([
  "sharedJavascript/cards",
  "sharedJavascript/debugLog",
  "sharedJavascript/htmlUtils",
  "javascript/cardsGiftData",
  "javascript/utils",
  "dojo/domReady!",
], function (cards, debugLogModule, htmlUtils, cardsGiftData, utils) {
  var debugLog = debugLogModule.debugLog;

  function addCardFrontShared(parent, cardConfig, opt_extraClasses) {
    var cardFrontClasses = opt_extraClasses ? opt_extraClasses : [];
    cardFrontClasses = cardFrontClasses.concat([
      "gift",
      "player-" + cardConfig.playerIndex,
    ]);

    var cardFrontNode = cards.addCardFront(
      parent,
      cardFrontClasses,
      "gift-front",
    );

    var scoringNode = htmlUtils.addDiv(cardFrontNode, ["scoring"], "scoring");

    var keepClasses = cardConfig.keepClasses ? cardConfig.keepClasses : [];
    keepClasses = keepClasses.concat(["scoring-type", "keep"]);

    htmlUtils.addDiv(
      scoringNode,
      keepClasses,
      "scoring-keep",
      "Keep: <span class=value>" + cardConfig.keep + "</span>",
    );

    var shameClasses = cardConfig.shameClasses ? cardConfig.shameClasses : [];
    shameClasses = shameClasses.concat(["scoring-type", "shame"]);

    htmlUtils.addDiv(
      scoringNode,
      shameClasses,
      "scoring-shame",
      "Shame: <span class=value>" + cardConfig.shame + "</span>",
    );

    // Is there special text?
    if (cardConfig.specialText) {
      htmlUtils.addDiv(
        cardFrontNode,
        ["special-text"],
        "special-text",
        cardConfig.specialText,
      );
    }

    // Image.
    var imageClasses = structuredClone(cardConfig.imageClasses);
    var imageNode = htmlUtils.addImage(
      cardFrontNode,
      imageClasses,
      "gift-image",
    );

    var titleWrapperNode = htmlUtils.addDiv(
      cardFrontNode,
      ["title-wrapper"],
      "gift-title-wrapper",
    );
    var title = htmlUtils.addDiv(
      titleWrapperNode,
      ["title"],
      "gift-title",
      cardConfig.title,
    );

    return cardFrontNode;
  }

  function addCardFront(parent, index) {
    var cardConfigs = cardsGiftData.getCardConfigs();
    var cardConfig = cards.getCardConfigAtIndex(cardConfigs, index);

    debugLog("addCardFront", "cardConfig = ", JSON.stringify(cardConfig));

    var playerIndex = cardConfig.playerIndex;

    return addCardFrontShared(parent, cardConfig);
  }

  function addCardSpecialFront(parent, index) {
    var cardConfigs = cardsGiftData.getCardSpecialConfigs();
    var cardConfig = cards.getCardConfigAtIndex(cardConfigs, index);

    debugLog(
      "addCardSpecialFront",
      "cardConfig = ",
      JSON.stringify(cardConfig),
    );

    return addCardFrontShared(parent, cardConfig, ["special"]);
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
    addCardSpecialFront: addCardSpecialFront,
    addCardBack: addCardBack,
  };
});
