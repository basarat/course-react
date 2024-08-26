export default function App() {
  return (
    <Example message='Hello' />
  );
}

type ExampleProps = {
  message: string,
};

const Example = (props: ExampleProps) => {
  // ❌ this will cause a runtime error
  // 🤕 The component will not render
  props.message = 'Attempt Mutation 🦁'; 
  return (
    <div>{props.message}</div>
  );
};
