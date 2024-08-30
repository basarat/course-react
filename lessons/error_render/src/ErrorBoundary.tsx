import React from 'react';

type State = { hasError: boolean };

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }> {
  state: State = { hasError: false };

  static getDerivedStateFromError(_error: Error): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }

    return this.props.children;
  }
}