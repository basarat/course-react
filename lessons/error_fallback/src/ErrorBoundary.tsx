import React from "react";

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
  // focus(1:1)
  fallback: React.ReactNode;
}> {
  state: State = { hasError: false };

  static getDerivedStateFromError(_error: Error): State {
    return { hasError: true };
  }

  render() {
    // focus(1:3)
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
