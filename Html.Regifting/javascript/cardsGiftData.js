define([
  "sharedJavascript/cards",
  "sharedJavascript/debugLog",
  "dojo/domReady!",
], function (cards, debugLogModule) {
  var debugLog = debugLogModule.debugLog;
  //-----------------------------------
  //
  // Constants
  //
  //-----------------------------------
  const gGiftPropertyItem = "property-item";
  const gGiftPropertyBrand = "property-brand";
  const gGiftPropertyColor = "property-color";
  const gGiftPropertyScent = "property-scent";
  const gGiftPropertyStyle = "proprety-style";
  const gGiftPropertySentiment = "property-sentiment";

  const gProperties = {
    Item: gGiftPropertyItem,
    Brand: gGiftPropertyBrand,
    Color: gGiftPropertyColor,
    Scent: gGiftPropertyScent,
    Style: gGiftPropertyStyle,
    Sentiment: gGiftPropertySentiment,
  };

  const gPropertiesArray = Object.values(gProperties);

  const gItemCandle = "item-candle";
  const gItemMug = "item-mug";

  const gItems = {
    Candle: gItemCandle,
    Mug: gItemMug,
  };
  const gItemsArray = Object.values(gItems);

  const gBrandPlumAndThistle = "brand-plum-and-thistle";
  const gBrandAlySmith = "brand-aly-smith";

  const gBrands = {
    PlumAndThistle: gBrandPlumAndThistle,
    AlySmith: gBrandAlySmith,
  };
  const gBrandsArray = Object.values(gBrands);

  const gColorRed = "color-red";
  const gColorGreen = "color-green";

  const gColors = {
    Red: gColorRed,
    Green: gColorGreen,
  };
  const gColorsArray = Object.values(gColors);

  const gScentLavender = "scent-lavender";
  const gScentPine = "scent-pine";

  const gScents = {
    Lavender: gScentLavender,
    Pine: gScentPine,
  };
  const gScentsArray = Object.values(gScents);

  const gStyleModern = "style-modern";
  const gStyleCountry = "style-country";

  const gStyles = {
    Modern: gStyleModern,
    Country: gStyleCountry,
  };
  const gStylesArray = Object.values(gStyles);

  const gSentimentLove = "Love";
  const gSentimentHome = "Home";

  const gSentiments = {
    Love: gSentimentLove,
    Home: gSentimentHome,
  };
  const gSentimentsArray = Object.values(gSentiments);

  const gPropertyArraysByType = {
    Item: gItemsArray,
    Brand: gBrandsArray,
    Color: gColorsArray,
    Scent: gScentsArray,
    Style: gStylesArray,
    Sentiment: gSentimentsArray,
  };

  //-----------------------------------
  //
  // Global state.
  //
  //-----------------------------------
  var gCardConfigs = null;

  function generateCardConfigs() {
    if (gCardConfigs !== null) {
      return gCardConfigs;
    }
    gCardConfigs = [];

    // Just one of each possibility.
    for (const item of gItemsArray) {
      for (const brand of gBrandsArray) {
        for (const color of gColorsArray) {
          for (const scent of gScentsArray) {
            for (const style of gStylesArray) {
              for (const sentiment of gSentimentsArray) {
                gCardConfigs.push({
                  Item: item,
                  Brand: brand,
                  Color: color,
                  Scent: scent,
                  Style: style,
                  Sentiment: sentiment,
                });
              }
            }
          }
        }
      }
    }

    return gCardConfigs;
  }

  function getCardConfigs() {
    generateCardConfigs();

    console.assert(
      gCardConfigs,
      "getNumCards called before generateCardConfigs",
    );
    debugLog("getCardConfigs: gCardConfigs.length = ", gCardConfigs.length);
    return gCardConfigs;
  }

  function getNumCards() {
    generateCardConfigs();
    console.assert(
      gCardConfigs,
      "getNumCards called before generateCardConfigs",
    );
    return cards.getNumCardsFromConfigs(gCardConfigs);
  }

  function getPropertyValueText(propertyValue) {
    if (propertyValue == gScentLavender) {
      return "Lavender";
    }
    if (propertyValue == gScentPine) {
      return "Pine";
    }
    if (propertyValue == gColorRed) {
      return "Red";
    }
    if (propertyValue == gColorGreen) {
      return "Green";
    }
    if (propertyValue == gBrandPlumAndThistle) {
      return "Plum & Thistle";
    }
    if (propertyValue == gBrandAlySmith) {
      return "Aly Smith";
    }
    if (propertyValue == gSentimentLove) {
      return "Love ❤️";
    }
    if (propertyValue == gSentimentHome) {
      return "Home 🏠";
    }

    if (propertyValue == gStyleModern) {
      return "Modern";
    }
    if (propertyValue == gStyleCountry) {
      return "Country";
    }

    return propertyValue;
  }

  // This returned object becomes the defined value of this module
  return {
    getNumCards: getNumCards,
    getCardConfigs: getCardConfigs,
    getPropertyValueText: getPropertyValueText,
  };
});
