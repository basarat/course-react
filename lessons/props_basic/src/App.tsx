export default function App() {
  return (
    <Example message="Hello Fam!" />
  );
}

type ExampleProps = {
  message: string,
};

const Example = (props: ExampleProps) => {
  return (
    <div>Message: {props.message}</div>
  );
}