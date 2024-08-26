export default function App() {
  return (
    <Example
      required
    />
  );
}

type ExampleProps = {
  required: boolean,
};

const Example = ({
  required,
}: ExampleProps) => {
  return (
    <div>
      required: {required ? 'true' : 'false'}
    </div>
  );
}
