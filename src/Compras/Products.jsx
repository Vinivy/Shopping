import Style from './Products.module.css'
//
//SVG´s
import Close from '../icons/Close.svg'
import Ticket from '../icons/Tag.svg'
function Produtcs() {
  return(
    <div className={Style.Shopping_scroll}>
      <header>
        <p>Seu carrinho tem <span className={Style.itens}>0</span></p> <button><img src={Close} alt="" /></button>
      </header>
      <div className={Style.ProdutosADC}>
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
  )
  
}

export default Produtcs