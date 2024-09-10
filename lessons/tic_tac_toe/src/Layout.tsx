import React from 'react';

export type LayoutProps = React.PropsWithChildren<{
  gap: number
}>;

export const Row = React.memo(({ gap, children }: LayoutProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: gap }}>
      {children}
    </div>
  );
});

export const Column = React.memo(({ gap, children }: LayoutProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: gap }}>
      {children}
    </div>
  );
});