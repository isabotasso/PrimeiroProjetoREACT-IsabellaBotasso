import React from 'react'

function Familia(props) {



    return (
      <>
        <h2>[inicio] Membros da familia</h2>
            {props.children}
        <h2>[fim] Membros da familia</h2>

      </>
    )
}

export default Familia