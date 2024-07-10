import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'


function App() {
  
  const nome = 'Raphael'

  return (
    <div className="App">
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
    </div>
  )

}

export default App;
