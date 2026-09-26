define([
  "sharedJavascript/debugLog",
  "sharedJavascript/screentop/seatColors",
  "dojo/dom-style",
  "dojo/domReady!",
], function (debugLogModule, seatColors, domStyle) {
  var debugLog = debugLogModule.debugLog;

  function customizeNodeForPlayerIndex(node, playerIndex) {
    // customize colors.
    var borderColor = seatColors.seatColors[playerIndex];
    var backgroundColorA = seatColors.lightenedSeatColors[playerIndex];
    var backgroundColorB = seatColors.extraLightenedSeatColors[playerIndex];

    domStyle.set(node, {
      "box-shadow":
        "inset 0 0 0 5px " +
        borderColor +
        "," +
        "inset 0 0 0 7px #ffffff," +
        "0 4px 10px rgba(0, 0, 0, 0.3)",
      background:
        "linear-gradient(" + backgroundColorA + ", " + backgroundColorB + ")",
    });
  }
  return {
    customizeNodeForPlayerIndex: customizeNodeForPlayerIndex,
  };
});
