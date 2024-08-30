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
      {messages.map((message, i) => {
        return (
          <Lyric key={i} message={message} />
        );
      })}
    </div>
  );
}

type LyricProps = {
  message: string,
};

const Lyric = ({ message }: LyricProps) => {
  return (
    <p>🎵 {message} 🎵</p>
  );
}