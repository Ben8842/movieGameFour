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
        {
          title: "Mrs. Doubtfire",
          id: 788,
          poster_path: "/szvidvi0Fo4j2gmMtk1sNe1rkzw.jpg",
        },
        {
          title: "Home Alone",
          id: 771,
          poster_path: "/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg",
        },
        {
          title: "Jerry Maguire",
          id: 45317,
          poster_path: "/2FJFChUeEgYpCvsLfAMXjcFtFOy.jpg",
        },
        {
          title: "Swingers",
          id: 10218,
          poster_path: "/vpyu6e2ht70uDh1k8k9mqB1Tj0L.jpg",
        },
        {
          title: "Batman Returns",
          id: 364,
          poster_path: "/jKBjeXM7iBBV9UkUcOXx3m7FSHY.jpg",
        },
        {
          title: "Beetlejuice",
          id: 4011,
          poster_path: "/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg",
        },
        {
          title: "Evita",
          id: 8818,
          poster_path: "/q2uuRK9nq2fk9Azw60jtmuGFRyi.jpg",
        },
        {
          title: "The Notebook",
          id: 11036,
          poster_path: "/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg",
        },
        {
          title: "Jurassic Park",
          id: 329,
          poster_path: "/9i3plLl89DHMz7mahksDaAo7HIS.jpg",
        },
        {
          title: "Die Hard",
          id: 562,
          poster_path: "/1fq1IpnuVqkD5BMuaXAUW0eVB21.jpg",
        },
        {
          title: "Primal Fear",
          id: 1592,
          poster_path: "/qJf2TzE8nRTFbFMPJNW6c8mI0KU.jpg",
        },
        {
          title: "Chicago",
          id: 1574,
          poster_path: "/v1Sg3GuHDz9uhrKqYozOeCMLSpj.jpg",
        },
        {
          title: "Election",
          id: 9451,
          poster_path: "/5gPOFU6IPvDrx50XaPCK4twNw79.jpg",
        },
        {
          title: "Ferris Bueller's Day Off",
          id: 9377,
          poster_path: "/kKhvDqvxaXSJXWjVKjCTeHvNKd3.jpg",
        },
        {
          title: "The Breakfast Club",
          id: 2108,
          poster_path: "/c0bdxKVRevkw50LOnk6B8d3e4s.jpg",
        },
        {
          title: "Happy Gilmore",
          id: 9614,
          poster_path: "/4RnCeRzvI1xk5tuNWjpDKzSnJDk.jpg",
        },
        {
          title: "Edward Scissorhands",
          id: 162,
          poster_path: "/1RFIbuW9Z3eN9Oxw2KaQG5DfLmD.jpg",
        },
        {
          title: "Field of Dreams",
          id: 2323,
          poster_path: "/8PT4sAcneQ7MtZ1Mqoe2EyOJHmZ.jpg",
        },
        {
          title: "Speed",
          id: 1637,
          poster_path: "/o1Zs7VaS9y2GYH9CLeWxaVLWd3x.jpg",
        },
        {
          title: "The Fifth Element",
          id: 18,
          poster_path: "/fPtlCO1yQtnoLHOwKtWz7db6RGU.jpg",
        },
        {
          title: "Hoosiers",
          id: 5693,
          poster_path: "/dHpjZQXEdoi1xNLubM1rPmTHJYz.jpg",
        },
        {
          title: "School of Rock",
          id: 1584,
          poster_path: "/zXLXaepIBvFVLU25DH3wv4IPSbe.jpg",
        },
        {
          title: "The Rocky Horror Picture Show",
          id: 36685,
          poster_path: "/3pyE6ZqDbuJi7zrNzzQzcKTWdmN.jpg",
        },
        {
          title: "Sleepless in Seattle",
          id: 858,
          poster_path: "/iLWsLVrfkFvOXOG9PbUAYg7AK3E.jpg",
        },
        {
          title: "You've Got Mail",
          id: 9489,
          poster_path: "/e2uVtH6TpMfUl7WeOM70ezkcjsU.jpg",
        },
        {
          title: "Godspell",
          id: 43158,
          poster_path: "/unKvBw7y0L6BTWVALEebif9BtsZ.jpg",
        },
        {
          title: "Superbad",
          id: 8363,
          poster_path: "/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
        },
        {
          title: "Contagion",
          id: 39538,
          poster_path: "/qL0IooP0bjXy0KXl9KEyPo22ll0.jpg",
        },
        {
          title: "Meet the Parents",
          id: 1597,
          poster_path: "/jX9D6uVaYFZIwFMfD3pEPp4Lu6u.jpg",
        },
        {
          title: "The Mask",
          id: 854,
          poster_path: "/zJUvFtaGPQkcQYE8nmhU66ESpWe.jpg",
        },
        {
          title: "Titanic",
          id: 597,
          poster_path: "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        },
        {
          title: "Twister",
          id: 664,
          poster_path: "/ba6Bg9mxphS24tpSe98vZccEe3S.jpg",
        },
        {
          title: "A Clockwork Orange",
          id: 185,
          poster_path: "/4sHeTAp65WrSSuc05nRBKddhBxO.jpg",
        },
        {
          title: "Sneakers",
          id: 2322,
          poster_path: "/pY7wNO4J0QMAH9Q4nJL3QLlPVvC.jpg",
        },
        {
          title: "A Clockwork Orange",
          id: 185,
          poster_path: "/4sHeTAp65WrSSuc05nRBKddhBxO.jpg",
        },
        {
          title: "E.T. the Extra-Terrestrial",
          id: 601,
          poster_path: "/trEGc4UQWj8eLS5MyeGRxeTwlqY.jpg",
        },
        {
          title: "300",
          id: 1271,
          poster_path: "/lGv19gokQvgC7jgjWqapIachnxU.jpg",
        },
        {
          title: "Gladiator",
          id: 98,
          poster_path: "/ehGpN04mLJIrSnxcZBMvHeG0eDc.jpg",
        },
        {
          title: "A Beautiful Mind",
          id: 453,
          poster_path: "/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
        },
        {
          title: "The Prestige",
          id: 1124,
          poster_path: "/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg",
        },
        {
          title: "Zombieland",
          id: 19908,
          poster_path: "/dUkAmAyPVqubSBNRjRqCgHggZcK.jpg",
        },
        {
          title: "Kingpin",
          id: 11543,
          poster_path: "/o3yoL3dcPzAE2QpwG7iJlvEeiG7.jpg",
        },
        {
          title: "Pulp Fiction",
          id: 680,
          poster_path: "/plnlrtBUULT0rh3Xsjmpubiso3L.jpg",
        },
        {
          title: "Grease",
          id: 621,
          poster_path: "/9L4p8N1nQmAdAAfiaWlLuYs7dZt.jpg",
        },
        {
          title: "The King's Speech",
          id: 45269,
          poster_path: "/uQ538BfYLDJh3GXlzRZLo0j7PFj.jpg",
        },
        {
          title: "Top Gun",
          id: 744,
          poster_path: "/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg",
        },
        {
          title: "Alive",
          id: 7305,
          poster_path: "/uQACcCZqd7WCTRin9xRIW5gr1bd.jpg",
        },
        {
          title: "Clue",
          id: 7305,
          poster_path: "/uQACcCZqd7WCTRin9xRIW5gr1bd.jpg",
        },
        {
          title: "Punch-Drunk Love",
          id: 8051,
          poster_path: "/ni98pJPeHlfaxWQ3XUD0Bm4r9mb.jpg",
        },
        {
          title: "eXistenZ",
          id: 1946,
          poster_path: "/kETKF0JhdTPn1knci8CAdYL0d79.jpg",
        },
        {
          title: "Indiana Jones and the Temple of Doom",
          id: 87,
          poster_path: "/wu0m7HiZyZr4pOp8IpnFHNvGkVV.jpg",
        },
        {
          title: "The Martian",
          id: 286217,
          poster_path: "/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg",
        },
        {
          title: "Guardians of the Galaxy",
          id: 118340,
          poster_path: "/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
        },
        {
          title: "Mean Girls",
          id: 10625,
          poster_path: "/fXm3YKXAEjx7d2tIWDg9TfRZtsU.jpg",
        },
        {
          title: "Clueless",
          id: 9603,
          poster_path: "/8AwVTcgpTnmeOs4TdTWqcFDXEsA.jpg",
        },
        {
          title: "Gettysburg",
          id: 10655,
          poster_path: "/566AVv5fwoQTdFy37JXc8QcyDSy.jpg",
        },
        {
          title: "Lincoln",
          id: 72976,
          poster_path: "/oosQMP9sh9LF2xR2eKcQ1iSscWM.jpg",
        },
        {
          title: "High School Musical",
          id: 10947,
          poster_path: "/1DGmWZjUJPeKGFRHGCA6VPFUBML.jpg",
        },
        {
          title: "The Greatest Showman",
          id: 316029,
          poster_path: "/b9CeobiihCx1uG1tpw8hXmpi7nm.jpg",
        },
        {
          title: "Airplane!",
          id: 813,
          poster_path: "/hiURvJjCgk0s10urHVCg80TFF11.jpg",
        },
        {
          title: "Get Out",
          id: 419430,
          poster_path: "/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
        },
        {
          title: "Anchorman: The Legend of Ron Burgundy",
          id: 8699,
          poster_path: "/9rQceSyOxJpOVsJRhkgoxNqbkvA.jpg",
        },
        {
          title: "Boomerang",
          id: 11066,
          poster_path: "/cc9YAZq5NXiIEJsHjW7p2FaHQkp.jpg",
        },
        {
          title: "Rush Hour",
          id: 2109,
          poster_path: "/5LM4sJ2SYTvo6q3sOdYaL7Ly3uj.jpg",
        },
        {
          title: "Knocked Up",
          id: 4964,
          poster_path: "/b4OaXw2MW97VvIiZE0Sbn1NfxSh.jpg",
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
      queryGiphy: [{ bitly_gif_url: null }, { bitly_gif_url: null }],
      randomCelebration: [],
    };

    this.handleChangeQ = this.handleChangeQ.bind(this);
    this.actorChoicesOne = this.actorChoicesOne.bind(this);
    this.movieChoicesOne = this.movieChoicesOne.bind(this);
  }

  giphyQuery(id) {
    fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=mx6JiB0rvv41thD4wEyHCmq0nlM0HsUl&q=" +
        id +
        "&limit=25&offset=0&rating=g&lang=en"
    )
      .then((res) => res.json())
      .then((json) => {
        //  console.log("YOYO" + json);
        //  console.log(json);
        this.setState({
          queryGiphy: json.data,
        });
      });
  }

  calculateNewGoal() {
    this.randomChallenge();
    this.giphyQuery(this.state.movieChallengeTwo.title);
    // this.setState({ winnerFlag: true });
  }

  randomChallenge() {
    let unshuffled = this.state.challengeMovies;
    let shuffled = unshuffled
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    // console.log(shuffled);
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
    //  console.log(shuffled);
    this.setState({
      randomCelebration: shuffled,
    });
  }

  winChecker(x) {
    //  console.log("helo?");
    //   console.log(x);
    //   console.log(this.state.movieChallengeTwo.title);
    if (x === this.state.movieChallengeTwo.title) {
      this.setState({ winnerFlag: true });
      this.giphyQuery(this.state.movieChallengeTwo.title);
      console.log("you win!");
      console.log(this.state.movieChain);
      //    console.log(this.state.movieChallengeTwo.title);
    }

    //   console.log("you win!");
    //  console.log(this.state.movieChain);
    // console.log(this.state.movieChallengeTwo[0][0]);
    //   console.log(this.state.movieChallengeTwo.title);
  }

  componentDidMount() {
    this.randomChallenge();
    this.randomGiffy();
  }

  incrementSpecial() {
    this.setState({
      startChallengeCount: 10,
    });
  }

  incrementSuperSteps() {
    this.setState({
      superSteps: this.state.superSteps + 1,
      superPoints: this.state.superPoints + 10,
      startChallengeCount: this.state.startChallengeCount + 1,
    });
    // console.log("stepping up");
    // console.log(this.state);
  }

  incrementChallenge(x, y, z) {
    this.setState({
      movieChoiceArray: [[x, y, z]],
      superPoints: 1000,
      movieChain: [[x, y, z]],
      superSteps: 4,
      instructionFlag: false,
      startChallengeCount: -75,
    });
    this.getCastOne(y);
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
      this.getCastOne(y);
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
          tempCast: json.cast,
        });
      });
  }

  //This was only used when search bar present
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
        //   console.log(json);
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
      queryGiphy,
    } = this.state;
    //  console.log(movieChain);

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
        Your beginning movie is: {movieChallengeOne.title}
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
          <div></div>
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
        Your goal is to reach the movie: {movieChallengeTwo.title}
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
        <div id="titleSection">Movie Game</div>
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
      <div class="instruction" class>
        <h1>WOW YOU WON THE GAME ! ! !</h1>
        <h2>Look at your beautiful movie chain</h2>
        <div>{posters}</div>
        <div>
          <iframe
            src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fwww.moviegame.fun%2F&layout=button&size=large&appId=250140228367248&width=77&height=28"
            width="77"
            height="28"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>

        <div id="padder">
          <iframe
            src={queryGiphy[0].embed_url}
            width="auto"
            height="auto"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
    // {this.state.randomCelebration[1]}
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

/*  function not used in this version
  submitQuery(id) {
    //var {  movieData } = this.state;
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=365a7d6705a54bcd521d3101f7e74b44&query=" +
        id
    )
      .then((res) => res.json())

      .then((json) => {
     //   console.log(json);
        this.setState({
          movieDataQuery: json.results,
        });
      });
  }
  */
/* this function is not used in this version
  getCastTwo(id) {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/credits?api_key=365a7d6705a54bcd521d3101f7e74b44&language=en-US"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          tempCast: json.cast,
        });
      });
  }*/
