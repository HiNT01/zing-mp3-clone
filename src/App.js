
import './App.css';
import GlobalStyle from './components/GlobalStyle';
import Home from './containers/Home';
function App() {
  return (
    <div className="App">
     <GlobalStyle children={<Home/>}/>
    </div>
  );
}

export default App;
