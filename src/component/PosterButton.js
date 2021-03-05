//import "../App.css";
import { Component } from "react";

class PosterButton extends Component {
  render() {
    var {
      poster_path,
      poster_name,
      index,
      id,
      button_class,
      poster_class,
    } = this.props;
    var imgurl =
      "https://image.tmdb.org/t/p/original/" + this.props.poster_path;

    return (
      <span key={index}>
        <button
          type="button"
          class={button_class}
          onClick={() => this.props.onClickChoice(poster_name, id, poster_path)}
        >
          {poster_path === null ? (
            poster_name
          ) : (
            <img
              src={imgurl}
              class={poster_class}
              alt={poster_name}
              onError={(event) => (event.target.src = "none")}
            ></img>
          )}
        </button>
      </span>
    );
  }
}

export default PosterButton;
