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

  const gTier0GiftConfigs = [
    {
      imageClasses: ["beans"],
      title: "Can of Beans",
    },
    {
      imageClasses: ["scratchers"],
      title: "Lottery Scratchers",
    },
  ];

  const gTier1GiftConfigs = [
    {
      imageClasses: ["salts"],
      title: "Bath Salts",
    },
    {
      imageClasses: ["mug"],
      title: "Mug",
    },
  ];

  const gTier2GiftConfigs = [
    {
      imageClasses: ["slanket"],
      title: "Slanket",
    },
    {
      imageClasses: ["singing-fish"],
      title: "Singing Fish",
    },
  ];

  const gGiftConfigsByTier = [
    gTier0GiftConfigs,
    gTier1GiftConfigs,
    gTier2GiftConfigs,
  ];

  // This returned object becomes the defined value of this module
  return {
    numPlayers: gNumPlayers,
    giftConfigsByTier: gGiftConfigsByTier,
  };
});
