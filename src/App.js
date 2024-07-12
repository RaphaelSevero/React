import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'

function App() {
  
  const nome = 'Raphael nome const'

  return (
    <div className="App">
      <Frase />
      <HelloWorld />
      <SayMyName nome= "Raphael Severo" />
      <SayMyName nome= "João" />
      <SayMyName nome={nome} />
      <Pessoa 
       nome= "Raphael Severo"
       idade= "32"
       profissao= "Programador"
       foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  )

}

export default App;
