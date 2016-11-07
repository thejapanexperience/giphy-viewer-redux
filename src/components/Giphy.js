import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as GiphyActions from '../actions/GiphyActions';

class Giphy extends Component {
  constructor() {
    super();
    this.state = {
      search: 'Batman',
      rating: '',
      one: {},
      oneBool: false,
    };
    this._onInputChange = this._onInputChange.bind(this);
    this._onRatingChange = this._onRatingChange.bind(this);
    this._viewOne = this._viewOne.bind(this);
    this._viewAll = this._viewAll.bind(this);
  }

  _onInputChange(e) {
    this.setState({
      search: e.target.value,
    });
  }
  _onRatingChange(e) {
    this.setState({
      rating: e.target.value,
    });
  }
  _viewOne(e) {
    const { giphy } = this.props;
    const oneGif = giphy.filter(gif =>
       gif.images.fixed_height.url === e.target.alt
    );
    this.setState({
      one: oneGif,
      oneBool: true,
    });
  }
  _viewAll(e) {
    this.setState({
      one: {},
      oneBool: false,
    });
  }

  render() {
    let { search, rating, one, oneBool } = this.state;
    one = one[0];
    console.log('one: ', one);
    const { giphy, fetchGiphy } = this.props;
    let gifs;
    let rated = giphy;

    if (rating) {
      rated = giphy.filter(gif =>
         gif.rating === rating
      );
    }

    if (oneBool === true) {
      let giphySource;
      if (one.source === '') {
        giphySource = 'no source available';
      } else {
        giphySource = one.source;
      }
      console.log('giphySource: ', giphySource);
      console.log('one.source: ', one.source);
      gifs =
        (<div>
          <img onClick={this._viewAll} src={one.images.original.url} alt="" />
          <p>Click on image to view gallery</p>
          <h4>Giphy slug: {one.slug}</h4>
          <h4>Giphy rating: {one.rating}</h4>
          <h4>Giphy source: {giphySource}</h4>
        </div>);
    }

    if (rated.length > 1 && oneBool === false) {
      gifs =
        (
          <div>
            { rated.map(gif =>
              (
                <span key={gif.id}>
                  <span><img onClick={this._viewOne} src={gif.images.fixed_height.url} alt={gif.images.fixed_height.url} /></span>
                </span>
              )
            )}
          </div>);
    } else if (!rated.length && oneBool === false) {
      gifs = <h1>No Gifs</h1>;
    }

    return (
      <div>
        <h1>Giphy</h1>
        <input type="text" placeholder="Batman" value={search} onChange={this._onInputChange} />
        <button onClick={() => fetchGiphy(search)}>Fetch</button>
        <span>  Filter by rating: </span>
        <select onChange={this._onRatingChange}>
          <optgroup label="Giphy Ratings">
            <option value="">None</option>
            <option value="y">Y</option>
            <option value="g">G</option>
            <option value="pg">PG</option>
            <option value="pg-13">PG-13</option>
            <option value="r">R</option>
          </optgroup>
        </select>
        <hr />
        <div>
          {gifs}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  giphy: state.giphy,
});

const mapDispatchToProps = dispatch => ({
  fetchGiphy(search) {
    dispatch(GiphyActions.fetchGiphy(search));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Giphy);
