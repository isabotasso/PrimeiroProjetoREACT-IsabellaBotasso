
import Primeiro from './components/Primeiro';
import logo from './logo.svg';
import './App.css';
import CompPadrao, {Component1, Component2} from './components/Multi.js'

function App(){
  return(
    <div>
      <h1>Primeiro componente</h1>
    <Primeiro></Primeiro>
    <CompPadrao></CompPadrao>
    <Component1></Component1>
    <Component2></Component2>
    </div>
  );
}

export default App;




