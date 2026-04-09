// Where the entire dashboard lives (starting point of the page)
import './App.css';
// Importing the actual dashboard component to show as the "app"
import WacefePage from './pages/WacefePage';

// Creating an app function to initialize the actual "dahsboard page"
function App() {
  // Return the actual page component
  return <WacefePage />;
}

export default App;
