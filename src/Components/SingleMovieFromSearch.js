import React from "react";
import { connect } from "react-redux";
import { nominateMovie } from "../store/movieNominations";

class SingleMovieFromSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayAlert: false };
    this.nominatingMovie = this.nominatingMovie.bind(this);
    this.isDuplicate = this.isDuplicate.bind(this);
  }

  nominatingMovie(movieObj) {
    if (this.props.nominatedMovies.length < 5) {
      this.props.nominateMovie(movieObj);
      if (this.props.nominatedMovies.length === 4) {
        this.props.updateDisplayAlert();
      }
    } else {
      this.props.updateDisplayAlert();
    }
  }

  isDuplicate(imdbID) {
    let outcome;
    if (!this.props.nominatedMovies) {
      outcome = false;
    } else {
      this.props.nominatedMovies.forEach((movieObj) => {
        if (movieObj.imdbID === imdbID && movieObj.disabled === true) {
          outcome = true;
        }

        if (movieObj.imdbID === imdbID && movieObj.disabled === false) {
          outcome = false;
        }
      });
    }
    return outcome;
  }

  render() {
    const title = this.props.title;
    const year = this.props.year;
    const movieObj = this.props.movieObj;

    return (
      <li className="list-group-item">
        <div className="row align-items-center">
          <div className="col-10">
            <div className="align-right">
              {" "}
              {title} ({year})
            </div>
          </div>
          <div className="col-2">
            <button
              className="btn custom-button-color-nominate btn-sm"
              disabled={this.isDuplicate(movieObj.imdbID) || this.props.nominatedMovies.length > 4}
              onClick={() => this.nominatingMovie(movieObj)}
            >
              <ion-icon name="add-outline"></ion-icon>
            </button>
          </div>
        </div>
      </li>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    nominateMovie: (movieObj) => dispatch(nominateMovie(movieObj)),
  };
};

const mapState = (state) => {
  return {
    nominatedMovies: state.movieNominations.movieNominations,
  };
};
export default connect(mapState, mapDispatch)(SingleMovieFromSearch);
