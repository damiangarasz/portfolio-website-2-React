import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Oh no!</h2>
          <p>
            There was an error. <Link to="/">Click here</Link> to go back to the
            homepage.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
