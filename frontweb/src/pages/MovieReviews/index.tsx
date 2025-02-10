import ReviewForm from "./ReviewForm";
import Review from "./Review";
import "./styles.css";
import { MovieReview } from "types/movieReview";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { BASE_URL, requestBackend } from "utils/requests";
import { useParams } from "react-router-dom";
import { hasAnyRoles } from "utils/auth";

type UrlParams = {
  movieId: string;
};

const MovieReviews = () => {
  const [review, setReview] = useState<MovieReview[]>();

  const { movieId } = useParams<UrlParams>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `${BASE_URL}/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReview(response.data);
    });
  }, [movieId]);

  return (
    <div className="home-review-container home-base-container">
      <h1>Tela de detalhes do filme id: 1</h1>
      {hasAnyRoles(["ROLE_MEMBER"]) && (
        <div className="comment-form-card">
          <ReviewForm currentMovieId={movieId} />
        </div>
      )}

      <div className="review-list-container base-card">
        <ul className="list-unstyled">
          {review?.map((movieReview) => (
            <li key={movieReview.id}>
              <Review review={movieReview} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieReviews;
