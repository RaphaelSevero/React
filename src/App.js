import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'


function App() {
  
  const nome = 'Rapha'

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome= "Raphael" />
      <SayMyName nome= "João" />
      <SayMyName nome={nome} />
      <Pessoa 
       nome= "Raphael"
       idade= "32"
       profissao= "Programador"
       foto="https://via.placeholder.com/150"
      />
    </div>
  )

}

export default App;
