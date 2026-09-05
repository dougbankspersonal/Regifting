define([
  "sharedJavascript/debugLog",
  "sharedJavascript/htmlUtils",
  "javascript/bingoCardData",
  "dojo/domReady!",
], function (debugLogModule, htmlUtils, bingoCardData) {
  var debugLog = debugLogModule.debugLog;

  var squaresPerSide = 3; // FIXME (increase).

  function addBingoCardNode(parent, bingoCardConfig) {
    var pageNode = htmlUtils.addDiv(
      parent,
      ["bingo-card-page"],
      "bingo-card-page",
    );

    var title = htmlUtils.addDiv(
      pageNode,
      ["title"],
      "bingo-card-title",
      "Social Bingo",
    );

    var header = htmlUtils.addDiv(
      pageNode,
      ["header"],
      "bingo-card-header",
      "For each square, find someone who matches and have them sign the square.<br>You can only use a person once!",
    );

    var cardNode = htmlUtils.addDiv(pageNode, ["bingo-card"], "bingo-card");

    for (let row = 0; row < 5; row++) {
      var rowNode = htmlUtils.addDiv(
        cardNode,
        ["row", "row-" + row],
        "bingo-card-row",
      );
      for (let column = 0; column < 5; column++) {
        var questionIndex = row * 5 + column;
        var question = bingoCardConfig.question[questionIndex];
        debugLog(
          "addBingoCardNode",
          "questionIndex = ",
          questionIndex,
          "question = ",
          question,
        );
        var squareNode = htmlUtils.addDiv(
          rowNode,
          ["square", "row-" + row, "column-" + column],
          "bingo-card-square",
        );

        var questionNode = htmlUtils.addDiv(
          squareNode,
          ["question"],
          "bingo-card-question",
          question,
        );
      }
    }
  }

  function addBingoCards(parent, count) {
    for (let i = 0; i < count; i++) {
      var bingoCardConfig = bingoCardData.getRandomBingoCardConfig();
      var bingoCardNode = addBingoCardNode(parent, bingoCardConfig);
    }
  }

  return {
    addBingoCards: addBingoCards,
  };
});
