import React, { Component } from 'react';
import Movie from './Movie';
import styled from 'styled-components';

class MovieList extends Component {
  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ed61390253a45e01fa4227eda220a272&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json()
      this.setState({
        movies: movies.results
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => (<Movie key={movie.id} movie={movie} />))}
      </MovieGrid>
    );
  }
}

export default MovieList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`

