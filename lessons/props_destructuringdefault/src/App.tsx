export default function App() {
  return (
    <Example
      message='in a bottle'
    />
  );
}

type ExampleProps = {
  message: string,
  required?: boolean,
};

const Example = ({
  message,
  required = false,
}: ExampleProps) => {
  return (
    <div>
      message: {message}
      <br />
      required: {required ? 'true' : 'false'}
    </div>
  );
}
