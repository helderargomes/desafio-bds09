import "./styles.css";

const Movies = () => {
  return (
    <div className="home-container movie-page-container">
      <h1>Tela listagem de filmes</h1>
      <ul className="list-unstyled list-container">
        <li>
          <a href="#">Acessar /movies/1</a>
        </li>
        <li>
          <a href="#">Acessar /movies/2 </a>
        </li>
      </ul>
    </div>
  );
};

export default Movies;
