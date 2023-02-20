import React from "react";
import style from './Botao.module.scss';
class Botao extends React.Component<{texto: string, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void}>{
  render(){
    return (
        <button type={this.props.type} onClick={this.props.onClick} className={style.botao}>
            {this.props.texto}
        </button>
    )
  }
}

export default Botao;