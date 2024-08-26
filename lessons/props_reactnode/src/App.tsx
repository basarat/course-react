export default function App() {
  return (
    <Example message={<b>Hello Fam!</b>} />
  );
}

type ExampleProps = {
  message: React.ReactNode;
}

const Example = (props: ExampleProps) => {
  return (
    <div>Message: {props.message}</div>
  );
}
