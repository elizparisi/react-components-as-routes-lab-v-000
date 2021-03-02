import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        <div>
          {movies.map((movie) => (
            <div>
              <p>{movie.title}</p>
              <p>{movie.time}</p>
              <p>Genres: </p>
                {movies.genres.map(())
            </div>)
          )}
        </div>
    </div>
  );
};

export default Movies;
