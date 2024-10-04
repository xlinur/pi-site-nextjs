import React from 'react';

const defaultState = { hasError: false };

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <>Something went wrong. Please try to reload the page</>;
    }

    return children;
  }
}

export default ErrorBoundary;
