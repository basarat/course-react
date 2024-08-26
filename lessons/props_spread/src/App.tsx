export default function App() {
  const props: ExampleProps = {
    song: 'message in a bottle',
    by: 'police'
  };
  return (
    <Example
      {...props}
    />
  );
}

type ExampleProps = {
  song: string,
  by: string,
};
const Example = ({ song, by }: ExampleProps) => {
  return (
    <div>
      <i>{song}</i>
      <br />
      by <b>{by}</b>
    </div>
  );
}