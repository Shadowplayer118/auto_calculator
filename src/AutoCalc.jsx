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
            <input className='p-1 border border-black rounded-xl text-xl font-medium text-center'
                type="number"
                value={A}
                onChange={(e) => setA(parseInt(e.target.value))}
            />
            <input className='p-1 border border-black rounded-xl text-xl font-medium text-center'
                type="number"
                value={B}
                onChange={(e) => setB(parseInt(e.target.value))}
            />
            <button className='rounded-lg bg-green-500 hover:bg-green-900 text-white' onClick={() => setOperation('add')}>Add</button>
            <button className='rounded-lg bg-red-500 hover:bg-red-900 text-white' onClick={() => setOperation('subtract')}>Subtract</button>
            <button className='rounded-lg bg-yellow-500 hover:bg-yellow-900 text-white' onClick={() => setOperation('multiplication')}>Multiply</button>
            <button className='rounded-lg bg-blue-500 hover:bg-blue-900 text-white' onClick={() => setOperation('division')}>Divide</button>
        </>
    );
}

export default AutoCalc;
