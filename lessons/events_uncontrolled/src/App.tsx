export default function App() {
  return (
    <div>
      <input
        defaultValue="Hi Fam!"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
}
