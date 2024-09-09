import React from 'react';

const fieldStyle = {
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  gap: '10px',
  justifyContent: 'center',
} as const;

type FancyFieldProps = {
  id: string,
  label: string,
  value: string,
  onChange: (value: string) => void,
};


export const FancyField =
  // focus(1:1)
  React.forwardRef(function FancyField({ id, label, value, onChange }: FancyFieldProps, ref: React.Ref<HTMLInputElement>) {
    // focus(4:4)    
    return (
      <div style={fieldStyle}>
        <label htmlFor={id}>{label}</label>
        <input id={id} ref={ref}
          value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  });