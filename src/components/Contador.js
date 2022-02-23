import React, {useState} from 'react'

function Contador(props) {
    const [numero, setNumero] = useState(props.inicial)
    
    const incremento = () => {
        if(numero == props.limite) {
            alert("voce atingiu o limite maximo")
            return
        }

        setNumero (numero + props.passo)
        console.log(numero)
    }

    const decremento = () => {
        if(numero == 0) {
            alert("não são aceitos numeros negativos")
            return
        }
        
        setNumero (numero - props.passo)
        console.log(numero)
    }
    return (
        <>
            <h2>{numero}</h2>
            <button onClick={incremento}>+</button>
            <button onClick={decremento}>-</button>
        </>
    )
}

export default Contador;