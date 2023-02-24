import './App.css';
import Search from './Components/Search';
import BookData from './Data.json'

function App() {
  return (
    <div className="App">
      <Search placeholder="Enter a Book Name..." data={BookData} />
    </div>
  );
}

export default App;
