import { useContext } from "react"
import TokenContext from "../context/TokenContext"
import logo from "../images/simple.png"

export default function SignIn() {
  const { setToken } = useContext(TokenContext)

  function submitHandler(event) {
    event.preventDefault()

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

      .then((data) => setToken(data.token))
  }
  return (
    <div className="flex flex-col items-center">
      <form className="mt-28" onSubmit={submitHandler}>
        <div className="mt-4 p-6">
          <img
            className="items-center p-6 shadow-xl rounded-full"
            src={logo}
          ></img>
          <label className="flex flex-col items-center mt-6">
            <h3 className="text-white font-semibold shadow-xl">Username</h3>
            <input
              className="rounded-full p-1 shadow-xl"
              type="text"
              name="username"
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col items-center">
            <h3 className="text-white font-semibold shadow-xl">Password</h3>
            <input
              className="rounded-full p-1 shadow-xl"
              type="password"
              name="password"
            />
          </label>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="text-white bg-primary-300 font-semibold rounded-full shadow-xl justify-self-center"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}
