export default function App() {
  const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log("Clicked", { event }, { nativeEvent: event.nativeEvent });
  };

  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}
