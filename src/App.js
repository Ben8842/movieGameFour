import "./App.css";
import { Component } from "react";
import Poster from "./component/Poster.js";
import PosterButton from "./component/PosterButton.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startChallengeCount: 0,
      instructionFlag: true,
      superSteps: 0,
      superPoints: 0,
      introDataA: [
        ["Titanic", 597, "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"],
        ["The Wolf of Wall Street", 106646, "/sOxr33wnRuKazR9ClHek73T8qnK.jpg"],
        ["Catch Me If You Can", 640, "/ctjEj2xM32OvBXCq8zAdK3ZrsAj.jpg"],
        ["Django Unchained", 68718, "/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg"],
        ["The Revenant", 281957, "/ji3ecJphATlVgWNY0B0RVXZizdf.jpg"],
        ["The Aviator", 2567, "/lx4kWcZc3o9PaNxlQpEJZM17XUI.jpg"],
        ["The Avengers", 24428, "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"],
        ["Spider-Man: Homecoming", 315635, "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg"],
        ["Thor", 10195, "/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg"],
        [
          "Captain America: The First Avenger",
          1771,
          "/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
        ],
        ["Black Panther", 284054, "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"],
        ["Iron Man", 1726, "/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"],
      ],
      introDataB: [
        ["Django Unchained", 68718, "/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg"],
        ["The Revenant", 281957, "/ji3ecJphATlVgWNY0B0RVXZizdf.jpg"],
        ["The Aviator", 2567, "/lx4kWcZc3o9PaNxlQpEJZM17XUI.jpg"],
      ],
      introData2: [
        ["The Avengers", 24428, "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"],
        ["Spider-Man: Homecoming", 315635, "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg"],
        ["Thor", 10195, "/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg"],
        [
          "Captain America: The First Avenger",
          1771,
          "/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
        ],
        ["Black Panther", 284054, "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"],
        ["Iron Man", 1726, "/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"],
      ],
      introData3: [],
      movieChoiceArray: [],
      actorChoiceArray: [],
      castArray: [],
      loserFlag: false,
      winnerFlag: false,
      commonContainer: [],
      commonContainerImg: [],
      movieDataQuery: [],
      movieNameQ: "",
      commonContainerID: [],
      actorQuery: [],
      tempCast: [],
      movieChain: [],
      challengeMovies: [
        {
          title: "The Avengers",
          id: 24428,
          poster_path: "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        },
        {
          title: "Breakfast at Tiffany's",
          id: 164,
          poster_path: "/h3GDLoBUTiVFm4UMrok5tibFwqC.jpg",
        },
        {
          title: "Thor",
          id: 10195,
          poster_path: "/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
        },
        {
          title: "The Shawshank Redemption",
          id: 278,
          poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        },
        {
          title: "Black Panther",
          id: 284054,
          poster_path: "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        },
        {
          title: "Iron Man",
          id: 1726,
          poster_path: "/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
        },
        {
          title: "Citizen Kane",
          id: 15,
          poster_path: "/sav0jxhqiH0bPr2vZFU0Kjt2nZL.jpg",
        },
        {
          title: "Raging Bull",
          id: 1578,
          poster_path: "/rEviyDWNbAFmvvCPlkMRPAGUElG.jpg",
        },

        {
          title: "Casablanca",
          id: 289,
          poster_path: "/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
        },
        {
          title: "Juno",
          id: 7326,
          poster_path: "/jNIn2tVhpvFD6P9IojldI3mNYcn.jpg",
        },
        {
          title: "Pulp Fiction",
          id: 680,
          poster_path: "/plnlrtBUULT0rh3Xsjmpubiso3L.jpg",
        },
        {
          title: "Taxi Driver",
          id: 103,
          poster_path: "/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
        },
        {
          title: "Inception",
          id: 27205,
          poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        },
        {
          title: "Good Fellas",
          id: 626867,
          poster_path: "/pMRHkjDbnpMVu5OQQNFMaU7rWbm.jpg",
        },
        {
          title: "The Silence of the Lambs",
          id: 274,
          poster_path: "/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
        },
        {
          title: "Scream",
          id: 4232,
          poster_path: "/aXAByjBN8UhaYvotqRCwa5MsMGu.jpg",
        },
        {
          title: "Footloose",
          id: 1788,
          poster_path: "/w3RAC5tavbKKjzhLhFNbgprHpAV.jpg",
        },
        {
          title: "Forrest Gump",
          id: 13,
          poster_path: "/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg",
        },
        {
          title: "One Flew Over the Cuckoo's Nest",
          id: 510,
          poster_path: "/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg",
        },
        {
          title: "Jaws",
          id: 578,
          poster_path: "/s2xcqSFfT6F7ZXHxowjxfG0yisT.jpg",
        },
        {
          title: "One Flew Over the Cuckoo's Nest",
          id: 510,
          poster_path: "/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg",
        },
        {
          title: "Rocky",
          id: 1366,
          poster_path: "/i5xiwdSsrecBvO7mIfAJixeEDSg.jpg",
        },
        {
          title: "Alien",
          id: 348,
          poster_path: "/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
        },
        {
          title: "Star Wars",
          id: 11,
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        },
        {
          title: "The Sound of Music",
          id: 15121,
          poster_path: "/nv8bcyqXJh2tijWLa3MoUktlVZZ.jpg",
        },
        {
          title: "West Side Story",
          id: 1725,
          poster_path: "/vCtErvzF6S93DtoD7URwy9Mr7oe.jpg",
        },
        {
          title: "The Fighter",
          id: 45317,
          poster_path: "/jcQYWWi2y1vNsGlJJ2jNcFq0y1n.jpg",
        },
      ],
      shuffledChallenge: [],
      movieChallengeOne: {},
      movieChallengeTwo: {},
      gifCelebration: [
        <span>
          <iframe
            src="https://giphy.com/embed/axu6dFuca4HKM"
            width="480"
            height="228"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </span>,
        <span>
          <iframe
            src="https://giphy.com/embed/hZj44bR9FVI3K"
            width="396"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </span>,
        <span>
          <iframe
            src="https://giphy.com/embed/56pSvQ2JFeGT6"
            width="480"
            height="240"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </span>,
        <span>
          <iframe
            src="https://giphy.com/embed/Ge86XF8AVY1KE"
            width="480"
            height="300"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </span>,
        <span>
          <iframe
            src="https://giphy.com/embed/KZRhNKr7whmAcG1Jly"
            width="480"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </span>,
        <span>
          <iframe
            src="https://giphy.com/embed/3oEduYTT51xu5mQDCg"
            width="480"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </span>,
      ],

      randomCelebration: [],
    };

    this.handleChangeQ = this.handleChangeQ.bind(this);
    this.actorChoicesOne = this.actorChoicesOne.bind(this);
    this.movieChoicesOne = this.movieChoicesOne.bind(this);
  }

  calculateNewGoal() {
    this.randomChallenge();
  }

  randomChallenge() {
    let unshuffled = this.state.challengeMovies;
    let shuffled = unshuffled
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    console.log(shuffled);
    this.setState({
      shuffledChallenge: shuffled,
      movieChallengeOne: shuffled[0],
      movieChallengeTwo: shuffled[1],
    });
  }

  randomGiffy() {
    let unshuffled = this.state.gifCelebration;
    let shuffled = unshuffled
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    console.log(shuffled);
    this.setState({
      randomCelebration: shuffled,
    });
  }

  winChecker(x) {
    console.log("helo?");
    console.log(x);
    console.log(this.state.movieChallengeTwo.title);
    if (x === this.state.movieChallengeTwo.title) {
      this.setState({ winnerFlag: true });
      console.log("you win!");
      console.log(this.state.movieChain);
      console.log(this.state.movieChallengeTwo.title);
    }

    //   console.log("you win!");
    //  console.log(this.state.movieChain);
    // console.log(this.state.movieChallengeTwo[0][0]);
    console.log(this.state.movieChallengeTwo.title);
  }

  componentDidMount() {
    this.randomChallenge();
    this.randomGiffy();
  }

  incrementSpecial() {
    this.setState({
      startChallengeCount: 9,
    });
  }
  incrementSuperSteps() {
    this.setState({
      superSteps: this.state.superSteps + 1,
      superPoints: this.state.superPoints + 10,
      startChallengeCount: this.state.startChallengeCount + 1,
    });
    console.log("stepping up");
    console.log(this.state);
  }

  incrementChallenge(x, y, z) {
    this.setState({
      movieChoiceArray: [[x, y, z]],
      superPoints: 1000,
      movieChain: [[x, y, z]],
      superSteps: 4,
      instructionFlag: false,
      startChallengeCount: -50,
    });
    this.getCastTwo(y);
  }

  movieChoicesOne(x, y, z) {
    var { superSteps } = this.state;
    // this.winChecker();
    if (superSteps == 1) {
      //  console.log("I PROMISE THAT I WENT THIS WAY");
      this.setState({
        movieChoiceArray: [...this.state.movieChoiceArray, ...[[x, y, z]]],
        superSteps: 2,
        superPoints: this.state.superPoints + 20,
        movieChain: [...this.state.movieChain, ...[[x, y, z]]],
        startChallengeCount: this.state.startChallengeCount + 1,
      });
      //this.incrementSuperSteps();
      this.getCastOne(y);
    } else {
      this.setState({
        movieChoiceArray: [...this.state.movieChoiceArray, ...[[x, y, z]]],
        superPoints: this.state.superPoints + 25,
        movieChain: [...this.state.movieChain, ...[[x, y, z]]],
        superSteps: 4,
        instructionFlag: false,
        startChallengeCount: this.state.startChallengeCount + 1,
      });
      this.getCastTwo(y);
      this.winChecker(x);
    }
  }

  getCastOne(id) {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/credits?api_key=365a7d6705a54bcd521d3101f7e74b44&language=en-US"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          castArray: [...this.state.castArray, ...[json.cast]],
          tempCast: json.cast,
        });
      });
  }

  getCastTwo(id) {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/credits?api_key=365a7d6705a54bcd521d3101f7e74b44&language=en-US"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          castArray: [...this.state.castArray, ...[json.cast]],
          tempCast: json.cast,
        });
      });
  }

  submitQuery(id) {
    //var {  movieData } = this.state;
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=365a7d6705a54bcd521d3101f7e74b44&query=" +
        id
    )
      .then((res) => res.json())

      .then((json) => {
        console.log(json);
        this.setState({
          movieDataQuery: json.results,
        });
      });
  }

  handleChangeQ(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  actorChoicesOne(x, y, z) {
    fetch(
      "https://api.themoviedb.org/3/person/" +
        y +
        "/movie_credits?api_key=365a7d6705a54bcd521d3101f7e74b44&language=en-US"
    )
      .then((res) => res.json())

      .then((json) => {
        console.log(json);
        if (this.state.superSteps == 4) {
          this.setState({
            actorQuery: json.cast,
            actorChoiceArray: [...this.state.actorChoiceArray, ...[[x, y, z]]],
            movieChain: [...this.state.movieChain, ...[[x, y, z]]],
            superPoints: this.state.superPoints + 35,
            superSteps: this.state.superSteps - 1,
            startChallengeCount: this.state.startChallengeCount + 1,
          });
        } else
          this.setState({
            actorQuery: json.cast,
            actorChoiceArray: [...this.state.actorChoiceArray, ...[[x, y, z]]],
            movieChain: [...this.state.movieChain, ...[[x, y, z]]],
            superPoints: this.state.superPoints + 35,
            superSteps: this.state.superSteps + 1,
            startChallengeCount: this.state.startChallengeCount + 1,
          });
      });
    // console.log(this.state.actorQuery);
  }

  render() {
    var {
      superSteps,
      superPoints,
      introDataA,
      introDataB,
      introData2,
      introData3,
      movieChoiceArray,
      commonContainer,
      commonContainerImg,
      movieDataQuery,
      movieNameQ,
      actorChoiceArray,
      commonContainerID,
      actorQuery,
      castArray,
      tempCast,
      movieChain,
      instructionFlag,
      startChallengeCount,
      movieChallengeOne,
      movieChallengeTwo,
      winnerFlag,
    } = this.state;
    console.log(movieChain);

    var posters = movieChain.map((value, index) => (
      <Poster poster_path={value[2]} index={index} poster_name={value[0]} />
    ));

    const movieChainz = <div>{posters}</div>;

    const movieInfoHolder = (
      <div>
        {movieDataQuery.map((value, index) => (
          <PosterButton
            poster_path={value.poster_path}
            poster_name={value.title}
            id={value.id}
            onClickChoice={this.movieChoicesOne}
            index={index}
            button_class="imgmaxi"
            poster_class="imgmax"
          />
        ))}
      </div>
    );

    const stepZero = (
      <div id="instructionSection">
        Your beginning movie is {movieChallengeOne.title}
        <div>
          <button id="playbutton" onClick={() => this.incrementSpecial()}>
            Play!
          </button>
          <button id="playbutton" onClick={() => this.incrementSuperSteps()}>
            Practice!
          </button>
          <button id="playbutton" onClick={() => this.calculateNewGoal()}>
            New Mission
          </button>
        </div>
      </div>
    );

    const stepOne = (
      <div>
        Great job following directions. Choose a movie below and click on it.
        <div>
          {introDataA.map((value, index) => {
            const imgurl =
              "https://image.tmdb.org/t/p/original/" + introDataA[index][2];
            return (
              <span key={index}>
                <span>
                  <button
                    type="button"
                    src={imgurl}
                    class="imgmaxi"
                    onClick={() =>
                      this.movieChoicesOne(
                        introDataA[index][0],
                        introDataA[index][1],
                        introDataA[index][2]
                      )
                    }
                  >
                    <img src={imgurl} class="imgmax"></img>
                  </button>
                </span>
              </span>
            );
          })}
        </div>
      </div>
    );

    const holder = (
      <div>
        {tempCast.map((value, index) => (
          <PosterButton
            poster_path={value.profile_path}
            poster_name={value.name}
            id={value.id}
            onClickChoice={this.actorChoicesOne}
            index={index}
            button_class="imgchainA"
            poster_class="imgchainMA"
          />
        ))}
      </div>
    );

    const stepTwo = (
      <div>
        Wow. Good Choice. More points for you. Now choose an actor from the cast
        of the movie:{" "}
        {movieChain.length - 1 >= 0
          ? movieChain[movieChain.length - 1][0]
          : null}
        <div>
          <div>Here is the cast: </div>

          {tempCast !== undefined ? holder : null}
        </div>
      </div>
    );

    const additionalInstruction = (
      <div>
        Notice that you are building your movie solitaire chain up above.
      </div>
    );

    const actorInfoHolder = (
      <div>
        {actorQuery.map((value, index) => (
          <PosterButton
            poster_path={value.poster_path}
            poster_name={value.title}
            id={value.id}
            onClickChoice={this.movieChoicesOne}
            index={index}
            button_class="imgmaxi"
            poster_class="imgmax"
          />
        ))}
      </div>
    );

    const stepThree = (
      <div>
        Choose a movie that has the actor:{" "}
        {movieChain.length - 1 >= 0
          ? movieChain[movieChain.length - 1][0]
          : null}
        <div>{actorInfoHolder}</div>
      </div>
    );

    const stepFour = (
      <div>
        <div>
          Choose an actor from the movie: &nbsp;
          {movieChain.length - 1 >= 0
            ? movieChain[movieChain.length - 1][0]
            : null}
        </div>

        <br></br>
        {actorQuery !== undefined ? holder : null}
      </div>
    );

    const goalLocation = (
      <div id="scoreSection">
        Your goal is to reach the movie {movieChallengeTwo.title}
      </div>
    );

    const beginChallenge = (
      <div class="instruction">
        Enough training! You are ready for the challenge of your destiny!
        <div>
          <button id="playbutton" onClick={() => this.incrementSuperSteps()}>
            Play!
          </button>
          {this.state.randomCelebration[0]}
        </div>
      </div>
    );

    const displayChallenge = (
      <div>
        <div class="instruction">
          We have randomly chosen two movies for you.{" "}
          <div>
            Your CHALLENGE is to link the movies together using your training
            and complete your chain in the fewest steps possible.{" "}
          </div>
          <p>
            {" "}
            You will need to start with movie: &nbsp;{movieChallengeOne.title}
          </p>
          <Poster
            poster_path={movieChallengeOne.poster_path}
            poster_name={movieChallengeOne.title}
            id={movieChallengeOne.id}
            onClickChoice={null}
            index={null}
            button_class="imgmaxi"
            poster_class="imgmax"
          />
          <p>
            {" "}
            &nbsp; Your goal is to reach this movie: &nbsp;
            {movieChallengeTwo.title}
          </p>
          <Poster
            poster_path={movieChallengeTwo.poster_path}
            poster_name={movieChallengeTwo.title}
            id={movieChallengeTwo.id}
            onClickChoice={null}
            index={null}
            button_class="imgmaxi"
            poster_class="imgmax"
          />
        </div>
        <button
          id="playbutton"
          onClick={() =>
            this.incrementChallenge(
              movieChallengeOne.title,
              movieChallengeOne.id,
              movieChallengeOne.poster_path
            )
          }
        >
          Begin!
        </button>
        <button id="playbutton" onClick={() => this.calculateNewGoal()}>
          New Mission
        </button>
      </div>
    );

    const training = (
      <div>
        <div id="titleSection">Movie Chain Game</div>
        {movieChallengeOne.title !== undefined ? goalLocation : null}
        {movieChainz}
        {superSteps == 3 && instructionFlag ? additionalInstruction : null}
        {superSteps == 0
          ? stepZero
          : superSteps == 1
          ? stepOne
          : superSteps == 2
          ? stepTwo
          : superSteps == 3
          ? stepThree
          : superSteps == 4
          ? stepFour
          : null}
      </div>
    );

    const celebration = (
      <div>
        <div class="instruction" class>
          <h1>WOW YOU WON THE GAME ! ! !</h1>
        </div>
        {this.state.randomCelebration[1]}
        <h2>Look at your beautiful movie chain</h2>
        <div>{posters}</div>
      </div>
    );

    return (
      <div>
        {startChallengeCount < 9 && !winnerFlag
          ? training
          : startChallengeCount == 9 && !winnerFlag
          ? beginChallenge
          : winnerFlag
          ? celebration
          : null}
        {startChallengeCount == 10 && !winnerFlag ? displayChallenge : null}
      </div>
    );
  }
}

export default App;
