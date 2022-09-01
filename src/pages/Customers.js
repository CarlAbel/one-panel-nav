import { useEffect, useState, useContext } from "react"
import TokenContext from "../context/TokenContext"

export default function Customers() {
  const [users, setUsers] = useState([])

  const { token } = useContext(TokenContext)

  useEffect(function () {
    fetch("http://localhost:3001/users", {
      headers: {
        authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())

      .then((data) => setUsers(data))
  }, [])

  return (
    <div className="bg-primary-100">
      <div className="flex flex-col">
        <h1 className="text-white self-center pt-24 text-4xl">Customers</h1>
      </div>
      <article className="p-8">
        {users.map((user) => (
          <div
            key={user.userId}
            className="rounded-3xl w-74 h-72 p-4 bg-primary-400  mb-12"
          >
            <div className="flex flex-col">
              <div className="flex justify-between solidBorderB pb-2 ">
                <div>
                  <h1 className="text-white pb-2">
                    Full name: {user.userName}
                  </h1>
                  <p className="text-white text-xs">
                    Customer joined: {user.joined}
                  </p>
                </div>
                <img className="bg-primary-100 rounded-full w-12 h-12 p-6">
                  {user.image}
                </img>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h2 className="text-white pt-1">Email: {user.userEmail}</h2>
                  <p className="text-white text-xs capitalize">
                    Phone-Number: {user.phone}
                  </p>
                </div>
              </div>
              <p className="text-white self text-sm self-center solidBorderB pr-10 pl-4">
                Stock count: {user.userName}
              </p>
              <div className="flex justify-between">
                <p className="text-white pt-6 pl-4">$ {user.userName}</p>
                <p className="text-white pt-6 pr-4">$ {user.userName}</p>
              </div>
            </div>
          </div>
        ))}
      </article>
    </div>
  )
}
