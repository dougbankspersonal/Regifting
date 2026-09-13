define([
  "sharedJavascript/cards",
  "sharedJavascript/debugLog",
  "sharedJavascript/genericUtils",
  "javascript/gameInfo",
  "dojo/domReady!",
], function (cards, debugLogModule, genericUtils, gameInfo) {
  var debugLog = debugLogModule.debugLog;

  const gNumCardConfigs = 40;
  const seededZeroToOneRandomFunction =
    genericUtils.createSeededGetZeroToOneRandomFunction(10337443);

  var gCardConfigs = null;

  function getRandomPropertyTable(propertyArraysByType, numProperties) {
    // Get Keys of table.
    var propertyArrays = Object.keys(propertyArraysByType);
    // Get n of those.
    var selectedPropertyTypes = genericUtils.getRandomNonRepeatingArrayElements(
      propertyArrays,
      numProperties,
      seededZeroToOneRandomFunction,
    );

    var propertyTable = [];
    // For each key get a random value.
    for (let propertyType of selectedPropertyTypes) {
      var valuesArray = propertyArraysByType[propertyType];
      var propertyValue = genericUtils.getRandomArrayElement(
        valuesArray,
        seededZeroToOneRandomFunction,
      );
      propertyTable[propertyType] = propertyValue;
    }

    return propertyTable;
  }

  function generateRandomSetupConfig() {
    var giftPropertyTable = getRandomPropertyTable(
      gameInfo.giftPropertyArraysByType,
      3,
    );
    var packagePropertyTable = getRandomPropertyTable(
      gameInfo.packagePropertyArraysByType,
      1,
    );
    return {
      giftPropertyTable: giftPropertyTable,
      packagePropertyTable: packagePropertyTable,
    };
  }

  function generateCardConfigs() {
    if (gCardConfigs) {
      return;
    }
    gCardConfigs = [];

    for (let i = 0; i < gNumCardConfigs; i++) {
      var randomConfig = generateRandomSetupConfig();
      gCardConfigs.push(randomConfig);
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
  // This returned object becomes the defined value of this module
  return {
    getNumCards: getNumCards,
    getCardConfigs: getCardConfigs,
  };
});
