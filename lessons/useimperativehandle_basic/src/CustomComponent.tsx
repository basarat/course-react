// focus(1:1)
import { forwardRef, useImperativeHandle } from 'react';

// focus(1:4)
export type Handle = {
  logMessage: (value: string) => void,
  logError: (value: string) => void,
};

export const CustomComponent = forwardRef(
  function CustomComponent(props: {}, ref: React.Ref<Handle>) {
    // focus(1:8)
    useImperativeHandle(ref, () => ({
      logMessage: (value: string) => {
        console.log(value);
      },
      logError: (value: string) => {
        console.error(value);
      },
    }));
    return (
      <div>Custom Component</div>
    );
  }
);