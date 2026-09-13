define([
  "sharedJavascript/debugLog",
  "sharedJavascript/htmlUtils",
  "javascript/gameInfo",
  "dojo/domReady!",
], function (debugLogModule, htmlUtils, gameInfo) {
  var debugLog = debugLogModule.debugLog;

  function getPropertyValueText(propertyValue) {
    /*
    if (propertyValue == gameInfo.brands.PlumAndThistle) {
      return "Plum & Thistle";
    }
    if (propertyValue == gameInfo.brands.Evelyn) {
      return "Evelyn";
    }
    if (propertyValue == gameInfo.brands.Hearthside) {
      return "Hearthside";
    }
    if (propertyValue == gameInfo.brands.Soren) {
      return "Søren";
    }
      */
    if (propertyValue == gameInfo.sentiments.Love) {
      return "Love";
    }
    if (propertyValue == gameInfo.sentiments.Home) {
      return "Home";
    }
    if (propertyValue == gameInfo.sentiments.Peace) {
      return "Peace";
    }
    if (propertyValue == gameInfo.sentiments.Wine) {
      return "Wine";
    }
    if (propertyValue == gameInfo.colors.Red) {
      return "Red";
    }
    if (propertyValue == gameInfo.colors.Blue) {
      return "Blue";
    }
    if (propertyValue == gameInfo.colors.Green) {
      return "Green";
    }
    if (propertyValue == gameInfo.colors.White) {
      return "White";
    }
    if (propertyValue == gameInfo.items.Mug) {
      return "Mug";
    }
    if (propertyValue == gameInfo.items.Teddy) {
      return "Teddy";
    }
    if (propertyValue == gameInfo.items.Candle) {
      return "Candle";
    }
    if (propertyValue == gameInfo.items.Salts) {
      return "Bath Salts";
    }
    return null;
  }

  function addPropertyNodes(
    parent,
    deckType,
    propertyTypesToValues,
    propertyType,
  ) {
    const propertyValue = propertyTypesToValues[propertyType];
    console.assert(
      propertyValue !== undefined,
      "Property value must be defined",
    );
    // Special cases:
    // Items on gift: combine with color.
    if (
      deckType == gameInfo.deckTypes.Gift &&
      propertyType == gameInfo.giftProperties.Item
    ) {
      var colorProperty = propertyTypesToValues[gameInfo.giftProperties.Color];
      console.assert(
        colorProperty !== undefined,
        "Color property must be defined",
      );
      htmlUtils.addImage(
        parent,
        [deckType, propertyType, propertyValue + "-" + colorProperty],
        propertyType,
      );
      return;
    }
    // Color on gift: skip.
    if (
      deckType == gameInfo.deckTypes.Gift &&
      propertyType == gameInfo.giftProperties.Color
    ) {
      return;
    }

    // Parttern on package: no.
    if (
      deckType == gameInfo.deckTypes.Package &&
      propertyType == gameInfo.packageProperties.Pattern
    ) {
      return;
    }

    var propertyValueText = getPropertyValueText(propertyValue);
    debugLog(
      "addPropertyNodes",
      "deckType = " +
        deckType +
        ", propertyType = " +
        propertyType +
        ", propertyValue = " +
        propertyValue,
    );
    debugLog("addPropertyNodes", "propertyValueText = " + propertyValueText);

    // Text nodes:
    if (propertyValueText) {
      // Special: Sentiment and brand get wrappers.
      var textContainer = parent;
      if (propertyType == gameInfo.giftProperties.Sentiment) {
        // Sentiment gets a special wrapper.
        textContainer = htmlUtils.addDiv(
          parent,
          ["sentiment-wrapper", propertyValue],
          "sentiment-wrapper",
        );
        /*
      } else if (propertyType == gameInfo.giftProperties.Brand) {
        // Brand gets a special wrapper.
        textContainer = htmlUtils.addDiv(
          parent,
          ["brand-wrapper", propertyValue],
          "brand-wrapper",
        );
        */
      }
      htmlUtils.addDiv(
        textContainer,
        ["text", deckType, propertyType, propertyValue],
        propertyType,
        propertyValueText,
      );
      return;
    }

    debugLog(
      "addPropertyValues",
      "gameInfo.deckTypes = ",
      JSON.stringify(gameInfo.deckTypes),
    );
    debugLog(
      "addPropertyValues",
      "gameInfo.giftProperties = ",
      JSON.stringify(gameInfo.giftProperties),
    );

    // Anything else: just image.
    htmlUtils.addImage(
      parent,
      [deckType, propertyType, propertyValue],
      propertyType,
    );
  }

  function addPropertiesToNode(
    parent,
    orderedPropertyTypesArray,
    propertyTypesToValues,
    deckType,
  ) {
    debugLog(
      " ",
      "propertyTypesToValues = " + JSON.stringify(propertyTypesToValues),
    );
    console.assert(deckType !== undefined, "Deck type must be defined");

    for (var i = 0; i < orderedPropertyTypesArray.length; i++) {
      var propertyType = orderedPropertyTypesArray[i];
      var propertyValue = propertyTypesToValues[propertyType];
      debugLog("addPropertiesToNode", "i = " + i);
      debugLog("addPropertiesToNode", "propertyType = " + propertyType);
      debugLog("addPropertiesToNode", "propertyValue = " + propertyValue);

      debugLog(
        "addPropertiesToNode",
        "propertyType = " + JSON.stringify(propertyType),
      );
      debugLog(
        "addPropertiesToNode",
        "propertyValue = " + JSON.stringify(propertyValue),
      );

      addPropertyNodes(parent, deckType, propertyTypesToValues, propertyType);
    }
  }

  return {
    addPropertiesToNode: addPropertiesToNode,
    getPropertyValueText: getPropertyValueText,
  };
});
