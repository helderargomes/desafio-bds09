import "./styles.css";

const Login = () => {
    return (
<>
<div className="base-card login-card home-base-container">
    <h1>LOGIN</h1>
    <form>
        <div className="mb-4">
            <input type="text"
            className="form-control base-input"
            placeholder="Email" 
            name="username"/>
        </div>
        <div className="mb-2">
            <input type="password"
            className="form-control base-input"
            placeholder="Senha"
            name="password" />
        </div>
        <div className="login-submit">
            <button className="bg-primary btn">
                FAZER LOGIN
                </button>
        </div>
    </form>
</div>
</>
    )
}

export default Login;