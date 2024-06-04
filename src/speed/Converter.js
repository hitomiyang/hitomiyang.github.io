import React from 'react';
import './Converter.css';
import { useState } from 'react';
import CardFooter from './components/CardFooter';
import UnitControl from './components/UnitControl';
import UnitConverter from './components/UnitConverter';


function Converter() {
    const [inputValue, setInputValue] = useState(0);

    const handleInputChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
    }
    return (
        <div className="container">
            <div className="card-header">Network Speed Converter</div>
            <div className="card-body">
                <UnitControl />
                <UnitConverter inputValue={inputValue} handleInputChange={handleInputChange} />
            </div>
            <CardFooter inputValue={inputValue} />
        </div>
    )
}

export default Converter