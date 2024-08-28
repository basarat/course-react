import { useState } from "react";

type User = { name: string } | null;

export default function App() {
  const [user, setUser] = useState<User>(null);
  const load = () => setUser({ name: "Jane" });
  const clear = () => setUser(null);

  return (
    <>
      <div>
        <button onClick={load}>Load</button>
        <button onClick={clear}>Clear</button>
      </div>

      {user && <p>{user.name}</p>}
    </>
  );
}
