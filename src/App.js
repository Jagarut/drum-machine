import React, { Component } from "react";
import Display from "./components/Display";
import DrumPad from "./components/DrumPad";
import { sounds } from "./data/soundFiles";

class App extends Component {
  state = { displaySound: "Sound Name" };

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      const id = e.key.toUpperCase();
      const audio = document.getElementById(id);
      console.log(id);

      if (audio) {
        audio.play();
        this.handleKeyPress(id);
      }
    });
  }

  handleDisplay = (event) => {
    const soundname = event.target.attributes.getNamedItem("id").value;
    this.setState({ displaySound: soundname });
  };

  handleKeyPress(id) {
    const keys = "q w e a s d z x c".toUpperCase().split(" ");
    const index = keys.indexOf(id);
    const soundName = sounds[index].name;
    this.setState({ displaySound: soundName });
  }

  render() {
    return (
      <div id="drum-machine" className="App ui container">
        <div className="ui grid">
          <div className="row centered">
            <Display display={this.state.displaySound} />
          </div>
          <div className=" row centered">
            {sounds.map((sound) => (
              <DrumPad
                key={sound.id}
                handleDisplay={this.handleDisplay}
                name={sound.id}
                soundname={sound.name}
                url={sound.src}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
