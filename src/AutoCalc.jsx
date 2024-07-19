import React, { useState, useEffect } from 'react';

const AutoCalc = () => {
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);
    const [answer, setAnswer] = useState(0);
    const [operation, setOperation] = useState('add'); 

    useEffect(() => {
        if (operation === 'add') {
            setAnswer(A + B);
        } else if (operation === 'subtract') {
            setAnswer(A - B); 
        } else if (operation === 'multiplication') {
            setAnswer(A * B);
        } else if (operation === 'division') {
            setAnswer(A / B);
        }
    }, [A, B, operation]);

    return (
        <>
            <h1>{answer}</h1>
            <input
                type="number"
                value={A}
                onChange={(e) => setA(parseInt(e.target.value))}
            />
            <input
                type="number"
                value={B}
                onChange={(e) => setB(parseInt(e.target.value))}
            />
            <button onClick={() => setOperation('add')}>Add</button>
            <button onClick={() => setOperation('subtract')}>Subtract</button>
            <button onClick={() => setOperation('multiplication')}>Multiply</button>
            <button onClick={() => setOperation('division')}>Divide</button>
        </>
    );
}

export default AutoCalc;
