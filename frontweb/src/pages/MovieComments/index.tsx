import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import "./styles.css";

const MovieComments = () => {
    return (
        <div className="home-container">
            <h1>Tela de detalhes do filme id: 1</h1>
            <div className="comment-form-card">
                <CommentForm />
            </div>
            <div>
            <CommentsList />
            </div>
        </div>

    );
}

export default MovieComments;