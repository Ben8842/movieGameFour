//import "../App.css";
import { Component } from "react";

class Poster extends Component {
  render() {
    var imgSource =
      "https://image.tmdb.org/t/p/original/" + this.props.poster_path;

    return (
      <span class="imgchain" key={this.props.index}>
        {this.props.poster_path ? (
          <img
            src={imgSource}
            class="imgchain"
            alt={this.props.poster_name}
          ></img>
        ) : (
          <button class="imgchain">{this.props.poster_name}</button>
        )}
      </span>
    );
  }
}

export default Poster;
