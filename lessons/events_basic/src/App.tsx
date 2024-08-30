export default function App() {
  const onButtonClick = () => {
    console.log('Clicked');
  };

  return (
    <div>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  );
}