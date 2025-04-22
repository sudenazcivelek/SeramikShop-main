import { Link } from "react-router-dom";

const Login = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="account-column">
      <h2>Login</h2>
      <form>
        <div>
          <label>
            <span>
              Username or email address <span className="required">*</span>
            </span>
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            <span>
              Password <span className="required">*</span>
            </span>
            <input type="password" />
          </label>
        </div>
        <p className="remember">
          <label>
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <button className="btn btn-sm">Login</button>
        </p>
        <a href="#" className="form-link">
          Lost your password?
        </a>
      </form>

      {/* 🔻 Kişisel Bilgilerim Butonu */}
      {user && (
        <div style={{ marginTop: "1rem" }}>
          <Link to="/profile">
            <button className="btn btn-sm">Kişisel Bilgilerim</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Login;
