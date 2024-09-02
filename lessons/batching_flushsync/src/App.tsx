import { useState, useEffect } from 'react';
// focus
import { flushSync } from 'react-dom';

export default function PrintApp() {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    function handleBeforePrint() {
      console.log('isPrinting true');
      // focus(1:3)
      flushSync(() => {
        setIsPrinting(true);
      });
    }
    function handleAfterPrint() {
      console.log('isPrinting false');
      setIsPrinting(false);
    }

    // focus
    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    }
  }, []);

  // focus(2:2)
  return (<>
    <div>isPrinting: {isPrinting ? 'true' : 'false'}</div>
    <button onClick={() => window.print()}>Print</button>
  </>);
}