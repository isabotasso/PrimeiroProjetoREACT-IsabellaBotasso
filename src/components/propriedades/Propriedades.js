import React, { useState } from 'react'

function Propriedades(props) {

console.log(props.nome)

    return (
      <>
        <h2>{props.nome}</h2>
      </>
    )
}

export default Propriedades;