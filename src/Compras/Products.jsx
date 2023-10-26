import Style from './Products.module.css'
//
//SVG´s
import Close from '../icons/Close.svg'
import Carrinho from '../icons/Add-car.svg'
import Ticket from '../icons/Tag.svg'

import { useState } from "react";
function Produtcs({itens, Gabe, Head, Monit, Rat, Tecla }) {
  const [visible, setVisible] = useState(false)

  return(
    <div>
      <button className={Style.ButtonPrincipal} onClick={() => setVisible(!visible)}>
        {visible ? <img src={Close}/> : <img src={Carrinho}/> }
      </button>
      {visible && (
        <div>
          {/*os itens vem aqui */}
          <div className={Style.Shopping_scroll}>
            <header>
              <p>Seu carrinho tem <span className={Style.itens}>0</span></p> <button onClick={() => setVisible(false)}><img src={Close} alt="" /></button>
            </header>
            <div className={Style.ProdutosADC}>
              {
                itens.map((Item, index) => <Item key={index} />)}
              {
                Gabe.map((Gabinete, index) => <Gabinete key={index}/>)}
              {
                Head.map((Headset, index) => <Headset key={index}/>)}
              {
                Monit.map((Monitor, index) => <Monitor key={index}/>)}
              {
                Rat.map((Mouse, index) => <Mouse key={index}/>)}
              {
                Tecla.map((Teclado, index) => <Teclado key={index}/>)}
            </div>
            <div className={Style.Price}>
              <div className={Style.Checket}>
                <div className={Style.Total}>
                  <h3>Total:</h3> <span className={Style.ValorTotal}>R$ 0</span>
                </div>
                <div className={Style.Cupom}>
                  <p><img src={Ticket} alt="" />Adicione Seu Cupom</p>
                </div>
              </div>
              <div className={Style.Finalizar}>
                <button>Finalizar Compra</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Produtcs
