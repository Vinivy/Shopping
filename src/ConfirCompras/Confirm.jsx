import { useState } from "react";
import Style from "./Confirm.module.css"
import Icon from "./Concluido.svg"
function Conclusion(){
  const [Confirm, setConfirm] = useState(false)
    
  return (
    <section className={Style}>
        <img src={Icon} alt="" />
        <h1>OBRIGADO POR COMPRAR NOSSOS PRODUTOS</h1>
        <button onClick={() =>{setConfirm(!Confirm)}}>OK</button>
        {Confirm && (
          <>
          </>
        )}
    </section>
  )
}

export default Conclusion