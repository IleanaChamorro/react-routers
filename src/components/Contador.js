import React, { useState } from 'react'

const Contador = () => {
    const [Contador, setContador] = useState(0);

    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    return (
        <div style={{textAlign: "center"}}>
            <h2>Contador</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <h3></h3>
        </div>
  )
}

export default Contador