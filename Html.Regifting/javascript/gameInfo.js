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
  const gNumPlayers = 6;

  const gLowEndVanillaGiftTitles = [
    "Mug",
    "Ornament",
    "Can of Beans",
    "Lottery Scratchers",
    "Car Air Freshener",
  ];

  const gMidRangeVanillaGiftTitles = [
    "Decorative Shell",
    "Pine-Scented Bear",
    "Ocean Breeze Bath Salts",
    "Danish Cookie Tin",
    "Necktie",
  ];

  const gHighEndVanillaGiftTitles = [
    "Singing Fish",
    "Scented Soaps",
    "Holiday Sweater",
    "Wine",
    "Slanket",
  ];

  const gVanillaGiftTitleArrays = [
    gLowEndVanillaGiftTitles,
    gMidRangeVanillaGiftTitles,
    gHighEndVanillaGiftTitles,
  ];

  const gNumVanillaClasses = gVanillaGiftTitleArrays.length;
  const gTypesPerVanillaClass = gLowEndVanillaGiftTitles.length;
  console.assert(
    gTypesPerVanillaClass == gMidRangeVanillaGiftTitles.length,
    "Should be same length",
  );
  console.assert(
    gTypesPerVanillaClass == gHighEndVanillaGiftTitles.length,
    "Should be same length",
  );
  const gCopiesPerVanillaCard = 1;

  // This returned object becomes the defined value of this module
  return {
    numPlayers: gNumPlayers,
    numVanillaClasses: gNumVanillaClasses,
    typesPerVanillaClass: gTypesPerVanillaClass,
    copiesPerVanillaCard: gCopiesPerVanillaCard,
    vanillaGiftTitleArrays: gVanillaGiftTitleArrays,
  };
});
