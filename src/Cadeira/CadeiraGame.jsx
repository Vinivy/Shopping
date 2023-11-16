import { useState } from "react"
import Style from "./Cadeira.module.css"
//Img
import ImgCadeira from '../Assets/Cadeira.jpg'
//botões
function CadeiraGame(){
  const [ Unidade, setUnidade] = useState(0)

  const aumentando = () => {
    setUnidade(Unidade + 1)
  }

  const diminuindo = () => {
    setUnidade(Unidade - 1)
  }

  return (
    <div className={Style.Cadeira}>
      <img src={ImgCadeira} alt="" />
      <div className={Style.info}>
        <h3>Cadeira Gamer  RGB - Preta com Iluminação (Led)</h3>
        <div className={Style.Valores}>
          <p>R$ 959,90</p>
          <div className={Style.Adds}>
            <button onClick={diminuindo}>
               <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
               <path d="M15.1302 8.84097C15.1314 9.03988 15.0535 9.23113 14.9137 9.37263C14.7739 9.51413 14.5837 9.59431 14.3848 9.59552L3.38495 9.66235C3.18605 9.66356 2.9948 9.5857 2.8533 9.4459C2.71179 9.30611 2.63162 9.11583 2.63041 8.91692C2.6292 8.71801 2.70706 8.52677 2.84685 8.38526C2.98665 8.24376 3.17693 8.16358 3.37584 8.16237L14.3756 8.09555C14.5745 8.09434 14.7658 8.17219 14.9073 8.31199C15.0488 8.45178 15.129 8.64207 15.1302 8.84097Z" fill="#A855F7"/>
              </svg>
            </button>
            <span>{Unidade}</span>
            <button onClick={aumentando}> 
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M15.1286 8.35491C15.1298 8.55382 15.0519 8.74506 14.9121 8.88657C14.7723 9.02807 14.582 9.10825 14.3831 9.10945L9.63322 9.13831L9.66208 13.8882C9.66329 14.0871 9.58543 14.2784 9.44563 14.4199C9.30584 14.5614 9.11556 14.6416 8.91665 14.6428C8.71774 14.644 8.5265 14.5661 8.38499 14.4263C8.24349 14.2865 8.16331 14.0962 8.1621 13.8973L8.13325 9.14743L3.38333 9.17628C3.18443 9.17749 2.99318 9.09963 2.85168 8.95984C2.71018 8.82004 2.63 8.62976 2.62879 8.43085C2.62758 8.23195 2.70544 8.0407 2.84524 7.8992C2.98503 7.75769 3.17531 7.67752 3.37422 7.67631L8.12413 7.64745L8.09528 2.89754C8.09407 2.69863 8.17192 2.50739 8.31172 2.36589C8.45151 2.22438 8.6418 2.14421 8.8407 2.143C9.03961 2.14179 9.23086 2.21965 9.37236 2.35944C9.51386 2.49924 9.59404 2.68952 9.59525 2.88843L9.62411 7.63834L14.374 7.60948C14.5729 7.60827 14.7642 7.68613 14.9057 7.82593C15.0472 7.96572 15.1274 8.156 15.1286 8.35491Z" fill="#A855F7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default CadeiraGame