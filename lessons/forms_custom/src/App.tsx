import { useState } from 'react';
import { Form } from './Form';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [serverResponse, setServerResponse] = useState('');

  return (
    <>
      <Form onSubmit={async () => {
        const response = await fetch('http://localhost:8080', {
          method: 'POST',
          body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        setServerResponse(data);
      }}>
        <label htmlFor="username">Username</label>
        <input id="username"
          value={username} onChange={e => setUsername(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input id="password"
          type="password" value={password} onChange={e => setPassword(e.target.value)} />

        <button type="submit">Submit</button>
      </Form>

      <pre>username: {username}, password: {password}</pre>

      <pre>Server Response: {JSON.stringify(serverResponse, null, 2)}</pre>
    </>
  );
}