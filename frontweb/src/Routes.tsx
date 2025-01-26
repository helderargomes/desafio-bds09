import Navbar from "components/Navbar";
import Home from "pages/Home";
import MovieReviews from "pages/MovieReviews";
import Movies from "pages/Movies";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);
export default Routes;
