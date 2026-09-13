define([
  "sharedJavascript/debugLog",
  "javascript/gameInfo",
  "dojo/domReady!",
], function (debugLogModule, gameInfo) {
  var debugLog = debugLogModule.debugLog;

  var gTokenDieConfigs = null;

  function getPackageTokensDieConfig() {
    var dieConfig = {};
    dieConfig.classes = ["tokens", "package"];

    var faceConfigs = [];

    var packagePropertyArraysByType = gameInfo.packagePropertyArraysByType;
    for (var propertyType in packagePropertyArraysByType) {
      var propertyArray = packagePropertyArraysByType[propertyType];
      for (var i = 0; i < propertyArray.length; i++) {
        var property = propertyArray[i];
        var faceConfig = {
          classes: ["token", "package", propertyType, property],
          imageClasses: [property],
        };
        faceConfigs.push(faceConfig);
      }
    }

    dieConfig.faces = faceConfigs;
    return dieConfig;
  }

  function getPlayerDieConfig() {
    var dieConfig = {};
    dieConfig.classes = ["tokens", "player"];

    var faceConfigs = [];

    for (var i = 0; i < gameInfo.numPlayers; i++) {
      var faceConfig = {
        classes: ["token", "player", "player-" + i],
        textClasses: ["player"],
        text: "" + (i + 1),
      };
      faceConfigs.push(faceConfig);
    }

    dieConfig.faces = faceConfigs;
    return dieConfig;
  }

  function generateTokenDieConfigs() {
    if (gTokenDieConfigs !== null) {
      return gTokenDieConfigs;
    }

    gTokenDieConfigs = [];
    var packageTokensDieConfig = getPackageTokensDieConfig();
    gTokenDieConfigs.push(packageTokensDieConfig);

    var playerDieConfig = getPlayerDieConfig();
    gTokenDieConfigs.push(playerDieConfig);

    debugLog(
      "generateTokenDieConfigs",
      "gTokenDieConfigs = ",
      JSON.stringify(gTokenDieConfigs),
    );

    return gTokenDieConfigs;
  }

  function getTokenDieConfigs() {
    generateTokenDieConfigs();
    return gTokenDieConfigs;
  }

  return {
    getTokenDieConfigs: getTokenDieConfigs,
  };
});
