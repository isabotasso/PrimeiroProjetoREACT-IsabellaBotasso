import React, { useState } from 'react'

function Pessoa(props) {



    return (
      <>
        <hr></hr>
            <h2>{props.nome}</h2>
            <h2>{props.idade}</h2>
            <h2>{props.sexo}</h2>
            <h2>{props.estado_civil}</h2>

        <hr></hr>
      </>
    )
}

export default Pessoa;