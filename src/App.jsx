import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const _users = await response.json();
        setUsers(_users);
        console.log(_users);
      } catch (error) {
        console.log("Error beim Fetchen der Daten: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>User List</h1>
      <ol className="userlist">
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ol>
    </>
  );
}

export default App;
