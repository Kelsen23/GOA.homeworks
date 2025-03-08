import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.reset = this.reset.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }


  render() {
    if (this.state.error) {
      return (
        <h1>An error detected</h1>
      )
    }

    return this.props.children;
  }
}