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
  const gNumPlayers = 8;

  const gGiftPropertyItem = "property-item";
  //  const gGiftPropertyBrand = "property-brand";
  const gGiftPropertyColor = "property-color";
  const gGiftPropertySentiment = "property-sentiment";

  const gGiftProperties = {
    Color: gGiftPropertyColor,
    //    Brand: gGiftPropertyBrand,
    Sentiment: gGiftPropertySentiment,
    Item: gGiftPropertyItem,
  };

  const gGiftPropertiesArray = [
    gGiftPropertyColor,
    //    gGiftPropertyBrand,
    gGiftPropertySentiment,
    gGiftPropertyItem,
  ];

  const gItemCandle = "item-candle";
  const gItemMug = "item-mug";
  const gItemSalts = "item-salts";
  const gItemTeddy = "item-teddy";

  const gItems = {
    Candle: gItemCandle,
    Mug: gItemMug,
    Salts: gItemSalts,
    Teddy: gItemTeddy,
  };
  const gItemsArray = Object.values(gItems);

  /*
  const gBrandPlumAndThistle = "brand-plum-and-thistle";
  const gBrandEvelyn = "brand-evelyn";
  const gBrandHearthside = "brand-hearthside";
  const gBrandSoren = "brand-soren";

  const gBrands = {
    PlumAndThistle: gBrandPlumAndThistle,
    Evelyn: gBrandEvelyn,
    Hearthside: gBrandHearthside,
    Soren: gBrandSoren,
  };
  const gBrandsArray = Object.values(gBrands);
*/

  const gColorRed = "color-red";
  const gColorGreen = "color-green";
  const gColorBlue = "color-blue";
  const gColorWhite = "color-white";

  const gColors = {
    Red: gColorRed,
    Green: gColorGreen,
    Blue: gColorBlue,
    White: gColorWhite,
  };
  const gColorsArray = Object.values(gColors);

  const gSentimentLove = "sentiment-love";
  const gSentimentHome = "sentiment-home";
  const gSentimentPeace = "sentiment-peace";
  const gSentimentWine = "sentiment-wine";

  const gSentiments = {
    Love: gSentimentLove,
    Home: gSentimentHome,
    Peace: gSentimentPeace,
    Wine: gSentimentWine,
  };
  const gSentimentsArray = Object.values(gSentiments);

  const gGiftPropertyArraysByType = {
    [gGiftProperties.Item]: gItemsArray,
    // [gGiftProperties.Brand]: gBrandsArray,
    [gGiftProperties.Color]: gColorsArray,
    [gGiftProperties.Sentiment]: gSentimentsArray,
  };

  const gPackagePropertyBowColor = "property-bow-color";
  const gPackagePropertyPattern = "property-pattern";
  const gPackagePropertyDecoration = "property-decoration";
  const gPackagePropertyContainer = "property-container";

  const gPackageProperties = {
    BowColor: gPackagePropertyBowColor,
    Pattern: gPackagePropertyPattern,
    Decoration: gPackagePropertyDecoration,
    Container: gPackagePropertyContainer,
  };

  const gPackagePropertiesArray = [
    gPackagePropertyBowColor,
    gPackagePropertyPattern,
    gPackagePropertyDecoration,
    gPackagePropertyContainer,
  ];

  const gBowColorSilver = "bow-color-silver";
  const gBowColorGold = "bow-color-gold";

  const gBowColors = {
    Silver: gBowColorSilver,
    Gold: gBowColorGold,
  };
  const gBowColorsArray = Object.values(gBowColors);

  const gPatternTrees = "pattern-trees";
  const gPatternStripes = "pattern-stripes";

  const gPatterns = {
    Trees: gPatternTrees,
    Stripes: gPatternStripes,
  };
  const gPatternsArray = Object.values(gPatterns);

  const gDecorationHolly = "decoration-holly";
  const gDecorationCandyCane = "decoration-candy-cane";
  const gDecorations = {
    Holly: gDecorationHolly,
    CandyCane: gDecorationCandyCane,
  };
  const gDecorationsArray = Object.values(gDecorations);

  const gContainerBox = "container-box";
  const gContainerBag = "container-bag";
  const gContainers = {
    Box: gContainerBox,
    Bag: gContainerBag,
  };
  const gContainersArray = Object.values(gContainers);

  const gPackagePropertyArraysByType = {
    [gPackagePropertyBowColor]: gBowColorsArray,
    [gPackagePropertyPattern]: gPatternsArray,
    [gPackagePropertyDecoration]: gDecorationsArray,
    [gPackagePropertyContainer]: gContainersArray,
  };

  const gDeckTypeGift = "deck-gift";
  const gDeckTypePackage = "deck-package";
  const gDeckTypeSetup = "deck-setup";

  const gDeckTypes = {
    Gift: gDeckTypeGift,
    Package: gDeckTypePackage,
    Setup: gDeckTypeSetup,
  };

  // This returned object becomes the defined value of this module
  return {
    itemsArray: gItemsArray,
    //    brandsArray: gBrandsArray,
    colorsArray: gColorsArray,
    sentimentsArray: gSentimentsArray,

    items: gItems,
    // brands: gBrands,
    colors: gColors,
    sentiments: gSentiments,

    bowColorsArray: gBowColorsArray,
    patternsArray: gPatternsArray,
    decorationsArray: gDecorationsArray,
    containersArray: gContainersArray,

    giftPropertyArraysByType: gGiftPropertyArraysByType,
    packagePropertyArraysByType: gPackagePropertyArraysByType,

    giftPropertiesArray: gGiftPropertiesArray,
    packagePropertiesArray: gPackagePropertiesArray,

    giftProperties: gGiftProperties,
    packageProperties: gPackageProperties,

    deckTypes: gDeckTypes,
    numPlayers: gNumPlayers,
  };
});
