import Navbar from "components/Navbar";
import Home from "pages/Home";
import MovieReviews from "pages/MovieReviews";
import Movies from "pages/Movies";
import { Router, Route, Switch } from "react-router-dom";
import history from "utils/history";

const Routes = () => (
  <Router history={ history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/movies/:movieId">
        <MovieReviews />
      </Route>
    </Switch>
  </Router>
);
export default Routes;
