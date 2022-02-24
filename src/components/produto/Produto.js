import React, { useState } from 'react'
import './produto.css'

function Produto(props) {

    let btnClasss = 'btn-comprar '
    btnClasss += props.verde ? 'verde' : ''
    btnClasss += props.rosa ? 'rosa' : ''


    return (
      <>
        <li className="item">
            <div className="nome">{props.nome}</div>
            <div className="marca">{props.marca}</div>
            <div className="valor">R${props.valor}</div>
            <button className={btnClasss}>Comprar</button>
        </li>
      </>
    )
}

export default Produto;