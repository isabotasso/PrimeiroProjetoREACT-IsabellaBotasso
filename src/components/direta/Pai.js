import React, { useState } from 'react'
import Filho from './Filho'
function Pai(props) {

    let x = 13
    let y = 200

    return (
      <>
        <Filho a={x} b={y}></Filho>
        <Filho a={x + 20} b={y + 40}></Filho>

      </>
    )
}

export default Pai