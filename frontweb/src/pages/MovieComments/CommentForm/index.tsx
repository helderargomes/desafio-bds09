import "./styles.css";

const CommentForm = () => {
  return (
    <div className="base-card comment-card">
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Deixe sua avaliação aqui"
            name="comment"
          />
        </div>
        <div className="comment-submit">
          <button className="bg-primary btn">Salvar Avaliação</button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
