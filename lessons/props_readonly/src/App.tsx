export default function App() {
  return (
    <Example message='Hello' />
  );
}

type ExampleProps = {
  message: string,
};

const Example = (props: ExampleProps) => {
  props.message = 'Attempt Mutation 🦁'; // ❌ this will cause a runtime error.
  return (
    <div>{props.message}</div>
  );
};
