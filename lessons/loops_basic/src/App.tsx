const messages = [
  "Never gonna give you up",
  "Never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry",
  "Never gonna say goodbye",
  "Never gonna tell a lie and hurt you",
];

export default function App() {
  return (
    <div>
      {messages.map((message, i) => (
        <p key={i}>{message}</p>
      ))}
    </div>
  );
}
