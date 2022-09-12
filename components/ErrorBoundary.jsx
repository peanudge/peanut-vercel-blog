import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(err) {
    console.log(`getDerivedStateFromError: ${err}}`);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.log(`componentDidCatch: ${{ error, errorInfo }}`);
  }

  render() {
    const { fallbackComponent, children } = this.props;
    const { hasError, error, errorInfo } = this.state;
    if (hasError) {
      if (fallbackComponent) {
        return fallbackComponent;
      }
      return (
        <div>
          <h2>Error occurred</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return children;
  }
}
