export default function App() {
  return (
    <Example children={<span>Hi <b>Fam!</b></span>} />
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
