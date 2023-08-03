import "./App.css";
import responseMovies from "./mocks/with-results.json";

function App() {
  const movies = responseMovies.results;
  const hasMovies = movies?.length > 0;

  return (
    <div className="page">
      <header>
        <h1>React App</h1>
        <form>
          <input type="text" placeholder="Matrix, avengers..." />
          <button>Search</button>
        </form>
      </header>

      <main>
        {hasMovies ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No movies found</p>
        )}
      </main>
    </div>
  );
}

export default App;
