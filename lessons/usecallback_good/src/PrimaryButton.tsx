import React from 'react';

export type ButtonProps = {
  onClick: () => void,
  children: React.ReactNode,
};

const buttonStyle = {
  borderRadius: '5px',
  background: '#fff',
  color: '#000'
};

export const PrimaryButton = React.memo((props: ButtonProps) => {
  console.log('Rendering PrimaryButton');
  return (
    <button style={buttonStyle} onClick={props.onClick}>
      {props.children}
    </button>
  )
});