define([
  "sharedJavascript/debugLog",
  "sharedJavascript/genericUtils",
  "dojo/domReady!",
], function (debugLogModule, genericUtils) {
  var debugLog = debugLogModule.debugLog;

  const questionsPerCard = 25;

  const seededZeroToOneRandomFunction =
    genericUtils.createSeededGetZeroToOneRandomFunction(8466428);

  const parametrizedQuestions = [
    {
      question: "Someone who has {0}",
      params: [
        "a twin",
        "an older brother",
        "an older sister",
        "four or more siblings",
      ],
    },

    {
      question: "Someone who has {0}",
      params: ["a pet snake", "a pet bird", "a pet rabbit", "a pet lizard"],
    },

    {
      question: "Someone who has played {0}",
      params: [
        "Dungeons & Dragons",
        "a tabletop war game",
        "a competitive trading-card game",
        "a murder-mystery game",
      ],
    },

    {
      question: "Someone who has performed in {0}",
      params: [
        "a musical",
        "a choir concert",
        "a dance recital",
        "a talent show",
      ],
    },

    {
      question: "Someone who has {0}",
      params: [
        "been on a sports team",
        "been on a debate team",
        "been on a robotics team",
        "been on a quiz team",
      ],
    },

    {
      question: "Someone who has learned to {0}",
      params: [
        "juggle",
        "do a backflip",
        "solve a Rubik's Cube",
        "whistle with their fingers",
      ],
    },

    {
      question: "Someone who has {0}",
      params: [
        "dyed their hair an unnatural color",
        "had a mohawk",
        "shaved part of their hair",
        "had hair longer than their shoulders",
      ],
    },

    {
      question: "Someone who has been to {0}",
      params: [
        "a Renaissance faire",
        "a comic convention",
        "a professional wrestling match",
        "a rodeo",
      ],
    },

    {
      question: "Someone who has ridden {0}",
      params: ["a horse", "a motorcycle", "a snowmobile", "a jet ski"],
    },

    {
      question: "Someone who has been {0}",
      params: [
        "scuba diving",
        "rock climbing",
        "whitewater rafting",
        "skydiving",
      ],
    },

    {
      question: "Someone who has eaten {0}",
      params: ["escargot", "octopus", "insects", "alligator"],
    },

    {
      question: "Someone who has {0}",
      params: [
        "made a stop-motion movie",
        "written a song",
        "written a comic book",
        "made a short film",
      ],
    },

    {
      question: "Someone who has won {0}",
      params: [
        "a spelling bee",
        "a chess tournament",
        "a sports championship",
        "a science competition",
      ],
    },

    {
      question: "Someone who can name {0} from memory",
      params: [
        "all seven Harry Potter books",
        "all the planets in order",
        "all the U.S. states",
        "all the original Pokémon",
      ],
    },

    {
      question: "Someone who has memorized {0}",
      params: [
        "the digits of pi",
        "a Shakespeare speech",
        "a rap verse",
        "a poem longer than 20 lines",
      ],
    },

    {
      question: "Someone who has been {0} at school",
      params: [
        "sent to the principal's office",
        "on the honor roll",
        "given detention",
        "called to the stage for an award",
      ],
    },

    {
      question: "Someone who has {0} during a school year",
      params: [
        "changed schools",
        "skipped a grade",
        "repeated a grade",
        "been homeschooled",
      ],
    },

    {
      question: "Someone who has had a job {0}",
      params: [
        "at a restaurant",
        "working with animals",
        "doing yard work",
        "babysitting",
      ],
    },

    {
      question: "Someone who has {0}",
      params: [
        "sold something they've made",
        "sold something online",
        "had a lemonade stand",
        "done a paid performance",
      ],
    },

    {
      question: "Someone who has been on {0}",
      params: [
        "a cruise ship",
        "a train overnight",
        "an airplane by themselves",
        "a road trip lasting more than a week",
      ],
    },

    {
      question: "Someone who has slept {0}",
      params: [
        "in a tent",
        "in a hammock",
        "in a sleeping bag under the stars",
        "in a treehouse",
      ],
    },

    {
      question: "Someone who has {0}",
      params: [
        "caught a fish",
        "held a snake",
        "ridden a horse",
        "climbed a tree taller than a house",
      ],
    },

    {
      question: "Someone who has been {0}",
      params: ["on a TV show", "in a newspaper", "on the radio", "in a movie"],
    },

    {
      question: "Someone who has met {0}",
      params: [
        "a professional athlete",
        "a famous musician",
        "a politician",
        "a published author",
      ],
    },

    {
      question: "Someone who has {0}",
      params: [
        "a driver's permit",
        "a black belt",
        "a lifeguard certification",
        "a first-aid certification",
      ],
    },

    {
      question: "Someone who has taken lessons in {0}",
      params: ["martial arts", "ballet", "ice skating", "horseback riding"],
    },

    {
      question: "Someone who regularly plays {0}",
      params: [
        "a brass instrument",
        "a woodwind instrument",
        "a string instrument",
        "a percussion instrument",
      ],
    },

    {
      question: "Someone who has been in {0}",
      params: ["a marching band", "an orchestra", "a jazz band", "a rock band"],
    },

    {
      question: "Someone who has created {0}",
      params: [
        "a video game",
        "a website",
        "an animated video",
        "a 3D-printed object",
      ],
    },

    {
      question: "Someone who has {0}",
      params: [
        "built a robot",
        "built a model rocket",
        "built a computer",
        "built a piece of furniture",
      ],
    },

    {
      question: "Someone who has participated in {0}",
      params: [
        "a spelling bee",
        "a science fair",
        "a geography bee",
        "a speech competition",
      ],
    },

    {
      question: "Someone who has been {0}",
      params: [
        "camping in the snow",
        "camping in the desert",
        "camping on a beach",
        "camping on an island",
      ],
    },

    {
      question: "Someone who has seen {0} in person",
      params: [
        "a rocket launch",
        "a solar eclipse",
        "the Northern Lights",
        "a volcano erupt",
      ],
    },

    {
      question: "Someone who has {0}",
      params: [
        "rescued an animal",
        "raised an animal from a baby",
        "fostered an animal",
        "helped deliver an animal's babies",
      ],
    },

    {
      question: "Someone who has {0}",
      params: [
        "appeared in a school newspaper",
        "given a speech to an audience of 100+ people",
        "performed on a stage in front of strangers",
        "spoken on a radio or podcast",
      ],
    },
  ];

  function getRandomBingoCardConfig() {
    // Get 8 random elements from the parametrizedQuestions array
    var parametrizedQuestionsSubset =
      genericUtils.getRandomNonRepeatingArrayElements(
        parametrizedQuestions,
        questionsPerCard,
        seededZeroToOneRandomFunction,
      );

    debugLog(
      "getRandomBingoCardConfig",
      "parametrizedQuestionsSubset = ",
      JSON.stringify(parametrizedQuestionsSubset),
    );

    // Turn each into a question.
    var questions = parametrizedQuestionsSubset.map(function (item) {
      debugLog(
        "getRandomBingoCardConfig",
        "item.params = ",
        JSON.stringify(item.params),
      );

      var param = genericUtils.getRandomArrayElement(
        item.params,
        seededZeroToOneRandomFunction,
      );

      debugLog(
        "getRandomBingoCardConfig",
        "item.question = ",
        JSON.stringify(item.question),
        "param = ",
        param,
      );

      return item.question.replace("{0}", param);
    });

    debugLog(
      "getRandomBingoCardConfig",
      "questions = ",
      JSON.stringify(questions),
    );

    // Put in "Free space" in the middle of the array.
    var middleIndex = Math.floor(questions.length / 2);
    var finalQuestions = questions;
    finalQuestions.splice(
      middleIndex,
      0,
      "<span class='free-space'>FREE SPACE</span>",
    );

    var config = {};
    config.question = finalQuestions;
    return config;
  }

  return {
    getRandomBingoCardConfig: getRandomBingoCardConfig,
  };
});
