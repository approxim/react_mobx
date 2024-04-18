import './App.css';
// import Counter from './components/Counter.tsx';
import LazyLoadComponent from './components/PhotoPage/LazyLoadComponent.jsx';
// import PhotoPage from './components/PhotoPage/PhotoPage.tsx';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <LazyLoadComponent />

    </div>
  );
}

export default App;
