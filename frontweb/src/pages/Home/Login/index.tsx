import { useForm } from "react-hook-form";
import "./styles.css";
import { requestBackendLogin } from "utils/requests";
import { useState } from "react";
import { getAuthData, saveAuthData } from "utils/storage";
import { useHistory } from "react-router-dom";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {

  const history = useHistory();

  const { register, handleSubmit, formState:{errors} } = useForm<FormData>();

  const [hasError, setHasError] = useState(false);

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        const token = getAuthData().access_token;
        console.log('TOKEN GERADO: ' + token);
        console.log("SUCESSO", response);
        history.push('/movies');
      })
      .catch((error) => {
        setHasError(true);
        console.log("ERRO", error);        
      });
  };

  return (
    <>
      <div className="base-card login-card home-base-container">
        <h1>LOGIN</h1>
        {hasError && (
          <div className="alert alert-danger">
            Erro ao tentar efetuar o login
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register("username", {
                required: "Campo obrigatório", 
                pattern: {
                  value:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido"
                }
              })}
              type="text"
              className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
              placeholder="Email"
              name="username"
            />
            <div className="invalid-feedback d-block">{errors.username?.message}</div>
          </div>
          <div className="mb-2">
            <input
              {...register("password", {
                required: "Campo obrigatório"
              })}
              type="password"
              className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
              placeholder="Senha"
              name="password"
            />
            <div className="invalid-feedback d-block">{errors.password?.message}</div>
          </div>
          <div className="login-submit">
            <button className="bg-primary btn">FAZER LOGIN</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
