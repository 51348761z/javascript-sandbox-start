const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();
rec.lang = "en-US";
rec.continuous = false;

rec.onresult = function (e) {
  const acceptedColors = [
    "red",
    "green",
    "blue",
    "yellow",
    "black",
    "white",
    "orange",
    "purple",
    "pink",
    "brown",
    "gray",
  ];

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();
    if (acceptedColors.includes(script)) {
      document.body.style.backgroundColor = script;
    } else {
      console.log("Please say a color");
    }
  }
};
rec.start();
