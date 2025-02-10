import { useForm } from "react-hook-form";
import "./styles.css";

type ReviewData = {
  review: string;
}

const ReviewForm = () => {
  
  const {register, handleSubmit, formState: { errors } } = useForm<ReviewData>();

  const onSubmit = (reviewData: ReviewData) => {
    console.log(reviewData);
  }

  return (


    <div className="base-card comment-card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
          {...register("review", {
            required: 'Campo obrigatório'
          })}
            type="text"
            className={`form-control base-input ${
              errors.review ? "is-invalid" : ""
            }`}
            placeholder="Deixe sua avaliação aqui"
            name="review"
          />
        </div>
        <div className="invalid-feedback d-block">
            {errors.review?.message}
        </div>
        <div className="comment-submit">
          <button className="bg-primary btn">Salvar Avaliação</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
