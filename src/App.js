import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activeKey, setActiveKey] = useState('');
  let displayText;
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      playSound(e.key.toUpperCase());
    })
  }, [])

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  function playSound(selector){
    const audio = document.getElementById(selector);
    audio.play();
    setActiveKey(selector)
  }

  switch (activeKey) {
    case "Q":
      displayText = "Heater 1"
      break;
    case "W":
      displayText = "Heater 2"
      break;
    case "E":
      displayText = "Heater 3"
      break;
    case "A":
      displayText = "Heater 4"
      break;
    case "S":
      displayText = "Clap"
      break;
    case "D":
      displayText = "Open-HH"
      break;
    case "Z":
      displayText = "Kick-n-Hat"
      break;
    case "X":
      displayText = "Kick"
      break;
    case "C":
      displayText = "Closed-HH"
      break;
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div className="drum-pads">
          {drumPads.map((drumPad) => (
            <div key={drumPad.src} onClick={() => {
              playSound(drumPad.text)
            }} className="drum-pad" id={drumPad.src}>
              {drumPad.text}
              <audio
                className="clip"
                id={drumPad.text}
                src={drumPad.src}
              ></audio>
            </div>
          ))}
        </div>

        <div id="display">
          {displayText}
        </div>
      </div>
    </div>
  );
}

export default App;
