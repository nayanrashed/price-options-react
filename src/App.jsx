
import './App.css'
import PriceOptions from './PriceOptions/PriceOptions'
import DaisyNav from './components/DaisyNav/DaisyNav'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'

function App() {
  

  return (
    <>
      
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-6xl text-center'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      
    </>
  )
}

export default App
