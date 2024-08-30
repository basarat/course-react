import React from "react";

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
  fallback: React.ReactNode;
}> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    console.log(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
