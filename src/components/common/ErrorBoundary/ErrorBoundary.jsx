import React, { Component } from "react";

import ErrorFallback from "../Error/ErrorFallback";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary Caught:", error);
    console.error("Component Stack:", errorInfo);
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
    });

    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          title="Oops! Something went wrong."
          message="An unexpected error occurred. Please try again."
          onRetry={this.handleRetry}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;