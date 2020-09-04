import React from "react";
import DisplayResults from "./DisplayResults";
// import axios from 'axios'
import { connect } from "react-redux";
import { fetchingMovies } from "../store/movieData";
import Toasts from "./Toast";

class SearchMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", data: [], displayAlert: false };
    this.handleChange = this.handleChange.bind(this);
    this.clear = this.clear.bind(this);
    this.updateDisplayAlert = this.updateDisplayAlert.bind(this);
    this.updateWithMovieData = this.updateWithMovieData.bind(this);
  }

  async handleChange(e) {
    let val = e.target.value;
    this.setState((state) => ({ value: val }));
    e.preventDefault();
    await this.props.fetchingMovies(val);
    await this.updateWithMovieData();
  }

  clear() {
    this.setState({ value: "", data: [] });
  }

  updateDisplayAlert(show = true) {
    this.setState((state) => ({ displayAlert: show }));
  }

  updateWithMovieData() {
    this.setState((state, props) => ({
      data: [...state.data, this.props.movieData],
    }));
  }

  render() {
    return (
      <div className="custom-container-fluid container-size">
        {this.state.displayAlert ? <Toasts updateDisplayAlert={this.updateDisplayAlert} /> : null}
        <div className="input-group mb-3 border rounded custom-border-color">
          <input
            className="form-control border border-white"
            type="text"
            value={this.state.value}
            placeholder="Search For A Movie"
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <span
              className="btn custom-button-color-search btn-sm custom-button"
              type="button"
              onClick={() => this.clear()}
            >
              <ion-icon name="close-outline" class="clear-icon"></ion-icon>
            </span>
          </div>
        </div>
        {this.state.data.length > 0 ? (
          <DisplayResults updateDisplayAlert={this.updateDisplayAlert} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieData: state.movieData.movieData,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchingMovies: (movieTitle) => {
      dispatch(fetchingMovies(movieTitle));
    },
  };
};

const ConnectedToSearchMovies = connect(
  mapStateToProps,
  mapDispatch
)(SearchMovie);
export default ConnectedToSearchMovies;
