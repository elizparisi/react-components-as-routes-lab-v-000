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
    </div>
  );
}

export default Directors
