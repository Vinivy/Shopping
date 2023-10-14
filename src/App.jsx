import './App.css'
//Imgs dos Produtos
import Cadeira from './Assets/Cadeira.jpg'
import Headset from './Assets/Headset.jpg'
import Monitor from './Assets/Monitor.jpg'
import Teclado from './Assets/Teclado.jpg'
import Mouse from './Assets/Mouse.jpg'
import Gabinete from './Assets/Gabinete.jpg'
//
//SVGS
import Car from './icons/Add-car.svg'
//import da barra de compras
import Products from './Compras/Products.jsx'
function App() {
  return (
  <div className="App">
    <main>
      <section>
        <div className='product'>
          <img src={Cadeira} alt="" />
          <p>Cadeira Gamer  RGB (Led)</p>
          <div className='ValorCadeira'>
           <span>R$ 8.599,90</span> 
           <button ><img src={Car} alt="" /></button>
          </div>
        </div>
      </section>  
      <section>
        <div className='product'>
          <img src={Headset} alt="" />
          <p>Headset Gamer RGB Preto</p>
        </div>
        <div className='ValorHeadset'>
           <span className='Headset'>R$ 8.599</span> 
           <button><img src={Car} alt="" /></button>
        </div>
      </section>  
      <section>
        <div className='product'>
          <img src={Monitor} alt="" />
          <div>
           <p>Monitor Gamer Curvo 49 DQHD</p>
            <div className='ValorMonitor'>
             <span>R$ 8.599</span> 
             <button><img src={Car} alt="" /></button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='product'>
          <img src={Teclado} alt="" />
          <div>
           <p>Teclado Gamer Mecânico</p>
            <div className='ValorTeclado'>
             <span>R$ 8.599</span> 
             <button><img src={Car} alt="" /></button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='product'>
          <img src={Mouse} alt="" />
          <div>
           <p>Mouse Gamer RGB preto</p>
           <div className='ValorMouse'>
           <span>R$ 8.599</span> 
           <button><img src={Car} alt="" /></button>
           </div>
          </div>
        </div>
      </section>
      <section>
        <div className='product'>
          <img src={Gabinete} alt="" />
          <div>
           <p>Gabinete RGB Preto </p>
            <div className='ValorGabinete'>
             <span>R$ 8.599</span> 
             <button><img src={Car} alt="" /></button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <>
     <Products/>
    </>
   </div>
    
  )
}

export default App
