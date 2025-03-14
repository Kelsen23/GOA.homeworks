import Child from "./components/Child";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Child error={true} />
      </ErrorBoundary>
    </div>
  );
};

export default App;