import Style from './Products.module.css'
function Produtcs() {
  return(
    <div className={Style.Shopping_scroll}>
      <header>
        <p>Seu item tem <span className={Style.itens}>67 </span></p> <button></button>
      </header>
      <div className={Style.ProdutosADC}>
      </div>
      <div className={Style.Price}>
        <div className={Style.Checket}>
        </div>
          <div className={Style.Finalização}>
          </div>
      </div>
    </div>
  )
  
}

export default Produtcs