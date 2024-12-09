import React, {Component, ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: string | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false, error: null};
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return {hasError: true, error: 'Error'};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // You can log the error to an error reporting service
    console.log('Error caught in ErrorBoundary:', error, errorInfo);
    // set state
    this.setState({hasError: true, error: error.toString()});
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <View style={styles.flex}>
          <Text>Something went wrong.</Text>
          <Text>{this.state.error}</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  flex:{flex: 1, justifyContent:'center', alignItems:'center'}
});

export default ErrorBoundary;
