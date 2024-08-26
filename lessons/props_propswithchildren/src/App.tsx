export default function App() {
  return (
    <Example message='in a bottle'>
      are cute
    </Example>
  );
}

type ExampleProps = React.PropsWithChildren<{
  message: string,
}>;

const Example = (props: ExampleProps) => {
  return (
    <div>
      message {props.message}
      <br />
      children {props.children}
    </div>
  );
}
