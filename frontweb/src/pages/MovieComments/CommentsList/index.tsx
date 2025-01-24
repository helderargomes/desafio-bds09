import "./styles.css"
import CommentIcon from "assets/images/comment-icon.png"

const CommentsList = () => {
  return (
    <div className="comments-list-container base-card">
      <ul className="list-unstyled">
        <li>
          <div className="comment-header">
            <img src={CommentIcon} alt="comment-icon" />
            <h4>Maria Silva</h4>
          </div>
          <div className="comment-box">
            <p>
              Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
            </p>
          </div>
        </li>
        <li>
          <div className="comment-header">
            <img src={CommentIcon} alt="comment-icon" />
            <h4>Maria Silva</h4>
          </div>
          <div className="comment-box">
            <p>
              Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
            </p>
          </div>
        </li>
        <li>
          <div className="comment-header">
            <img src={CommentIcon} alt="comment-icon" />
            <h4>Maria Silva</h4>
          </div>
          <div className="comment-box">
            <p>
              Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
            </p>
          </div>
        </li>
        <li>
          <div className="comment-header">
            <img src={CommentIcon} alt="comment-icon" />
            <h4>Maria Silva</h4>
          </div>
          <div className="comment-box">
            <p>
              Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CommentsList;
