export default function App() {
  return (
    <Example>
      <span>Hi <b>Fam!</b></span>
    </Example>
  );
}

type ExampleProps = {
  children?: React.ReactNode;
}

const Example = (props: ExampleProps) => {
  return (
    <div>
      {props.children}
    </div>
  );
}
