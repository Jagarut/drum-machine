import React from "react";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.audio = React.createRef();
  }
  playSound = (e) => {
    this.audio.current.play();
    this.props.handleDisplay(e);
  };

  render() {
    const { soundname, name, url } = this.props;
    return (
      <div
        className="drum-pad five wide column ui button huge fluid"
        style={{ marginBottom: "10px", textAlign: "center" }}
        id={soundname}
        value={name}
        onClick={this.playSound}
      >
        {name}
        <audio ref={this.audio} className="clip" src={url} id={name}></audio>
      </div>
    );
  }
}

export default DrumPad;
