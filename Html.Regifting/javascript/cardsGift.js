define([
  "sharedJavascript/cards",
  "sharedJavascript/debugLog",
  "sharedJavascript/htmlUtils",
  "javascript/cardsGiftData",
  "javascript/utils",
  "dojo/domReady!",
], function (cards, debugLogModule, htmlUtils, cardsGiftData, utils) {
  var debugLog = debugLogModule.debugLog;
  const gNumCardsForReward = 3;
  const outlinedStarText = "<span class='outlined-star'>⭐</span>";

  function addScoringNode(parent, cardConfig) {
    var scoringNode = htmlUtils.addDiv(parent, ["scoring"], "scoring");

    var keepClasses = cardConfig.keepClasses ? cardConfig.keepClasses : [];
    keepClasses = keepClasses.concat(["scoring-type", "keep"]);

    htmlUtils.addDiv(
      scoringNode,
      keepClasses,
      "scoring-keep",
      "Keep: <span class=value>" + cardConfig.keep + "</span>",
    );

    var shameClasses = ["scoring-type", "shame"];

    htmlUtils.addDiv(
      scoringNode,
      shameClasses,
      "scoring-shame",
      "Shame: <span class=value>" + cardConfig.shame + "</span>",
    );
    return scoringNode;
  }

  function addRewardNode(parent, cardConfig) {
    // Reward info?
    if (cardConfig.reward) {
      var rewardWrapperNode = htmlUtils.addDiv(
        parent,
        ["reward-wrapper"],
        "reward-wrapper",
      );

      for (var i = 0; i < gNumCardsForReward; i++) {
        htmlUtils.addDiv(
          rewardWrapperNode,
          ["minicard", "index-" + i],
          "reward-" + i,
        );
      }
      htmlUtils.addDiv(
        rewardWrapperNode,
        ["reward-text"],
        "reward-text",
        ":" + cardConfig.reward + outlinedStarText,
      );
    }
    return rewardWrapperNode;
  }

  function addImageNode(parent, cardConfig) {
    // Image.
    var imageClasses = structuredClone(cardConfig.imageClasses);
    var imageClasses = imageClasses.concat(
      [cardConfig.text ? "has-text" : "no-text"].concat(
        cardConfig.imageClasses,
      ),
    );
    var imageNode = htmlUtils.addImage(parent, imageClasses, "gift-image");
    return imageNode;
  }

  function addTitleNode(parent, cardConfig) {
    var titleWrapperNode = htmlUtils.addDiv(
      parent,
      ["title-wrapper"],
      "gift-title-wrapper",
    );
    var titleNode = htmlUtils.addDiv(
      titleWrapperNode,
      ["title"],
      "gift-title",
      cardConfig.title,
    );
    return titleNode;
  }

  function addCardFront(parent, index) {
    var cardConfigs = cardsGiftData.getCardConfigs();
    var cardConfig = cards.getCardConfigAtIndex(cardConfigs, index);

    debugLog("addCardFront", "cardConfig = ", JSON.stringify(cardConfig));

    var cardFrontClasses = ["gift", "player-" + cardConfig.playerIndex];

    var cardFrontNode = cards.addCardFront(
      parent,
      cardFrontClasses,
      "gift-front",
    );

    addScoringNode(cardFrontNode, cardConfig);

    // Is there special text?
    if (cardConfig.text) {
      htmlUtils.addDiv(cardFrontNode, ["text"], "text", cardConfig.text);
    }

    addRewardNode(cardFrontNode, cardConfig);

    addImageNode(cardFrontNode, cardConfig);
    addTitleNode(cardFrontNode, cardConfig);

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
