
// import Primeiro from './components/Primeiro';
import logo from './logo.svg';
import './App.css';
// import CompPadrao, {Component1, Component2} from './components/Multi.js'
import Estilos from './components/Estilos';
import MinMax from './components/MinMax';
import TesteBotao from './testebotao/botao.js/botao';
import Titulo from './components/Titulo'
import Botao from './components/Botao';

function App(){
  return(
    <div>
      {/* <h1>Primeiro componente</h1> */}
    {/* <Primeiro></Primeiro>
    <CompPadrao></CompPadrao>
    <Component1></Component1>
    <Component2></Component2> */}
    <Estilos></Estilos>
    <MinMax min="5" max="10"></MinMax>
    <MinMax min={20} max={30}></MinMax>
    <TesteBotao label="Comprar"></TesteBotao>
    <TesteBotao label="finalizar"></TesteBotao>
    <TesteBotao label="adicionar" backColor="red"></TesteBotao>
    <Titulo principal="ola" secundario="tudo bem"></Titulo>
    <Botao></Botao>
    </div>
  );
}

export default App;




