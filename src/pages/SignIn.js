import { useContext } from "react";
import TokenContext from "../context/TokenContext";

export default function SignIn() {
  const { setToken } = useContext(TokenContext);

  function submitHandler(event) {
    event.preventDefault();

    fetch("http://localhost:3001/auth", {
      method: "POST",

      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        username: event.target.username.value,

        password: event.target.password.value,
      }),
    })
      .then((res) => res.json())

      .then((data) => setToken(data.token));
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>
          Username
          <input type="text" name="username" />
        </label>
      </div>

      <div>
        <label>
          Password
          <input type="password" name="password" />
        </label>
      </div>

      <button type="submit">Sign in</button>
    </form>
  );
}
