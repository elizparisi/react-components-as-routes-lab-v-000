import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      
      {movies.directors.map((director) => (
        <div>
          <p>{director.name}</p>
          <p>Movies:</p>
            <ul>
              {director.movies.map((movie) =>
              <li>{movie}</li>
              )}
            </ul>
        </div>)
      )}
      
      {actors.map((actor) => (
        <div>
          <p>{actor.name}</p>
          <p>Movies:</p>
            <ul>
              {actor.movies.map((movie) =>
              <li>{movie}</li>
              )}
            </ul>
        </div>)
        )
      }
    </div>
    </div>
  );
}

export default Directors
