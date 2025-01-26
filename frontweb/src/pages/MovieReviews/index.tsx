import ReviewForm from "./ReviewForm";
import Review from "./Review";
import "./styles.css";
import { MovieReview } from "types/movieReview";

const review: MovieReview = {
  id: 1,
  text: "Meh, filme OK",
  movieId: 1,
  user: {
    id: 1,
    name: "Bob",
    email: "bob@gmail.com",
  },
};

const MovieReviews = () => {
  return (
    <div className="home-container">
      <h1>Tela de detalhes do filme id: 1</h1>
      <div className="comment-form-card">
        <ReviewForm />
      </div>
      <div className="review-list-container base-card">
        <ul className="list-unstyled">
          <li>
            <Review review={review} />
          </li>
          <li>
            <Review review={review} />
          </li>
          <li>
            <Review review={review} />
          </li>
          <li>
            <Review review={review} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieReviews;
