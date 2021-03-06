"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this Project most";
    }

    // Display a "Like" <button>
    return (
      <button
        className="btn btn-info"
        onClick={() => this.setState({ liked: true })}
      >
        Like
      </button>
    );
  }
}

const domContainer = document.querySelector("#react-container");
ReactDOM.render(e(LikeButton), domContainer);
