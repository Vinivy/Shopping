import './App.css'
//Imgs dos Produtos
import ImgCadeira from './Assets/Cadeira.jpg'
import ImgHeadset from './Assets/Headset.jpg'
import ImgMonitor from './Assets/Monitor.jpg'
import ImgTeclado from './Assets/Teclado.jpg'
import ImgMouse from './Assets/Mouse.jpg'
import ImgGabinete from './Assets/Gabinete.jpg'
//
//SVGS
import Car from './icons/Add-car.svg'
//import da barra de compras
import Products from './Compras/Products.jsx'

import { useState } from "react"
//Componetes de add
import CadeiraGame from './Cadeira/CadeiraGame'
//
import FoneHeadset from './Headset/FoneHeadset'
//
import Monitor from './Monitor/Monitor'
//
import Mouse from './Mouse/Mouse'
//
import Teclado from './Teclado/Teclado'
//
import Gabinete from './Gabinete/Gabinete'


function App() {
  const [cadeira, setcadeira] = useState([]);
  const [Fone , setFone] = useState([])
  const [Tela, setTela] = useState([])
  const [Teclas, setTeclas] = useState([])
  const [Rato, setRato] = useState([])
  const [Gabi, setGabi] = useState([])

  //Cadeira add
  const Cadeira = () => {
    return <CadeiraGame/>
  }

  const adicionarCadeira = () => {
    //esse previtens é para pode coloca maiss de um
    setcadeira( /*prevItens =>*/ [/*...prevItens ,*/ Cadeira])
  }

  //Gabinete
  const Gabin = () => {
    return <Gabinete/>
  }

  const addGabinete = () => {
    setGabi([Gabin])
  }
  //Fone add
  const headSet = () => {
    return <FoneHeadset/>
  }

  const addHeadset = () => {
    setFone([headSet])
  }
  
  //Monitor
  const Monite = () => {
    return <Monitor/>
  }

  const addMonitor = () => {
    setTela([Monite])
  }

  //Mouse
  const mouse = () => {
    return <Mouse/>
  }

  const addMouse = () => {
    setRato([mouse])
  }

  //Teclado 
  const Teclad = () => {
    return <Teclado/>
  }
  const addTeclado = () => {
    setTeclas([Teclad])
  }

  return (
  <div className="App">
    <main>
      <section>
        <div className='product'>
          <img src={ImgCadeira} alt="" />
          <p>Cadeira Gamer  RGB (Led)</p>
          <div className='ValorCadeira'>
           <span>R$ 8.599,90</span> 
           <button onClick={adicionarCadeira}><img src={Car} alt="" /></button>
          </div>
        </div>
      </section>  
      <section>
        <div className='product'>
          <img src={ImgHeadset} alt="" />
          <p>Headset Gamer RGB Preto</p>
        </div>
        <div className='ValorHeadset'>
           <span className='Headset'>R$ 8.599</span> 
           <button onClick={addHeadset}><img src={Car} alt="" /></button>
        </div>
      </section>  
      <section>
        <div className='product'>
          <img src={ImgMonitor} alt="" />
          <div>
           <p>Monitor Gamer Curvo 49 DQHD</p>
            <div className='ValorMonitor'>
             <span>R$ 8.599</span> 
             <button onClick={addMonitor} ><img src={Car} alt="" /></button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='product'>
          <img src={ImgTeclado} alt="" />
          <div>
           <p>Teclado Gamer Mecânico</p>
            <div className='ValorTeclado'>
             <span>R$ 8.599</span> 
             <button onClick={addTeclado} ><img src={Car} alt="" /></button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='product'>
          <img src={ImgMouse} alt="" />
          <div>
           <p>Mouse Gamer RGB preto</p>
           <div className='ValorMouse'>
           <span>R$ 8.599</span> 
           <button onClick={addMouse} ><img src={Car} alt="" /></button>
           </div>

          </div>
        </div>
      </section>
      <section>
        <div className='product'>
          <img src={ImgGabinete} alt="" />
          <div>
           <p>Gabinete RGB Preto </p>
            <div className='ValorGabinete'>
             <span>R$ 8.599</span> 
             <button onClick={addGabinete} ><img src={Car} alt="" /></button>
            </div>
          </div>
        </div>
      </section>
    
    <Products Cade={cadeira} Gabe={Gabi} Head={Fone} Monit={Tela} Rat={Rato} Tecla={Teclas}/>

      
    </main>
   </div>
    
  )
}

export default App
