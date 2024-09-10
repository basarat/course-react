import { useRef } from 'react';
// focus(1:1)
import { Handle, CustomComponent } from './CustomComponent';

export default function App() {
  // focus(1:1)
  const customComponentRef = useRef<Handle>(null);

  // focus(2:2, 4:5)
  return <>
    <CustomComponent ref={customComponentRef} />

    <button onClick={() => customComponentRef.current?.logMessage('Sample Log Message')}>Log Message</button>
    <button onClick={() => customComponentRef.current?.logError('Sample Log Error')}>Log Error</button>
  </>;
}
