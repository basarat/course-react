import React from 'react';

type State = {
  hasError: boolean,
};

export class ErrorBoundary extends React.Component<{ children: React.ReactNode, fallback: React.ReactNode }> {
  state: State = { hasError: false };

  static getDerivedStateFromError(_error: Error): State {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error);
    console.log('errorInfo.componentStack:', errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}